var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

	var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");

	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var tdImc = paciente.querySelector(".info-imc");

	var alturaEhValida = true;
	var pesoEhValido = true;

	if(peso <= 0 || peso >= 1000){
	    console.log("Peso inválido");
	    tdImc.textContent = "Peso inválido!";
	    pesoEhValido = false;
	    paciente.classList.add("paciente-invalido");
	}

	if(altura <= 0 || altura >= 3){
	    console.log("Altura inválida");

	    tdImc.textContent = "Altura inválida!";
	    alturaEhValida = false;
	    paciente.classList.add("paciente-invalido");
	}

	if(pesoEhValido && alturaEhValida){
	    
		tdImc.textContent = calculaImc(peso, altura);
	}else {
	    tdImc.textContent = "Altura e/ou peso inválidos!"
	}

}

function calculaImc(peso, altura){
	
	var imc  = peso/(altura * altura);

	return imc.toFixed(2);

}






