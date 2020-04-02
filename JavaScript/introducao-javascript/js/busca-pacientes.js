var buscaPacientes = document.querySelector("#buscar-pacientes");

buscaPacientes.addEventListener("click", function(){
console.log("Buscando pacientes...");

var request =  new XMLHttpRequest();

request.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

request.addEventListener("load", function(){
	var resposta = request.responseText;
    var pacientes = JSON.parse(resposta);

    pacientes.forEach(function(paciente) {
        adicionaPacienteNaTabela(paciente);
    });
});

request.send();

});