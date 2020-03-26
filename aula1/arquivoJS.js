var dados = []
function salvar() {
    var idade = document.getElementById('idade').value
    var nome = document.getElementById('nome').value
    var cpf = document.getElementById('cpf').value
    var rg = document.getElementById('rg').value
    var nascimento = document.getElementById('nascimento').value
    console.log("JSON::",idade,nome,cpf,rg,nascimento )
    dados = [idade,nome, cpf, rg, nascimento]
    validaDados(dados);
};

var array = []

function dados(item) {
    array.push(item)
    array.forEach(function(elemento) {

    });
    
}

function validaDados(dados) {

    console.log("validaDados")
    console.log("dados::", dados)
    
}