//console.log(document.querySelector("h1"));
var titulo = document.querySelector("h1");
console.log(titulo);
console.log(titulo.textContent);
titulo.textContent = ("Pedro nutritations");


var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
console.log(paciente);
console.log(tdPeso);


var tdAltura = document.querySelector("#primeiro-paciente");
var altura = document.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);


 //vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
 var pesoehValido = true;
  var alturaehValido = true;

if (peso < 0 || peso > 1000) {
   console.log("peso inválido");
   var pesoehValido = false;
}

if(altura < 0||altura > 3.00){
    console.log("Altura inválida");
     var alturaehValido = false;
}

  if(alturaEhValida && pessoEhValido){
    var imc = peso / (altura * altura) ;
    tdImc.textContent = imc;
  }