//declaração das funções
function quadrado(ctx,qua){ //função para desenhar quadrados
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = qua.color;
    ctx.fillRect(qua.x,qua.y,qua.w,qua.h);
    ctx.closePath()
}
function linha(ctx,li){ //função para desenhar as linhas
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = li.color;
    ctx.moveTo(li.x1,li.y1);
    ctx.lineTo(li.x2,li.y2);
    ctx.stroke();
    ctx.closePath()
}
function circulo(ctx,cir){//função para desenhar circulos
    ctx.beginPath();
    ctx.fillStyle = cir.color;
    ctx.strokeStyle = cir.stroke;
    ctx.arc = (cir.x,cir.y,cir.r,cir.ini,cir.fim);
    ctx.stroke();
    ctx.fill();
    ctx.closePath()
}
//----------------------------------------------------------------------------------------------------------------------------------------
let canvas = document.getElementById("canvas1");
let ctx1 = canvas1.getContext("2d");
//quadrados dos cantos inferiores

//esquerda
let quadrado_1 = {
    x : 0,
    y : 0,
    w : 80,
    h : 80,
    color : "blue"
}
//direita
let quadrado_2 = {
    x : 320,
    y : 0,
    w : 80,
    h : 80,
    color : "red",
}
//quadrados dos cantos inferiores

//esquerda
let quadrado_3 = {
    x : 0,
    y : 320,
    w : 40,
    h : 40,
    color : "yellow"
}
let quadrado_4 = {
    x : 0,
    y : 360,
    w : 40,
    h : 40,
    color : "yellow"
}
let quadrado_5 = {
    x : 40,
    y : 360,
    w : 40,
    h : 40,
    color : "yellow"
}

//direita
let quadrado_6 = {
    x : 320,
    y : 360,
    w : 40,
    h : 40,
    color : "black"
}
let quadrado_7 = {
    x : 360,
    y : 360,
    w : 40,
    h : 40,
    color : "black"
}
let quadrado_8 = {
    x : 360,
    y : 320,
    w : 40,
    h : 40,
    color : "black"
}
//quadrados do meio
let quadrado_9 = {
    x : 140,
    y : 200,
    w : 60,
    h : 60,
    color : "red"
}
let quadrado_10 = {
    x : 0,
    y : 160,
    w : 40,
    h : 80,
    color : "cyan"
}
let quadrado_11 = {
    x : 360,
    y : 180,
    w : 40,
    h : 40,
    color : "cyan"
}

quadrado(ctx1,quadrado_1)
quadrado(ctx1,quadrado_2)
quadrado(ctx1,quadrado_3)
quadrado(ctx1,quadrado_4)
quadrado(ctx1,quadrado_5)
quadrado(ctx1,quadrado_6)
quadrado(ctx1,quadrado_7)
quadrado(ctx1,quadrado_8)
quadrado(ctx1,quadrado_9)
quadrado(ctx1,quadrado_10)
quadrado(ctx1,quadrado_11)

let linha_1 = {
    color : "blue",
    x1 : 0, //uma linha precisa de 4 informações para ser desenhada
    y1 : 0,
    x2 : 200,
    y2 : 200,
}
let linha_2 = {
    color : "red",
    x1 : 400,
    y1 : 0,
    x2 : 200,
    y2 : 200,
}
let linha_3 = {
    color : "green",
    x1 : 0,
    y1 : 200,
    x2 : 400,
    y2 : 200,
}
let linha_4 = {
    color : "grey",
    x1 : 200,
    y1 : 200,
    x2 : 200,
    y2 : 400,
}
linha(ctx1,linha_1)
linha(ctx1,linha_2)
linha(ctx1,linha_3)
linha(ctx1,linha_4)
//criação dos circulos
let circulo_1 = {

}