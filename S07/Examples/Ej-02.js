
//-- Entradas de texto 1,2 y 3 con sus párrafos de visualización
const text1 = document.getElementById("text1");
const text1_disp = document.getElementById("text1_disp");
const text2 = document.getElementById("text2");
const text2_disp = document.getElementById("text2_disp");
const text3 = document.getElementById("text3");
const text3_disp = document.getElementById("text3_disp");

//-- Entrada de texto tipo password y su display asociado
const passw = document.getElementById("passw");
const passw_disp = document.getElementById("passw_disp");

//-- Retrollamadas de la entrada 1
text1.oninput = () => {
    text1_disp.innerHTML = "Escribiendo..."
}

text1.onchange = () => {
    text1_disp.innerHTML=text1.value;
}

//-- Retrollamada de la entrada 2
text2.onchange = () => {
    text2_disp.innerHTML = text2.value; 
}

//-- Retrollamada de la entrada 3
text3.onchange = () => {
    text3_disp.innerHTML = text3.value; 
}

//-- Retrollamada de la entrada 4
passw.onchange = () => {
    passw_disp.innerHTML = passw.value;
}
