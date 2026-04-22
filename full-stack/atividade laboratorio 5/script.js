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
    ctx.lineWidth = 2;
    ctx.fillStyle = cir.color;
    ctx.strokeStyle = cir.stroke;
    ctx.arc(cir.x,cir.y,cir.r,cir.ini,cir.fim);
    if(cir.stroke)ctx.stroke();
    if(cir.color)ctx.fill();
    ctx.closePath()
}
function triangulo(ctx,li){
    ctx.beginPath();
    ctx.moveTo(li.x1,li.y1);
    ctx.lineTo(li.x2,li.y2);
    ctx.lineTo(li.x3,li.y3);
    ctx.lineTo(li.x4,li.y4);
    ctx.fillStyle = li.color;
    ctx.fill();
    ctx.closePath()
}
//----------------------------------------------------------------------------------------------------------------------------------------
let canvas1 = document.getElementById("canvas1");
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
    color : "cyan",
    stroke : "green",
    x : 200,
    y : 400,
    r : 60,
    ini : 1*Math.PI,//o math precisa ter M maiusculo
    fim : 2*Math.PI,
}
circulo(ctx1,circulo_1)
let circulo_2 = {
    stroke : "green",
    x : 200,
    y : 400,
    r : 100,
    ini : 1*Math.PI,
    fim : 1.5*Math.PI,
}
circulo(ctx1,circulo_2)
let circulo_3 = {
    stroke : "green",
    x : 200,
    y : 400,
    r : 80,
    ini : 1.5*Math.PI,
    fim : 2*Math.PI,
}
circulo(ctx1,circulo_3)
let circulo_4 = {
    stroke : "green",
    x : 200,
    y : 200,
    r : 80,
    ini : 1*Math.PI,
    fim : 2*Math.PI,
}
circulo(ctx1,circulo_4)
let circulo_5 = {
    stroke : "green",
    x : 200,
    y : 200,
    r : 100,
    ini : 1*Math.PI,
    fim : 1.25*Math.PI,
}
circulo(ctx1,circulo_5)
let circulo_6 = {
    stroke : "green",
    x : 200,
    y : 200,
    r : 100,
    ini : 1.75*Math.PI,
    fim : 2*Math.PI,
}
circulo(ctx1,circulo_6)
let circulo_7 = {
    color : "cyan",
    stroke : "blue",
    x : 200,
    y : 150,
    r : 20,
    ini : 1*Math.PI,
    fim : 3*Math.PI,
}
circulo(ctx1,circulo_7)
let circulo_8 = {
    color : "yellow",
    stroke : "green",
    x : 300,
    y : 300,
    r : 20,
    ini : 1*Math.PI,
    fim : 3*Math.PI,
}
circulo(ctx1,circulo_8)
let circulo_9 = {
    color : "yellow",
    stroke : "green",
    x : 100,
    y : 300,
    r : 20,
    ini : 1*Math.PI,
    fim : 3*Math.PI,
}
circulo(ctx1,circulo_9)
//------------------------------------------------------------------------------------------
let canvas2 = document.getElementById("canvas2")
let ctx2 = canvas2.getContext("2d")
//quadrado do chão
let quadrado_chao = {
    color : "grey",
    x : 0,
    y : 380,
    w : 500,
    h : 120,
}
quadrado(ctx2,quadrado_chao)
//cachoeira
let quadrado_cacho1 = {
    color : "Blue",
    x : 0,
    y : 380,
    w : 60,
    h : 120,
}
quadrado(ctx2,quadrado_cacho1)
let quadrado_cacho2 = {
    color : "blue",
    x : 60,
    y : 440,
    w : 150,//casa com w = 80
    h : 60,
}
quadrado(ctx2,quadrado_cacho2)
let cir_cacho1 = {
    color : "blue",
    x : 0,
    y : 380,
    r : 60,
    ini : 1*Math.PI,
    fim : 2*Math.PI,
}
circulo(ctx2,cir_cacho1)
let cir_cacho2 = {
    color : "blue",
    x : 210,
    y : 500,
    r : 60,
    ini : 1*Math.PI,
    fim : 2*Math.PI,
}
circulo(ctx2,cir_cacho2)
//arvores
let tronco1 = {
    color : "brown",
    x : 60,
    y : 320,
    h : 60,
    w : 30,
}
quadrado(ctx2,tronco1)
let folhas1 = {
    color : "green",
    x : 75,
    y : 320,
    r : 30,
    ini : 1*Math.PI,
    fim : 3*Math.PI,
}
circulo(ctx2,folhas1)
let tronco2 = {
    color : "brown",
    x : 410,
    y : 380,
    h : 60,
    w : 30,
}
quadrado(ctx2,tronco2)
let folhas2 = {
    color : "green",
    x : 425,
    y : 380,
    r : 30,
    ini : 1*Math.PI,
    fim : 3*Math.PI,
}
circulo(ctx2,folhas2)
//sol
let sol = {
    color : "yellow",
    x : 380,
    y : 140,
    r : 55,
    ini : 1*Math.PI,
    fim : 3*Math.PI,
}
circulo(ctx2,sol)
//casa
let casa = {
    color : "brown",
    x : 200,
    y : 280,
    w : 100,
    h : 100,
}
quadrado(ctx2,casa)
let telhado = {
    color : "red",
    x1 : 200,
    y1 : 280,
    x2 : 250,
    y2 : 230,
    x4 : 300,
    y4 : 280,
}
triangulo(ctx2,telhado)
let porta = {
    color : "beige",
    x : 240,
    w : 20,
    h : 50,
    y : 330,
}
quadrado(ctx2,porta)
let janela_1 = {
    color : "lightblue",
    w : 30,
    h : 30,
    x : 210,
    y : 300,
}
quadrado(ctx2,janela_1)
let janela_2 = {
    color : "lightblue",
    w : 30,
    h : 30,
    x : 260,
    y : 300,
}
quadrado(ctx2,janela_2)