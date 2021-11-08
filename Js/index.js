"use strict"

console.log ("Hello World!")

let button = document.getElementById("buttonShow");
button.addEventListener("click", saludar);

function saludar() {
  console.log("Hola, soy una funcion")
}

let nav = document.getElementById("nav");
button.addEventListener("click", mostrarNav);

function mostrarNav() {
  nav.classList.toggle("mostrar");
}
//agregar en css una clase para que se muestre el nav
//agregar en css una clase para que se oculte el nav que este todo el tiempo Hidden.
