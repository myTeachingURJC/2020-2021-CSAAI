
//-- 
const num1 = document.getElementById("num1");
const num1_disp = document.getElementById("num1_disp");

//-- 
const range = document.getElementById("range");
const range_disp = document.getElementById("range_disp");
const range_disp2 = document.getElementById("range_disp2");

num1.onchange = () => {
    num1_disp.innerHTML = num1.value;
}

range.oninput = () => {
    range_disp.innerHTML = range.value;
}

range.onchange = () => {
  range_disp2.innerHTML = range.value;
}