
//-- Boton normal
const button = document.getElementById("button");
const button_test = document.getElementById("button-test");

//-- Checkbox
const c1 = document.getElementById("checkbox1");
const c2 = document.getElementById("checkbox2");
const c1_test = document.getElementById("c1_test");
const c2_test = document.getElementById("c2_test");

//-- Botones radio
const r1 = document.getElementById("radio1");
const r2 = document.getElementById("radio2");
const r3 = document.getElementById("radio3");
const r4 = document.getElementById("radio4");
const r_disp = document.getElementById("radio_display");

//-- Boton normal
button.onclick = () => {
    //-- Cambiar de color el texto
    if (button_test.style.color == "") {
        button_test.style.color = "green";
    } else {
        button_test.style.color = "";
    }
}

//---- Botones checkbox
c1.onchange = () => {
    if (c1.checked) {
        c1_test.style.color = "red";
    } else {
        c1_test.style.color = "";
    }
}

c2.onchange = () => {
    if (c2.checked) {
        c2_test.style.color = "red";
    } else {
        c2_test.style.color = "";
    }
}

//-- Botones radio

r1.onchange = () => {
    r_disp.innerHTML = "b1";   
}

r2.onchange = () => {
    r_disp.innerHTML = "b2";   
}

r3.onchange = () => {
    r_disp.innerHTML = "b3";   
}

r4.onchange = () => {
    r_disp.innerHTML = "b4";   
}

