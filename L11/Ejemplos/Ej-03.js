console.log("Ejecutando JS....")

//-- Obtener elementos del DOM
const canvas = document.getElementById('canvas');
const img = document.getElementById('imagesrc')
const ctx = canvas.getContext('2d');

//-- Función de retrollamada de imagen cargada
//-- La imagen no se carga instantaneamente, sino que
//-- lleva un tiempo. Sólo podemos acceder a ella una vez
//-- que esté totalmente cargada
img.onload = function () {

  //-- Se establece como tamaño del canvas el mismo
  //-- que el de la imagen original
  canvas.width = img.width;
  canvas.height = img.height;

  //-- Situar la imagen original en el canvas
  //-- No se han hecho manipulaciones todavia
  ctx.drawImage(img, 0,0);

  //-- Obtener la imagen del canvas en pixeles
  let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

  //-- Obtener el array con todos los píxeles
  let data = imgData.data

  //-- data[0] es el canal rojo del pixel de la posición 0,0
  //-- data[1] es el canal verde del pixel 0,0
  //-- data[2] es el canal azul del pixel 0,0
  //-- data[3] es el canal de transparencia del pixel 0,0
  //-- data[4] es el canal ROJO del pixel 1,0
  //-- ....
  //-- En general, para el pixel i
  //-- data[4*i] es el canal rojo
  //-- data[4*i + 1]: Canal verde
  //-- data[4*i + 2]: Canal azul
  //-- data[4*i + 3]: Canal de transparencia

  //-- Colocar un pixel rojo en (200,50)

  //-- Obtener el numero de pixel a partir de su posicion
  let i = 200 + 50*canvas.width;

  //-- Pixel rojo: canal rojo a tope. Resto de colores a 0
  //-- La transparencia no se modifica
  data[i*4] = 255;    //-- Canal Rojo
  data[i*4 + 1] = 0;  //-- Canal Verde
  data[i*4 + 2] = 0;  //-- Canal azul

  //-- Poner la imagen modificada en el canvas
  ctx.putImageData(imgData, 0, 0);
};

console.log("Fin...");
