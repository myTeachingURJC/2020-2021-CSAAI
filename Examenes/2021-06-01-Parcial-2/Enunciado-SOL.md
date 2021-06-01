 # 2021-06-01 CSAAI PARCIAL II

## Pregunta 1: S6. FPS

Un juego programado en Javascript tarda los siguientes tiempos en realizar las siguientes acciones:

* Cálculo de las física del juego: 5ms
* Borrado de la pantalla: 5ms
* Dibujo de los objetos en la pantalla: 5ms

¿Cual será la **frecuencia de refresco** de la pantalla en **fps**?. De acuerdo a ese resultado, indica si el movimiento se verá fluido o no

### Solución

El tiempo que se tarda en tener disponible el nuevo frame será de T = 5 + 5 + 5 = 15ms. Esto nos da ua frecuencia de refresco de 1 / 15ms = 66.7Hz, que son unos 66 fps.  Como la frecuencia es mayor de 60Hz, el movimiento se verá fluido

## Pregunta 2: S6. Dibujando

Analiza los iguientes ficheros e Indica qué es lo que aparece en el navegador cuando se carga P2.html:

* P2.html:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <script src="P2.js" defer></script>
    <link rel="stylesheet" href="P2.css">
</head>
<body>
    <h2>Canvas</h2>
    <canvas id="canvas"></canvas>
</body>
</html>
```

* P2.css:

```css
canvas {
    background-color: lightblue;
    border-style: solid;
    border-width: 1px;
    border-color: black;
    border-radius: 5px;
  }
```

* P3.js

```js
const canvas = document.getElementById("canvas");
canvas.width = 200;
canvas.height = 100;
const ctx = canvas.getContext("2d");
ctx.beginPath();
  ctx.rect(5,5, 100, 50);
  ctx.fillStyle = 'blue';
  ctx.fill();
  ctx.stroke();
ctx.closePath();
```

### Solución

Aparece un canvas azul claro de dimensiones 200x100, con borde negro y esquinas redondeadas. Dentro de ese canvas, en la posición 5,5 estará la esquina superior izquierda de un rectángulo azul de dimensiones 100x50

## Pregunta 3: S6. Canvas I 

¿Qué se dibuja en un canvas cuando se ejecutan los siguientes métodos de su contexto ctx? (no indiques coordenadas concretas, explícalo en general)

```js
ctx.beginPath();
    ctx.moveTo(10, 20);
    ctx.lineTo(100, 20);
    ctx.moveTo(10, 80);
    ctx.lineTo(150,80);
    ctx.strokeStyle = 'blue';
    ctx.lineWidth = 4;
    ctx.stroke()
ctx.closePath()
```

### Solución

Se dibujan dos líneas horizontales azules, con un grosor de 4 píxeles. La línea inferior es más larga que la superior

## Pregunta 4: S6. Canvas II

En una aplicación web tenemos definido un canvas, que ya está inicializado, y tiene un tamaño de 800x600 píxeles. Su contexto se encuentra en el objeto `ctx`. La variable x está inicializada a 0. En el código javascript, tras todas las inicializaciones, tenemos el siguiente fragmento:

```js
function A() 
{
 
  x = x + 1;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
    ctx.rect(x, 10, 20, 20);
    ctx.fillStyle = 'red';
    ctx.fill();
  ctx.closePath();
  requestAnimationFrame(A);
}

A();
```

Explica, de forma general lo que hace este código (NO lo describas línea a línea. Analízalo y resume en un párrafo corto lo que hace)

### Solución

Se realiza la animación de un cuadrado rojo, que se desplaza de izquierda a derecha a la velocidad de 1 pixel por frame. La animación sólo termina si recargamos la página. Cuando el cuadrado sale del canvas, la animación continua pero el objeto ya no se muestra


## Pregunta 5: S6. Canvas III

Modificamos el fragmento de código anterior, añadiendo la variable i que inicialmente vale 1, y una sentencia if. El nuevo fragmento es el siguiente:

```js

function A() 
{
 
  x = x + i;      // Modificado
  if (x >= 100) { //-- Añadido
    i = -1;
  }

  //-- Mismo que antes
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
    ctx.rect(x, 10, 20, 20);
    ctx.fillStyle = 'red';
    ctx.fill();
  ctx.closePath();
  requestAnimationFrame(A);
}

A();


``` 

Explica qué hace la variación introducida

### Solución

Ahora la velocidad del cuadrado es variable. Inicialmente es de 1 pixel/frame. Cuando la esquina superior izquierda del cuadro alcanza la posición x = 100, la velocidad cambia a -1, por lo que el cuadrado rebota y empieza a moverse hacia la izquierda, hasta que salga del canvas y deje de verse (no vuelve a tener velocidad positiva a no ser que recarguemos la pàgina)

## Pregunta 6: S7. Botones

Explica de manera general qué utilizamos para poner botones de cualquier tipo en nuestras aplicaciones web

### Solución

Los botones se definen de forma general con la etiqueta `<input>` y el atributo `type` en nuestro fichero HTML

## Pregunta 7: S7. Botones radio

¿Qué son los botones tipo radio?

### Solución

Son un grupo de botones que sólo pueden estar en dos estdos, pero sólo uno de ellos puede estar activo. Si pulsamos en otro se activa el nuevo y se descativa el anterior

## Pregunta 8: S7. HTML

Dado el siguiente fragmento de código HTML incluido en una aplicación web, ¿Qué es lo que se renderiza en la pantalla?

```html

<p> <span id="c1_test">c1</span> <input type="checkbox" id="checkbox1" > 
    <span id="c2_test">c2</span> <input type="checkbox" id="checkbox2"> </p>

```

### Solución

Se colocan dos botones de verificación en la misma línea, uno al lado del otro, identificados con los nombres "c1" y "c2"

## Pregunta 9: S7. HTML II

¿Qué se renderiza con el siguiente fragmento de código HTML?

```html

<p> <input type="text" maxlength=20 placeholder="Holi..."> </p>

```

### Solución

Aparece una caja de texto, de 20 caracteres de longitud y en su interior el valor de ejemplo "Holi..."

## Pregunta 10: S7. HTML y JS

Tenemos definidos los siguientes ficheros. ¿Qué hace esta aplicación web?

* Fichero: index.html

```html

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <script src="test.js" defer></script>
</head>
<body>
    <p>Holi...</p>
</body>
</html>

```

* Fichero: style.css

```css

.A {
    background: lightblue;
  }
  
```

* Fichero: test.js

```js

body = document.getElementsByTagName('body')[0]
window.onkeydown = (e) => {
  if (e.key == 'a') {
    body.classList.toggle("color");
  }
}

```

### Solución

Muestra el texto "Holi" con el fondo por defecto. Al apretar la tecla 'a' se añade el cuerpo (body) a la clase "color", pero como esa clase no está definida no hace nada. La siguiente vez que se apriete se quita de esa clase. Visualmente no se apreciará nada.

(**NOTA ADICIONAL**: Si se hubisese usado la cadena "A" en vez de "color" al llamar a body.classList.toggle(), entonces cambiaría el color del fondo cada vez que se aprieta la tecla 'a')


## Pregunta 11: S8. Señales analógicas

¿Por qué las señales de audio "analógicas" reciben este nombre?

### Solución

Porque son señales electrónicas "análogas" a las señales acústicas. Representan la misma vibración de las moléculas que transportan el sonido, pero usando señales eléctricas

## Pregunta 12: S8. Señales de audio

En un punto del espacio hay una fuente de sonido que emite dos tonos de frecuencias f1 y f2. A una cierta distancia d de esta foco registramos la señal acústica recibida. ¿La forma de esta onda es la misma que la de la fuente? ¿Pueden aparecen frecuencias nuevas diferentes a f1 y f2? (supón que no no hay ninguna otra fuente de sonido)

### Solución

En general, debido a la distorsión, las frecuencias f1 y f2 se atenuarán de diferentes formas, por lo que forma de la onda será en general diferente. No aparecen frecuencias nuevas ya que sólo dependen de la fuente

## Pregunta 13: S8. Señales digitales de audio

Explica brevemente qué son las señales de audio digitales y qué ventajas ofrecen frente a las analógicas

### Solución

Las señales de audio digitales son NÚMEROS. La información está en estos números, y no en la forma de la onda. Los números se pueden copiar, manipular y almacenar sin degradación. En las señales analógicas la información está en la forma de la onda y como se van degradando, poco a poco se va perdiendo la información

## Pregunta 14: S9. Conversion analógico-digital

Indica las etapas que hay en el proceso de conversión del audio analógico al digital, y explica brevemente, y de forma clara y concisa,cada una de ellas

### Solución

En el proceso de pasar de analógico a digital hay dos fases: El muestreo y la cuantificación. En el primero se obtiene una señal discreta en el tiempo, tomando muestras con periodo T, con precisión infinita. En el segundo estas muestras se representan mediante los bits disponibles, convirtiéndose a números binarios de cierta precisión

## Pregunta 15: S9. Muestreo

Se tiene una señal de audio de ancho de banda de 8Khz que se muestrea a las frecuencias de 20Khz y a 40Khz. Si nos quedamos sólo en la etapa de muestreo, con una precisión infinita para representar las muestras ¿Cual de las dos señales digitales tendrá más calidad? ¿La de 20Khz o la de 40Khz? 

### Solución

Puesto que no hay cuantificación, el proceso de muestreo es ideal. El segundo teorema de Nyquist nos garantiza que la señal se podrá reconstruir totalmente (sin ninguna pérdida de calidad) siempre que utilicemos una fracuencia de muestreo de al menos 16KHZ (el doble de su ancho de banda). Como ambas señales cumplen este criterio, ambas nos permitirán obtener la misma señal incial y su calidad será LA MISMA

## Pregunta 16: S9. Codecs

Explica de forma general, clara y concisa el funcionamiento de un códec. ¿Se pierde calidad en la señal a su salida?

### Solución

La misión de los códecs es reducir la cantidad de bits de la señal, de forma que la calidad no se degrade o lo haga lo menos posible. La pérdida de calidad depende del codec. En algunos no hay pérdidas. En otros son sí

## Pregunta 17: S10. Internet

¿Qué problemas presenta Internet para el envío de información multimedia?

### Solución

Internet se concibió como una red de datos y no para tráfico multimedia. Es una red que se puede congestionar, no garantiza la calidad y no hay control de la admisión

## Pregunta 18: S10. Tipos de aplicaciones multimedia

Indica qué tipos de aplicaciones multimedia hay y cuáles son sus requisitos de diseño

### Solución

Las aplicaciones multimedia se dividen en dos grupos: las aplicaciones interactivas y las de streaming. Las primeras son las más restrictivas. En ellas el retardo debe estar comprendido entre 150 y 450ms. En las segundas entre 1 y 10 segundos. No debe haber interrupciones en ningún caso

## Pregunta 19: S10. Tiempo de playout 

 Se tiene una red en la que entre el emisor y el receptor sólo hay un nodo. Los retardos de transmisión son de 0. Se envían dos paquetes de 20ms. El tiempo de encolamiento del paquete 1 es de 2ms. El del paquete 2 de 30ms. ¿Cual es el tiempo de playout mínimo? ¿Qué tiempo de playout usarías si estás implementando una aplicación de streaming?

 ### Solución

 El tiempo de playout mínimo es de 50ms. Sin embargo, a la hora de implementar una aplicación de streaming en esta red se usaría un tiempo de playout de 1 segundo, que es lo mínimo para este tipo de aplicaciones 

![](P19-1.svg)

## Pregunta 20: S11. FEC Genérico

En el receptor se reciben un grupo de 6 paquetes de 5 bits, P1 = 00100, P2 = 11011, P4 = 10101, P5 = 00000, P6 = 01110, pero el paquete 3 NO llega. Si se está usando una técnica FEC genérica (basada en el criterio de paridad), determinar cuál era el paquete 3

### Solución

El paquete que falta es: 00100.  Se calcula poniendo los paquetes en forma de matriz y calculando la paridad de las columnas:

 P1: 00100
 P2: 11011
 P4: 10101
 P5: 00000
 P6: 01110
     -----
 P3: 00100






