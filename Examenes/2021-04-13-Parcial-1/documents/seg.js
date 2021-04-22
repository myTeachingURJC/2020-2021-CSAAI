class seg 
{
    constructor (d) {
        this.v = 0;
        this.d = d;
        d.innerHTML="0";
        this.timer = setInterval( ()=> {
            this.v = this.v + 1;
            d.innerHTML = this.v;
        }, 1000);
    }
}

