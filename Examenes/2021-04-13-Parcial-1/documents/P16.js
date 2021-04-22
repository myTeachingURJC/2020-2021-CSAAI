const h = document.getElementById('a');

h.innerHTML="0";

let v = 0;

h.onclick = (e) => {
    v = v + 1;
    h.innerHTML += v;
    
}
