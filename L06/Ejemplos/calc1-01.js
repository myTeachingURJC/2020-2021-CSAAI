console.log("Ejecutando JS...");

display = document.getElementById("display")
suma = document.getElementById("suma")
igual = document.getElementById("igual")
clear = document.getElementById("clear")

//-- Estados de la calculadora
const ESTADO = {
    INIT: 0,
    OP1: 1,
    OPERATION: 2,
    OP2_INIT: 3,
    OP2: 4
}
 
 //-- Variable de estado de la calculadora
 //-- Al comenzar estamos en el estado incial
 let estado = ESTADO.INIT;   

//-- Función de retrollamada de los digitos
function digito(ev)
{
    //-- Se ha recibido un dígito
    //-- Según en qué estado se encuentre la calculadora
    //-- se hará una cosa u otra

    //-- Si es el primer dígito, no lo añadimos,
    //-- sino que lo mostramos directamente en el display
    if (estado == ESTADO.INIT) {

        display.innerHTML = ev.target.value;

        //-- Pasar al siguiente estado
        estado = ESTADO.OP1;

    } else if (estado == ESTADO.OP1 || estado == ESTADO.OP2) {
        display.innerHTML += ev.target.value;
    } else if (estado == ESTADO.OPERATION) {
       display.innerHTML += ev.target.value;
       estado = ESTADO.OP2;
    }
    
}


//-- Obtener una colección con todos los elementos
//-- de la clase digito
digitos = document.getElementsByClassName("digito")

//-- Establecer la misma función de retrollamada
//-- para todos los botones de tipo dígito
for (let boton of digitos) {

    //-- Se ejecuta cuando se pulsa un boton
    //-- que es un dígito. Para que el código sea 
    //-- mas legible la función de retrollamada se
    //-- escribe como una función normal (digito)
    boton.onclick = digito;
}

//-------- Resto de funciones de retrollamada

//-- Insertar simbolo de sumar
suma.onclick = (ev) => {
  if (estado == ESTADO.OP1) {
    display.innerHTML += ev.target.value;
    estado = ESTADO.OPERATION;
  }
}

//-- Evaluar la expresion
igual.onclick = () => {
  if (estado == ESTADO.OP2) {
    display.innerHTML = eval(display.innerHTML);
    estado = ESTADO.OP1;
  }
}

//-- Poner a cero la expresion
//-- Y volver al estado inicial
clear.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
}