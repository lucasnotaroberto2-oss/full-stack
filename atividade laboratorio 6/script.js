let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")

function quadrado(qua){ //função para desenhar quadrados
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = qua.color;
    ctx.strokeRect(qua.x,qua.y,qua.w,qua.h);
    ctx.closePath()
}
function linha(li){ //função para desenhar as linhas
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = li.color;
    ctx.moveTo(li.x1,li.y1);
    ctx.lineTo(li.x2,li.y2);
    ctx.stroke();
    ctx.closePath()
}
function circulo(cir){//função para desenhar circulos
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.fillStyle = cir.color;
    ctx.strokeStyle = cir.stroke;
    ctx.arc(cir.x,cir.y,cir.r,cir.ini,cir.fim);
    if(cir.stroke)ctx.stroke();
    if(cir.color)ctx.fill();
    ctx.closePath()
}
let gol1 = {
    w : 80,
    h : 40,
    x : 110,
    y : 260,
    color : "white",
}
quadrado(gol1)
let gol2 = {
    w : 80,
    h : 40,
    x : 110,
    y : 0,
    color : "white",
}
quadrado(gol2)
let linha_1 = {
    color : "white",
    x1 : 0,
    y1 : 150,
    x2 : 300,
    y2 : 150,
}
linha(linha_1)
let circulo_1 = {
    stroke : "white",
    x : 150,
    y : 150,
    r : 30,
    ini : 1*Math.PI,
    fim : 3*Math.PI,
}
circulo(circulo_1)
let circulo_2 = {
    stroke : "white",
    color : "white",
    x : 150,
    y : 150,
    r : 5,
    ini : 1*Math.PI,
    fim : 3*Math.PI,
}
circulo(circulo_2)