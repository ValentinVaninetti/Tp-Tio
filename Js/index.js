"use strict"
document.addEventListener("DOMContentLoaded", iniciarPagina)

    function iniciarPagina() {
    console.log ("Welcome to the Jungle!!")

    let button = document.querySelector("buttonShow");
    button.addEventListener("click", saludar);

    function saludar() {
    console.log("Hola, me identifico como funcion")
    } 

    button.addEventListener("click", mostrarNav);

    function mostrarNav() {
        let nav = document.getElementById("nav");
        nav.classList.toggle("mostrar");
    }
    
}
