'use strict'
window.addEventListener("load", () => {
    class Rutas{
        constructor(pagina){
            this.pagina = pagina;
        }
        get getRruta(){
            var url = window.location.href;
            var urlSplit = url.split("/");
            urlSplit.pop();
            urlSplit.push(this.pagina);
    
            url = urlSplit.join("/")
            return url;
        }
    }
});