********************Segue uma pequena documentação do arquivo CSS**************************
Aqui está descrito para que serve cada item estilizado:
/* Define a fonte 'Montserrat' do Google para o corpo, inputs, selects e textareas */
body, input, select, textarea {
    font-family: 'Montserrat', sans-serif;
}

/* Estiliza campos de entrada de texto, número e selects */
input[type="text"],
input[type="number"],
select {
    width: 100%;
    padding: 0.5em;
    border: 2px solid #ccc;
    border-radius: 10px;
    margin: 5px 0;
}

/* Estiliza botões */
button {
    padding: 0.5em 1em;
    border: none;
    border-radius: 10px;
    background-color: #007bff; 
    color: #fff;
    cursor: pointer;
}

/* Estiliza o cabeçalho "Dados do Fornecedor" */
#h2DadosF {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    margin: 20px auto 0 ; 
    text-align: left;
    border-radius: 10px;
    border-collapse: collapse; 
    border: 2px solid #070707;
    width: 70%;
}

/* Estiliza o botão "Incluir anexo" */
#uploadFile {
    background-color: #0da622fe;
    color: #fff;
    padding: 0.5em 1em;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: block; 
    margin: 0 auto;
}

/* Estiliza o botão "Salvar Fornecedor" */
#salvarF {
    background-color: #0da622fe;
    color: #fff;
    padding: 0.5em 1em;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: block; 
    margin: 0 auto;
}

/* Estiliza o contêiner de produtos */
#tProdContainer {
    border: 2px solid #070707; 
    border-radius: 10px; 
    padding: 10px; 
    margin: 0 auto 0 auto; 
    width: 70%; 
    display: flex;
    flex-direction: column;
}

/* Estiliza o cabeçalho "Produtos" */
#h2Produtos {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    margin: 20px auto 0 ; 
    text-align: left;
    border-radius: 10px;
    border-collapse: collapse; 
    border: 2px solid #070707;
    width: 70%;
}

/* Estiliza tabelas de produtos */
.productTable table {
    border: 2px solid #070707 !important;
    border-radius: 10px !important;
    width: 100% !important;
    margin: 10px auto 0 !important;
    border-collapse: collapse !important;
    text-align: center !important;
    border-radius: 10px !important;
}

.productTable th, .productTable td {
    padding: 2px;
    border: 1px solid #ddd;
}

/* Estiliza cabeçalhos de tabela de produtos */
.productTable th {
    text-align: center;
     border-top: none;
}

/* Estiliza células de tabela de produtos */
.productTable td {
    text-align: center;
}

/* Estiliza botão "Adicionar Produto" */
#addProduto {
    background-color: #0da622fe;
    color: #fff;
    padding: 0.5em 1em;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: block;
    margin: 10px auto 0;
}

/* Estiliza contêiner de estilo de guia fluig */
.fluig-style-guide {
    border: 2px solid #070707; 
    border-radius: 10px; 
    padding: 10px;
    margin: 0 auto 0 auto; 
    width: 70%; 
}

/* Estiliza ícone de exclusão */
.deleteIcon {
    width: 60px; 
    height: 65px;
    cursor: pointer; 
    margin-right: 10px;
    float: left;
}

/* Estiliza ícone de produto */
.productIcon{
    width: 40px;
    height: 50px;
    margin-right: 10px;
    float: left;
}

/* Estiliza botão de anexo */
.btnAnexo{   
    background-color: #0da622fe;
    color: #fff;
    padding: 0.5em 1em;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    display: block;
    margin-top: 20px;
}

/* Estiliza grupo de formulário */
.form-group {
    width: 50%;
    float: left;
}

.input-row::after {
    content: "";
    display: table;
    clear: both;
}

/* Estiliza tabela de anexos */
#attachmentsTable {
    border: 2px solid #070707;
    border-radius: 10px; 
    padding: 10px; 
    margin: 0 auto 0 auto;
    margin-bottom: 10px;
    width: 70%; 
    display: flex;
    flex-direction: column;
}

/* Estiliza imagem de anexo */
.attachment-image {
    width: 60px;
    height: 65px;
    cursor: pointer;
    margin-right: 10px;
    float: left;
}

/* Estiliza cabeçalho "Anexos" */
#h2anexos {
    padding: 10px;
    margin: 0 auto 0 auto;
    text-align: left;
    border-radius: 10px;
    border-collapse: collapse; 
    border: 2px solid #070707;
    width: 70%;
    border-radius: 10px;
}

/* Estiliza cabeçalho "Anexos¹" */
#h2anexos¹ {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    margin: 20px auto 0 ;
    text-align: left;
    border-radius: 10px;
    border-collapse: collapse; 
    border: 2px solid #070707;
    width: 70%;  
}

/* Estiliza mensagem de carregamento */
#MsgLoading {
    display: none;
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    text-align: center;
    border-radius: 0 0 10px 10px;
}
