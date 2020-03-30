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

	var alturaEhValida = validaAltura(altura);
	var pesoEhValido = validaPeso(peso);

	if(!pesoEhValido){
	    console.log("Peso inválido");
	    tdImc.textContent = "Peso inválido!";
	    pesoEhValido = false;
	    paciente.classList.add("paciente-invalido");
	}

	if(!alturaEhValida){
	    console.log("Altura inválida");

	    tdImc.textContent = "Altura inválida!";
	    alturaEhValida = false;
	    paciente.classList.add("paciente-invalido");
	}

	if(pesoEhValido && alturaEhValida){
		
		var imc  = calculaImc(peso, altura);
		tdImc.textContent = calculaImc(peso, altura);
	}

}

function calculaImc(peso, altura){
	
	var imc  = peso/(altura * altura);

	return imc.toFixed(2);

}

function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    } else {
        return false;
    }
}
function validaAltura(altura) {
    if (altura > 0 && altura <= 3.00) {
        return true;
    } else {
        return false;
    }
}






