console.log("Ejecutando JS...");

//-- Crear objeto gui, con los elementos de la interfaz gráfica
//-- Al tenerlo agrupado podemos pasarlo como parámetro o asignárselo
//-- a otro objeto
const gui = {

  //-- Elementos gui del contador 1
  display1: document.getElementById("display1"),
  boton_inc1: document.getElementById("boton_inc1"),
  boton_dec1: document.getElementById("boton_dec1"),

  //-- Elementos gui del contador 2
  display2: document.getElementById("display2"),
  boton_inc2: document.getElementById("boton_inc2"),
  boton_dec2: document.getElementById("boton_dec2"),
}

//-- Constructor del objeto contador
//-- Se le pasa como parametro su display
function counter(display)
{
  this.valor = 0;

  //-- Almacenar su display
  this.display = display;

  //-- Actualizar el contador
  //-- y mostrarlo en el display
  this.inc = (value) => {
    this.valor += value;
    this.display.innerHTML = this.valor;
  }
}

//-- Crear los dos objetos contadores
const c1 = new counter(gui.display1);
const c2 = new counter(gui.display2);

//-------- Accciones:
//-- Contador 1: Incrementar contador
gui.boton_inc1.onclick = () => {
  c1.inc(1);
}

//-- Decrementar contador
gui.boton_dec1.onclick = () =>{
  c1.inc(-1);
}

//-- Contador 2: Incrementar contador
gui.boton_inc2.onclick = () => {
  c2.inc(1);
}

//-- Decrementar contador
gui.boton_dec2.onclick = () =>{
  c2.inc(-1);
}
