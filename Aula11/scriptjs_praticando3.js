function mostrar() {
    document.getElementById("meudiv").removeAttribute("hidden");
}

function esconder(){
    document.getElementById("meudiv").setAttribute("hidden", true);
}

document.getElementById("btnesconder").addEventListener("click", esconder);

document.getElementById("btnmostrar").addEventListener("click", mostrar);