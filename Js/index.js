<<<<<<< HEAD
console.log("Che Vaca... hacemos un chat por aca?")
console.log("Dale, que contas de tu vida?")
console.log("Tengo un noticion para la proxima sesion de mates")
=======
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
>>>>>>> d35e60b6d99853df2bb76d8f5c2fb0469db4e8e0
