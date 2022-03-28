'use strict'
function init(){
    var buttonOFF = $(".btnOff");
    buttonOFF.hide();
}

function botonPress(event) {
    event.preventDefault();
    var button = $(event.target).attr("class").split(" ")[1];
    $(`.${button}`).show();
    $(event.target).hide();
};

window.addEventListener("load", () => {
    init();
    var buttonON = $(".btnOn");
    var buttonOFF = $(".btnOff");
    
    buttonON.on("click", botonPress);
    buttonOFF.on("click", botonPress);
});



