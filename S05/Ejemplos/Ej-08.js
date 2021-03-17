console.log("Ejecutando JS...");

const botones = document.getElementsByClassName("digito");

for (let boton of botones) {
    console.log("Boton: " +  boton.value)
}

