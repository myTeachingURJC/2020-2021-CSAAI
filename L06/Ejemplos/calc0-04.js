console.log("Ejecutando JS...");

let display = document.getElementById("display")
let suma = document.getElementById("suma")
let igual = document.getElementById("igual")
let clear = document.getElementById("clear")

//-- Obtener una colección con todos los elementos
//-- de la clase digito
let digitos = document.getElementsByClassName("digito")

//-- Establecer la misma función de retrollamada
//-- para todos los botones de tipo dígito
for (let boton of digitos) {

    //-- Se ejecuta cuando se pulsa un boton
    //-- que es un dígito
    boton.onclick = (ev) => {
        display.innerHTML += ev.target.value;
        console.log("DIGITO!!!");
    }
}

//-------- Resto de funciones de retrollamada

//-- Insertar simbolo de sumar
suma.onclick = (ev) => {
  display.innerHTML += ev.target.value;
}

//-- Evaluar la expresion
igual.onclick = () => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = () => {
  display.innerHTML = "0";
}