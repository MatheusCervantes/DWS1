$(document).ready(function () {
    $('#preview').hide();
});
function corPreview(cor) {
    var corAtual = cor.replace("bt_", "");
    $('body').css('background-color', corAtual);
    $('#preview').show();
}
function corPreviewRemove() {
    $('body').css('background-color', '');
    $('#preview').hide();
}
function corFixa(cor) {
    $('body').removeClass();
    $('body').addClass(cor);
}
function reset() {
    $('body').removeClass();
}