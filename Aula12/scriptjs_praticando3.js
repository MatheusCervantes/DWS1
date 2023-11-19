$("#lampada").mouseover(function () {
    $('#lampada').attr("src", "imagens/lampada-acesa.png");
    $('body').css("background-color", "white");
    $('#texto1').css("color", "black");
    $('#texto2').css("color", "black");
});

$("#lampada").mouseout(function () {
    $('#lampada').attr("src", "imagens/lampada.png");
    $('body').css("background-color", "black");
    $('#texto1').css("color", "white");
    $('#texto2').css("color", "white");
});
