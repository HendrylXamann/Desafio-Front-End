function preencherEnderecoComCEP() {
    const cep = document.getElementById("CEP").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
  
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Primeiro fazer a validação de erro
            if (data.erro) {
                alert("CEP não encontrado!");
            } else {
                // Caso não dê erro, ele executa o preenchimento
                document.getElementById("Endereço").value = data.logradouro;
                document.getElementById("Bairro").value = data.bairro;
                document.getElementById("Municipio").value = data.localidade;
                document.getElementById("Estado").value = data.uf;
                document.getElementById("Numero").value = data.numero;
            }
        })
        .catch(error => {
            console.error("Falha na solicitação da API: " + error);
        });
  }
  
  // Inicialização da função - Quando o usuário sair do campo CEP o preenchimento acontecerá
  document.getElementById("CEP").addEventListener("blur", preencherEnderecoComCEP);
  
  //Função para criação da tabela de produtos
  function AddProdutoTabelaProd(paramCount) {
        // Criação da tabela
        const newTable = document.createElement('table');
        newTable.className = 'productTable';
        const newThead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        headerRow.innerHTML = `<th>Produto ${paramCount}</th>`;
        newThead.appendChild(headerRow);
        // Campos no corpo
        const newTbody = document.createElement('tbody');
        const dataHeaderRow = document.createElement('tr');
        dataHeaderRow.innerHTML = `
          <th></th>
          <th></th>
          <th>Descrição do Produto</th>
          <th>Und.Medida</th>
          <th>Quantidade em Estoque</th>
          <th>Valor Unitário</th>
          <th>Valor Total</th>
        `;
        newThead.appendChild(dataHeaderRow);
        // Configuração dos campos
        const dataRow = document.createElement('tr');
        dataRow.innerHTML = `
          <td><img src="Assets - icones/Trash.png" class="deleteIcon" alt="Excluir"></td>
          <td><img src="Assets - icones/product.png" class="productIcon" alt="Excluir"></td>
          
          <td><input type="text" class="prod" required placeholder="Campo obrigatório"></td>
          <td>
                <select class="unit" required>
                    <option value="cm">cm</option>
                    <option value="m">m</option>
                    <option value="kg">kg</option>
                    <option value="g">g</option>
                </select>
          </td>  
          <td><input type="number" class="quantity" required pattern="^[1-9]\d*(\.\d+)?$" placeholder="Campo obrigatório"></td> 
          <td><input type="number" class="unitPrice" required step="0.01" placeholder="Campo obrigatório"></td> 
          <td><input type="number" class="total" required readonly style="background-color: gray;"></td>
          
        `;
        // Função (jquery) para calcular os valores
        $(newTable).on('input', 'input.quantity, input.unitPrice', function () {
            const $row = $(this).closest('tr'); 
            const quantity = parseFloat($row.find('input.quantity').val()) || 0; 
            const unitPrice = parseFloat($row.find('input.unitPrice').val()) || 0;
            const total = quantity * unitPrice;
            $row.find('input.total').val(total.toFixed(2));
        });
  
        // Insere no contêiner, do HTML, as tabelas
        newTbody.appendChild(dataRow);
        document.getElementById('tableProd').appendChild(newTable);
        newTable.appendChild(newThead);
        newTable.appendChild(newTbody);
    };
  
  // Inicializa a função mostrando a primeira tabela (default) e constrói a funcionalidade do adicionar produto
  AddProdutoTabelaProd(1);
  let vContador = 1;
  document.getElementById('addProduto').addEventListener('click', function() {
    vContador++; 
    AddProdutoTabelaProd(vContador);
  });

  function excluirTabela(tabela) {
    if (tabela) {
        tabela.remove();
        vContador--; //reduz o valor de produtos no contador sempre que ocorre uma exclusão
    }
  }
  // Inicializando a função de exclusão com uma função de validação 
  document.addEventListener("click", function(paramExcl) {
    if (paramExcl.target && paramExcl.target.classList.contains("deleteIcon")) {
        var row = paramExcl.target.closest("tr");
        if (row) {
            var tabela = row.closest("table");
            excluirTabela(tabela);
        }
    }
  });

// Anexos
  function openFileInput() {
    const fileInput = document.getElementById('fileInput');
    fileInput.setAttribute('multiple', 'multiple'); // Permite selecionar vários arquivos
    fileInput.addEventListener('change', EventosBtnsAnexos);
    fileInput.click();
}

const attachments = [];
function EventosBtnsAnexos(event) {
    const fileInput = event.target;
    const attachmentsTable = document.getElementById('attachmentsTable').getElementsByTagName('tbody')[0];

    for (let i = 0; i < fileInput.files.length; i++) {
        const file = fileInput.files[i];
        const row = attachmentsTable.insertRow();
        const cell1 = row.insertCell(0);

        const deleteImage = document.createElement('img');
        deleteImage.src = 'Assets - icones/Trash.png';
        deleteImage.className = 'attachment-image'; 
        deleteImage.alt = 'Excluir';
        deleteImage.addEventListener('click', () => DeletarArquivoAnexo(row));
        const viewImage = document.createElement('img');
        viewImage.src = 'Assets - icones/eye.png';
        viewImage.className = 'attachment-image'; 
        viewImage.alt = 'Visualizar';
        viewImage.addEventListener('click', () => ArquivoBlob(file));
        cell1.appendChild(deleteImage);
        cell1.appendChild(viewImage);
        const cell2 = row.insertCell(1);
        cell2.innerText = file.name; // Adiciona o nome do arquivo na segunda célula
        // Armazena o arquivo em memória
        attachments.push(file);
    }
}

function DeletarArquivoAnexo(row) {
    const attachmentsTable = document.getElementById('attachmentsTable').getElementsByTagName('tbody')[0];
    attachmentsTable.deleteRow(row.rowIndex);
  }


function ArquivoBlob(file) {
    const blob = new Blob([file], { type: file.type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = file.name;
    link.click();
}
//Fim anexos

//Json
document.getElementById('salvarF').addEventListener('click', function() {
    document.getElementById('MsgLoading').style.display = 'block';
    // Realizar a validação dos campos obrigatórios
    if (ValidacaoCampos()) {
        // Construir o objeto JSON 
        const fornecedor = {
            RazaoSocial: document.getElementById('razaoSocial').value,
            NomeFantasia: document.getElementById('nomeFantasia').value,
            Cnpj: document.getElementById('cnpj').value,
            InscricaoEstadual: document.getElementById('InscricaoEstadual').value,
            InscricaoMunicipal: document.getElementById('InscricaoMunicipal').value,
            CEP: document.getElementById('CEP').value,
            Endereco: document.getElementById('Endereço').value,
            Numero: document.getElementById('Numero').value,
            Complemento: document.getElementById('Complemento').value,
            Bairro: document.getElementById('Bairro').value,
            Municipio: document.getElementById('Municipio').value,
            Estado: document.getElementById('Estado').value,
            NomeDeContato: document.getElementById('NpessoaContat').value,
            TelefoneDeContato: document.getElementById('telefone').value,
            EmailContato: document.getElementById('email').value,
            produtos: [],
            anexos: []
        };

        // Construir a lista de produtos
        const productTables = document.querySelectorAll('.productTable');
        productTables.forEach(function(table, index) {
            const productRow = table.querySelector('tbody tr');
            if (productRow) {
                const descricaoProduto = productRow.querySelector('.prod').value;
                const unidadeMedida = productRow.querySelector('.unit').value;
                const qtdeEstoque = productRow.querySelector('.quantity').value;
                const valorUnitario = productRow.querySelector('.unitPrice').value;
                const valorTotal = productRow.querySelector('.total').value;
                fornecedor.produtos.push({
                    indice: index + 1,
                    descricaoProduto,
                    unidadeMedida,
                    qtdeEstoque,
                    valorUnitario,
                    valorTotal
                });
            }
        });
        // Construir a lista de anexos
        attachments.forEach(function(file, index) {
            fornecedor.anexos.push({
                indice: index + 1,
                nomeArquivo: file.name,
                blobArquivo: file
            });
        });

        // Download do JSON
        const jsonBlob = new Blob([JSON.stringify(fornecedor, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(jsonBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'fornecedor.json';
        link.click();

    } else {
        alert('Preencha todos os campos obrigatórios, incluindo ao menos um anexo e produto.');
        document.getElementById('MsgLoading').style.display = 'none';
    }
});

function ValidacaoCampos() {
    const requiredFields = document.querySelectorAll('[required]');
    for (const field of requiredFields) {
        if (!field.value) {
            return false; // Retorna falso se algum campo obrigatório não estiver preenchido
        }
    }
    // Pelo menos um anexo foi inserido?
    if (attachments.length === 0) {
        return false; // Retorna falso se nenhum anexo foi inserido
    }

    return true; // Todos os campos obrigatórios estão preenchidos e pelo menos um anexo foi inserido
}








  
  
  