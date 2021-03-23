console.log("Ejecutando JS...");


//-- Elementos de la interfaz de la calculadora
let display = document.getElementById("display")
let boton1 = document.getElementById("boton1")
let boton2 = document.getElementById("boton2")
let suma = document.getElementById("suma")
let igual = document.getElementById("igual")
let clear = document.getElementById("clear")

//-- Funciones de retrollamada de los botones
//-- Cada vez que se aprieta un boton se actua
//-- sobre la cadena: añadiendo digito, operador +
//-- poniendo a cero o evaluando la expresión

// -- Insertar digito 1
boton1.onclick = (ev) => {
  display.innerHTML += ev.target.value;
}

//-- Insertar digito 2
boton2.onclick = (ev) => {
  display.innerHTML += ev.target.value;
}

//-- Insertar simbolo de sumar
suma.onclick = (ev) => {
  display.innerHTML += ev.target.value;
}

//-- Evaluar la expresion
igual.onclick = (ev) => {
  display.innerHTML = eval(display.innerHTML);
}

//-- Poner a cero la expresion
clear.onclick = (ev) => {
  display.innerHTML = "0";
}