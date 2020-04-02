var buscaPacientes = document.querySelector("#buscar-pacientes");

buscaPacientes.addEventListener("click", function(){
console.log("Buscando pacientes...");

var request =  new XMLHttpRequest();

request.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

request.addEventListener("load", function(){
	var erroAjax = document.querySelector("#erro-ajax");

    if (request.status == 200) {
	    erroAjax.classList.add("invisivel");
	    var resposta = request.responseText;
	    var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente) {
            adicionaPacienteNaTabela(paciente);
        });
    } else {
    	erroAjax.setAttribute("id","mensagens-erro");
        erroAjax.classList.remove("invisivel");

    }																													        
});

request.send();

});