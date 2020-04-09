//Selecionamos o campo pelo nome da classe 
var campo = $(".campo-digitacao");

//Seleciona o texto da tag cujo id tempo-digitacao
var tempoInicial = $("#tempo-digitacao").text();

//inicializa todas as funcoes necessarias para o funcionamento do jogo
$(function(){
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    //chamando atualiza placar assim que carregado o ready
    atualizaPlacar();

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
    
    //Ativa o cronometro assim que houver focus no textarea
    campo.one("focus", function() {
		var tempoRestante = $("#tempo-digitacao").text();
    	$("#botao-reiniciar").attr("disabled",true);

		var cronometroID = setInterval(function() {
	    tempoRestante--;
	    $("#tempo-digitacao").text(tempoRestante);
	    if (tempoRestante < 1) {
	       	
	        //para o cronometro quando chega no zero
	        clearInterval(cronometroID);
			finalizaJogo();
	        $("#botao-reiniciar").attr("disabled", false);
	        }
	    }, 1000);
	});
}

function finalizaJogo() {
   //desabilita o campo qnd o cronometro zera
	campo.attr("disabled", true);
    campo.toggleClass("campo-desativado");
    inserePlacar();
}

function reiniciaJogo(){
	//habilita o textarea para o jogador inserir o text
    campo.attr("disabled",false);
    
    //substitui o texto escrito no textearea por ""(Limpa a caixa de texto)
    campo.val("");
    
    //Zera os contadores
    $("#contador-palavras").text("0");
    $("#contador-caracteres").text("0");

    //reinicia o cronometro do jogo
    $("#tempo-digitacao").text(tempoInicial);
   
    inicializaCronometro(); 
    campo.toggleClass("campo-desativado");

    //remove qq borda colorida da caixa de texto
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");
}

function inicializaMarcadores() {

    
    campo.on("input", function() {
    	var frase = $(".frase").text();
	    var digitado = campo.val();
		var comparavel = frase.substr(0 , digitado.length);
		if(digitado == comparavel) {
		    campo.addClass("borda-verde");
		    campo.removeClass("borda-vermelha");
		} else {
		    campo.addClass("borda-vermelha");
		    campo.removeClass("borda-verde");
		}
	});
}

function atualizaTempoInicial(tempo) {
	tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}





