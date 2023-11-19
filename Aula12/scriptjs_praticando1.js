const nome = prompt("Qual o seu nome?");
$('#nome').text("Seja Bem-Vindo, " + nome + "!");

$('#btnAddText').click(function() {
    $('#text').after("<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci deleniti quod magni error nostrum excepturi commodi praesentium dolor eveniet quis nisi exercitationem aliquid, eligendi illum optio suntrerum debitis!</p>");
});

$("#btnRmText").on("click", function() {
    $('p').remove();
});

