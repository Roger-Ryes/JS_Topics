'use strict'
window.addEventListener("load", () => {
    var pagina = "date.html";
    var ruta = new Rutas(pagina);
    var url = ruta.getRruta;

    function validate() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        window.location = url;
    }
});