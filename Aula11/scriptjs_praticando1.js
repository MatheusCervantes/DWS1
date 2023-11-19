var img = document.getElementById("lampada");
var body = document.body;


function lampada_acesa() {
    img.setAttribute('src', 'imagens/lampada-acesa.png');
    body.style.background = "white";
    document.getElementById("texto1").style.color = "black";
    document.getElementById("texto2").style.color = "black";
};

function lampada_apagada() {
    img.setAttribute('src', 'imagens/lampada.png');
    body.style.background = "black";
    document.getElementById("texto1").style.color = "white";
    document.getElementById("texto2").style.color = "white";
};

img.addEventListener('mouseover', lampada_acesa);
img.addEventListener('mouseout', lampada_apagada);