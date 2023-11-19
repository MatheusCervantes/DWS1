const quadrados = document.querySelectorAll('.quadrado');
var quadrado_selecionado = null;

quadrados.forEach((quadrado) => {
    quadrado.addEventListener('click', function(){
        if (this.classList.contains('selecionado')) {
            this.classList.remove('selecionado');
            quadrado_selecionado = null;
        } else if (quadrado_selecionado) {
            alert('ATENÇÃO! Já há um quadrado selecioando, desselecione-o antes de selecionar outro');
        } else {
            this.classList.add('selecionado');
            quadrado_selecionado = this;
        }
    });
});

document.addEventListener('keydown', function(tecla) {
    if (quadrado_selecionado) {
        var left = parseInt(window.getComputedStyle(quadrado_selecionado).left);
        var top = parseInt(window.getComputedStyle(quadrado_selecionado).top);

        if (tecla.key == 'w') {
            top -= 10;
        } else if (tecla.key == 'a') {
            left -= 10;
        } else if (tecla.key == 's') {
            top += 10;
        } else if (tecla.key == 'd') {
            left += 10;
        }

        if (tecla.key == 'ArrowUp') {
            top -= 10;
        } else if (tecla.key == 'ArrowLeft') {
            left -= 10;
        } else if (tecla.key == 'ArrowDown') {
            top += 10;
        } else if (tecla.key == 'ArrowRight') {
            left += 10;
        }

        quadrado_selecionado.style.left = left + 'px';
        quadrado_selecionado.style.top = top + 'px';
    }
})