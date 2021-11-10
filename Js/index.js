<<<<<<< HEAD
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
=======
console.log("Che Vaca... hacemos un chat por aca?");
console.log("Dale, que contas de tu vida?");
console.log("Como venis con TIO?");
console.log("Tengo un noticion para la proxima sesion de mates");
console.log("contame ahora!")
>>>>>>> chuscharet
