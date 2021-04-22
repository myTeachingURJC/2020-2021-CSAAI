const b = document.getElementsByClassName("c");
const d = document.getElementById("d");

for (let e of b) {
    e.onclick = (ev) => {
        d.innerHTML = ev.target.value*100;
    }
}