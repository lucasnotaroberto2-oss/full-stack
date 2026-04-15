//declaração das variaveis(ainda não forma desenhadas)

let retangulo_1 = {
    x : 10,
    y : 10,
    w : 50,
    h : 50,
    color: "red"
};
let retangulo_2 = {
    x : 100,
    y : 100,
    w : 50,
    h : 50,
    color : "blue"
};
let retangulo_3 = {
    x : 200,
    y : 200,
    w : 50,
    h : 50,
    color : "green"
};

//----------------------------------------------------------------------------------------------------------------------------------

var canvas = document.getElementById("canvas1");//permite desenhar dentro do canvas especifico pelo id
var ctx = canvas.getContext("2d");//define o contexto dos elemnetos dentro do canvas

function desenho_retangulo(ret){//declaração da função de desenhar retangulos
    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = ret.color;
    ctx.fillRect(ret.x,ret.y,ret.w,ret.h);
    ctx.closePath()
}

let mov = 1
function desenhar(){ // os retangulos so são desenhados quando a função é chamada
    ctx.clearRect(0,0,400,400)//comando que limpa funções antigas
    if(retangulo_1.x == 400 - retangulo_1.w)  {mov = -1}
    if(retangulo_1.x == 0)                    {mov = 1}
    retangulo_1.x = retangulo_1.x + mov // toda vez que a função for realizada o retangulo anda/volta 1 x para o lado
    desenho_retangulo(retangulo_1)
    desenho_retangulo(retangulo_2)
    desenho_retangulo(retangulo_3)
    requestAnimationFrame(desenhar)// realiza a função a cada 60 frames
}

document.addEventListener("keydown",function(evento){//realiza um evento toda vez que a seta for clicada(keydown)
    var tecla = evento.key;
    var velocidade = 5 //define a velocidade com que o retangulo se mexe
    if(tecla == "ArrowUp")    { retangulo_2.y -= velocidade }
    if(tecla == "ArrowRight") { retangulo_2.x += velocidade }
    if(tecla == "ArrowLeft")  { retangulo_2.x -= velocidade }
    if(tecla == "ArrowDown")  { retangulo_2.y += velocidade }
})

desenhar()