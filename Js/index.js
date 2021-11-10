"use strict"
document.addEventListener("DOMContentLoaded", iniciarPagina)

    function iniciarPagina() {
    console.log ("Hello World!")

    let button = document.querySelector("buttonShow");
    button.addEventListener("click", saludar);

    function saludar() {
    console.log("Hola, soy una funcion")
    } 

    button.addEventListener("click", mostrarNav);

    function mostrarNav() {
        let nav = document.getElementById("nav");
        nav.classList.toggle("mostrar");
    }
    
}
