function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Thiago Chaves";
    var numPalavras = $("#contador-palavras").text();

    var linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);

    $(".placar").slideDown(500);
    scrollPlacar();
}

function novaLinha(usuario, numPalavras) {
    //Criando uma tag <tr></tr>
    var linha = $("<tr>");
    //Criando os tds
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numPalavras);
    var colunaRemover = $("<td>");
    //cria um <a> com um atributi href e adiciona a classe botao-remover
    var link = $("<a>").attr("href","#").addClass("botao-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    // Ícone dentro do <a>
    link.append(icone);

    // <a> dentro do <td>
    colunaRemover.append(link);

    // Os três <td> dentro do <tr>
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha() {
    event.preventDefault();
    var linha = $(this).parent().parent();

    linha.fadeOut(1000);
    setTimeout(function() {
        linha.remove();
    }, 1000);
}

$("#botao-placar").click(mostraPlacar);

function mostraPlacar() {
    $(".placar").stop().slideToggle(600);
}

function scrollPlacar() {
    //Posicao do placar com relacao ao topo da pagina
    var posicaoPlacar = $(".placar").offset().top;

    $("body").animate(
    {

        scrollTop: posicaoPlacar + "px"
    
    }, 1000);
}