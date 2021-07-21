let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

canvas.height = canvas.width;
let size = canvas.height;
let mid = size/2;
let submitButton = document.getElementById("submit");
let piText = document.getElementById("piapprox");
let nField = document.getElementById("n");



function drawBg(){
    ctx.clearRect(0,0,size,size);
    ctx.beginPath();
    ctx.arc(mid,mid,mid,0,2*Math.PI);
    ctx.lineWidth = 0.5;
    ctx.stroke();
}

// submitButton.addEventListener("click", run);
// nField.addEventListener("keyup", run);
nField.addEventListener("input",run);

let inside = 0;
let outside = 0;

drawBg();
run();

function run() {
    inside = outside = 0;
    drawBg();
    let n = nField.value;
    for (let i = 0; i<n; i++) randPoint();
    let txt = `Inside: ${inside}\nOutside: ${outside}\n`;
    let approx = 4*inside/n;
    txt += `Approximation: \n\t${approx}\n`;
    txt += `Error: \n\t${Math.PI-approx}`;
    piText.innerHTML = txt;
}




function dist(x1,y1,x2,y2){
    return Math.hypot(x1-x2,y1-y2);
}

function randPoint(){
    let x = Math.random()*size;
    let y = Math.random()*size;
    ctx.beginPath();
    ctx.arc(x,y,3,0,2*Math.PI);
    if(dist(x,y,mid,mid)>=mid){
        ctx.fillStyle="red";
        outside++;
    }
    else {
        ctx.fillStyle="black";
        inside++;
    }
    ctx.fill();
}