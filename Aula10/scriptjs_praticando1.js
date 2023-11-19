const nome = prompt("Qual o seu nome?");
document.getElementById("nome").innerHTML = "Seja Bem-Vindo, " + nome + "!";

//const btnRmText = document.querySelector('btnRmText');

function addText() {
    paragraph = document.createElement('p');
    paragraph.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem adipisci deleniti quod magni error nostrum excepturi commodi praesentium dolor eveniet quis nisi exercitationem aliquid, eligendi illum optio suntrerum debitis!';
    document.body.appendChild(paragraph);
}

document.getElementById("btnAddText").addEventListener("click", addText);

function rmText() {
    const paragraphs = document.querySelectorAll('p'); // Seleciona todos os elementos <p>.
    
    // Remove cada parágrafo da página.
    paragraphs.forEach(paragraph => {
        paragraph.remove();
    });
}

document.getElementById("btnRmText").addEventListener("click", rmText);
