$(document).ready(function () {
    var quadrado_selecionado = null;

    $('.quadrado').click(function () {
        if ($(this).hasClass('selecionado')) {
            $(this).removeClass('selecionado');
            quadrado_selecionado = null;
        } else if (quadrado_selecionado) {
            alert('ATENÇÃO! Já há um quadrado selecionado, desselecione-o antes de selecionar outro');
        } else {
            $(this).addClass('selecionado');
            quadrado_selecionado = this;
        }
    });

    $(document).keydown(function (tecla) {
        if (quadrado_selecionado) {
            var left = parseInt($(quadrado_selecionado).css('left'));
            var top = parseInt($(quadrado_selecionado).css('top'));

            switch (tecla.key) {
                case 'w':
                case 'ArrowUp':
                    top -= 10;
                    break;
                case 'a':
                case 'ArrowLeft':
                    left -= 10;
                    break;
                case 's':
                case 'ArrowDown':
                    top += 10;
                    break;
                case 'd':
                case 'ArrowRight':
                    left += 10;
                    break;
            }

            $(quadrado_selecionado).css('left', left + 'px');
            $(quadrado_selecionado).css('top', top + 'px');
        }
    });
});
