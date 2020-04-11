$("#botao-sync").click(sincronizaPlacar);

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = $("#usuarios").val();
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

function sincronizaPlacar(){
    //Array de placares vazio
    var placar = [];
    //Selecionando todos os Trs dentro do tbody
    var linhas = $("tbody>tr");

    linhas.each(function(){
        //percorre a lista pegando o filho "nth-child" e armazenando na variavel
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();

        //Objeto JS com cada linha
        var score = {
            usuario: usuario,
            pontos: palavras            
        };
        //Inserindo score no Array placar
        placar.push(score);
    });
        //Criando um objeto Js dados que recebe placar para ser enviado no metodo post
        var dados = {
            placar: placar
        };

        $.post("http://localhost:3000/placar", dados, function(){
            console.log("Placar sincronizado com sucesso");

            $(".tooltip").tooltipster("open");

        }).fail(function(){
            $(".tooltip").tooltipster("open").tooltipster("content", "Falha ao sincronizar"); 
        }).always(function(){ 
            setTimeout(function() {
            $(".tooltip").tooltipster("close"); 
            }, 1200);
        });
}

function atualizaPlacar(){
    $.get("http://localhost:3000/placar",function(data){
        $(data).each(function(){
            var linha = novaLinha(this.usuario, this.pontos);
            //adiciona um evento de remover a linha no botao remover apos o F5
            linha.find(".botao-remover").click(removeLinha);

            $("tbody").append(linha);
        });
    });
}