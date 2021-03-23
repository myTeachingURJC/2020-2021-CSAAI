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
    OP2: 3
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

      //-- En los estados OP1 y OP2 el digito recibido
      //-- se añade al display y se permance en el mismo estado
    } else if (estado == ESTADO.OP1 || estado == ESTADO.OP2) {
        display.innerHTML += ev.target.value;

      //-- En el estado OPERATION se añade el digito
      //-- y se pasa al estado OP2  
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

//-- Operación de suma
suma.onclick = (ev) => {

  //-- El operando sólo puede llegar
  //-- cuando hay un número ya introducido
  if (estado == ESTADO.OP1) {

    //-- Meter el operador en el display
    display.innerHTML += ev.target.value;

    //-- Indicar que ya ha llegado la operación
    estado = ESTADO.OPERATION;
  }
}

//-- Evaluar la expresion
igual.onclick = () => {

  //-- La expresión sólo puede evaluar si hemos
  //-- legado al estado OP2 (donde tenemos el perimer
  //-- operando, el operador y al menos un dígito del
  //-- operando 2)
  if (estado == ESTADO.OP2) {

    //-- Calcular resultado
    display.innerHTML = eval(display.innerHTML);

    //-- Pasar el estado OP1, ya que el resultado obtenido
    //-- hace ahora de primer operador
    estado = ESTADO.OP1;
  }
}

//-- Poner a cero la expresion
//-- Y volver al estado inicial
clear.onclick = () => {
  display.innerHTML = "0";
  estado = ESTADO.INIT;
}