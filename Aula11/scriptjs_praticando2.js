var nome = document.getElementById("nome");
var email = document.getElementById("email");
var telefone = document.getElementById("telefone");
var idade = document.getElementById("idade");
var observacao = document.getElementById("observacao");

function validarnome() {
    if (nome.value === "") {
        nome.classList.remove("is-valid");
        nome.classList.add("is-invalid");
    } else {
        nome.classList.remove("is-invalid");
        nome.classList.add("is-valid");
    }
}

function validaremail() {
    if (email.value === "") {
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
    } else {
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
    }
}

function validartelefone() {
    if (telefone.value === "") {
        telefone.classList.remove("is-valid");
        telefone.classList.add("is-invalid");
    } else {
        telefone.classList.remove("is-invalid");
        telefone.classList.add("is-valid");
    }
}

function validaridade() {
    if (idade.value === "") {
        idade.classList.remove("is-valid");
        idade.classList.add("is-invalid");
    } else {
        idade.classList.remove("is-invalid");
        idade.classList.add("is-valid");
    }
}

function validarobservacao() {
    if (observacao.value === "") {
        observacao.classList.remove("is-valid");
        observacao.classList.add("is-invalid");
    } else {
        observacao.classList.remove("is-invalid");
        observacao.classList.add("is-valid");
    }
}

addEventListener("input", validarnome);
addEventListener("input", validaremail);
addEventListener("input", validartelefone);
addEventListener("input", validaridade);
addEventListener("input", validarobservacao);