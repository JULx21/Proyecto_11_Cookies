const popup = document.querySelector(".contenedor-central");

if (localStorage.getItem("cookiesAceptadas") = "true") {
    popup.style.display = "none";
}

function aceptar() {
    localStorage.setItem("cookiesAceptadas", "true");
    popup.style.display = "none";
}

function cancelar() {
    popup.style.display = "none";
}