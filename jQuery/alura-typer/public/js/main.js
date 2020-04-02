//Selecionamos o campo pelo nome da classe e já associamos o evento input com ele.
var campo = $(".campo-digitacao");

var tempoInicial = $("#tempo-digitacao").text();

$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
});

function atualizaTamanhoFrase() {
   //acessa o conteudo da classe frase
	var frase = $(".frase").text();
    
    //quebrando a frase por espacos
	var numPalavras = frase.split(" ").length;
    
   	//seleciona o span com o tamanho da frase e modifica seu conteudo 
	//para o conteudo de numPalavras
	var tamanhoFrase = $("#tamanho-frase");
	tamanhoFrase.text(numPalavras);
}

function inicializaContadores() {
    
    campo.on("input", function() {
	//atualiza contador de palavras
	var conteudo = campo.val();

	//Retira os espaço da String 
    var conteudoSemEspaco = conteudo.replace(/\s+/g,''/*exp regular*/);

	var qtdPalavras = conteudo.split(/\S+//*exp regular*/).length - 1;
	$("#contador-palavras").text(qtdPalavras);

	//atualiza contador de caractere
	var qtdCaracteres = conteudoSemEspaco.length;
	$("#contador-caracteres").text(qtdCaracteres);

});
}

function inicializaCronometro() {
    var tempoRestante = $("#tempo-digitacao").text();
    //Ativa o cronometro assim que houver focus no textarea
    campo.one("focus", function() {

    	$("#botao-reiniciar").attr("disabled",true);

		var cronometroID = setInterval(function() {
	    tempoRestante--;
	    $("#tempo-digitacao").text(tempoRestante);
	    if (tempoRestante < 1) {
	       	//desabilita o campo qnd o cronometro zera
	        campo.attr("disabled", true);
	        //para o cronometro quando chega no zero
	        clearInterval(cronometroID);

	        $("#botao-reiniciar").attr("disabled", false);
	        }
	    }, 1000);
});
}

function reiniciaJogo(){
    campo.attr("disabled",false);
    campo.val("");
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro(); 
}




