console.log("Hola...");

const text1 = document.getElementById("text1");
const text1_disp = document.getElementById("text1_disp");
const text2 = document.getElementById("text2");
const text2_disp = document.getElementById("text2_disp");

const passw = document.getElementById("passw");
const passw_disp = document.getElementById("passw_disp");

text1.oninput = () => {
    text1_disp.innerHTML = "Escribiendo..."
}

text1.onchange = () => {
    text1_disp.innerHTML=text1.value;
}

text2.onchange = () => {
    text2_disp.innerHTML = text2.value; 
}

passw.onchange = () => {
    passw_disp.innerHTML = passw.value;
}
