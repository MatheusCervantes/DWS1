function preencherTabela(dados) {
    $('#corpoTabela').empty();
    $.each(dados, function (i, obj) {
        var row = '<tr><td>' + obj.nome + '</td><td>' + obj.email + '</td><td><button onclick=\"excluirdados(' +
            obj.id + ')\" type=\"button\" class=\"btn btn-danger\">Apagar</button></td></tr>';
        $('#corpoTabela').append(row);
    });
};

function mostrardados() {
    $('#botoes').next('#erro').remove();
    $('#form1').find('input').each(function () {
        $(this).removeClass('is-valid');
    });
    setTimeout(function () {
        
    }, 2000);
    $.ajax({
        type: 'POST',
        url: 'https://epansani.com.br/2023/dw1s4/ajax/list.php',
        async: true,
        data: {
        }, success: function (data) {
            const dados = JSON.parse(data);
            preencherTabela(dados);
        }
    });
}

function validarDados() {
    $('#form1').on('input', 'input', function (event) {
        var elemento = $(event.target);
        var valido = elemento[0].checkValidity();

        if (valido) {
            elemento.removeClass('is-invalid').addClass('is-valid');
        } else {
            elemento.removeClass('is-valid').addClass('is-invalid');
        }
    });
}

function inserir() {
    $('#botoes').next('#confirmacao').remove();
    $.ajax({
        type: 'POST',
        url: 'https://epansani.com.br/2023/dw1s4/ajax/ins.php',
        async: true,
        data: {
            nome: $('#nomeinput').val(),
            email: $('#emailinput').val()
        }, success: function (data) {
            if (data) {
                $('#botoes').after('<div id="confirmacao" class="sucesso mt-3">Dados gravados com sucesso.</div>');
                $('#form1')[0].reset();
                mostrardados();
            } else {
                $('#confirmacao').remove;
            }
        }
    });
}

function inserirDados() {
    validarDados();
    var teste = true;
    $('#form1').find('input').each(function () {
        if ($(this).hasClass('is-invalid')) {
            teste = false;
        }
        if (!$(this).val()) {
            teste = false;
        }
    });

    if (teste == true) {
        $('#erro').remove;
        inserir();
    } else {
        $('#botoes').after('<div id="erro" class="erro mt-3">Dados inválidos ou inexistentes.</div>');
    }
}

function excluirdados(id) {
    var confirmar = confirm("Deseja mesmo remover os dados?");
    if (confirmar) {
        $.ajax({
            type: 'POST',
            url: 'https://epansani.com.br/2023/dw1s4/ajax/rem.php',
            async: true,
            data: {
                id: id
            }, success: function (data) {
                if (data) {
                    alert("Dados removidos com sucesso!");
                    mostrardados();
                } else {
                    alert("Erro ao remover dados!");
                }
            }
        });
    }
}

function limpar() {
    $('#form1')[0].reset();
    $('#erro').remove();
    $('#confirmacao').remove();
}

$(document).ready(function () {
    $('#erro').remove();
    $('#confirmacao').remove();
    mostrardados();
    validarDados();
});

$('#btnsend').click(inserirDados);
$('#btnclear').click(limpar);
$('#btnatt').click(mostrardados);