console.log("Ejecutando JS...");

const canvas = document.getElementById("canvas");

//-- Definir el tamaño del convas
canvas.width = 200;
canvas.height = 100;

//-- Obtener el contexto del canvas
const ctx = canvas.getContext("2d");

//-- Texto solido
ctx.font = "25px Arial";
ctx.fillStyle = 'yellow'
ctx.fillText("Texo sólido", 10, 30);

//-- Texto trazo
ctx.strokeStyle = 'blue';
ctx.font = "35px Arial";
ctx.strokeText("Texto trazo", 5, 80);
