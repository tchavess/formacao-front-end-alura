//acessa o conteudo da classe frase
var frase = $(".frase").text();

//quebrando a frase por espacos
var numPalavras = frase.split(" ").length;

//seleciona o span com o tamanho da frase e modifica seu conteudo 
//para o conteudo de numPalavras
var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numPalavras);

//Selecionamos o campo pelo nome da classe e já associamos o evento input com ele.
var campo = $(".campo-digitacao");
campo.on("input", function() {
	//atualiza contador de palavras
	var conteudo = campo.val();

	//Retira os espaço da String 
    var conteudoSemEspaco = conteudo.replace(/\s+/g,''//exp regular);

	var qtdPalavras = conteudo.split(/\S+//*exp regular*/).length - 1;
	$("#contador-palavras").text(qtdPalavras);

	//atualiza contador de caractere
	var qtdCaracteres = conteudoSemEspaco.length;
	$("#contador-caracteres").text(qtdCaracteres);

});