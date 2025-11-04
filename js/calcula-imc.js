

// titulo.addEventListener() adiciona um escutador de eventos. 
// PRIMEIRO MOSTRAR ESSA - DEPOIS ALTERA-LA PARA FICAR ANONIMA
titulo.addEventListener("click", mostraMensagem);
function mostraMensagem(){
    alert("Olá eu fui clicado.")
}

// funcao anonima = a de cima mas diferente
titulo.addEventListener("click", function(){
    alert("Ola eu fui clicado numa funcao anonima");
});

titulo.addEventListener("click", mostramensagem);
 function mostramensgem(){
    alert("Olá eu fui clicado.")
 }

 var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
event.preventDefault();
alert("OI eu sou o botão e fui clicado");
var from = document.querySekector("#from-adiciona");

var nome  = from.nome.value;
var peso = from.peso.valeus;
var altura = form.altura.valeus;
var gordura = form.gordura.valeus;
 
 var pacienteTr = documen.createElemnts("tr");

 var nomeTd = DocumentType.createElemnts ("td");
 var pesoTd = DocumentType.createElemnts ("td");
 var alturaTd = DocumentType.createElemnts ("td");
 var gorduraTd = DocumentType.createElemnts ("td");
 var imcTd = DocumentType.createElemnts ("td");

 nomeTd.textContent = nome;
 nometd.textContent = peso;
 alturaTd.textContent = altura;
 gorduraTd.textContent = gordura;

pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);


});