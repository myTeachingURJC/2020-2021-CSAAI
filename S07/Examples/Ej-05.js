console.log("Ejecutando JS...");

const display = document.getElementById("display");

//-- Tecla pulsada: Mostrar su información
window.onkeydown = (e)=> {
  display.innerHTML = `Tecla: ${e.key}. Código: ${e.keyCode}`
}

//-- Tecla liberada: Borrar el párrafo
window.onkeyup = (e) => {
  display.innerHTML = ""
}
