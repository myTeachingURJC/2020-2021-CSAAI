//-- Acceder al cuerpo del documento HTML
//-- Es el primer elemento, porque sólo hay un cuerpo
body = document.getElementsByTagName('body')[0]

//-- Funcion de retrollamada de tecla pulsada
window.onkeydown = (e) => {
  
  //-- Comprobar si la tecla es un espacio
  if (e.key == ' ') {

    //-- Cambiar la activación de la clase color
    body.classList.toggle("color");
  }
}

