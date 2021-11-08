"use strict"
document.addEventListener("DOMContentLoaded", iniciarPagina)

    function iniciarPagina() {
    console.log ("Hello World!")

    let button = document.getElementById("buttonShow");
    button.addEventListener("click", saludar);

    function saludar() {
    console.log("Hola, soy una funcion")
    }

    //agregar en css una clase para que se muestre el nav
    //agregar en css una clase para que se oculte el nav que este todo el tiempo Hidden.

    button.addEventListener("click", mostrarNav);

    function mostrarNav() {
        let nav = document.getElementById("nav");
        nav.classList.toggle("mostrar");
    }

    
    
}
