//-- Contador de clicks de boton

console.log("Ejecutando JS...");

//-- Acceder a los elementos del DOM
const display = document.getElementById("display");
const boton = document.getElementById("boton");

//-- Contador de clicks
let cont = 0;

//-- Configurar retrollamada del boton
boton.onclick = () => {
  console.log("Click!");

  //-- Incrementar contador
  cont += 1;

  //-- Actualizar el display
  display.innerHTML += ' ' + cont;
}

