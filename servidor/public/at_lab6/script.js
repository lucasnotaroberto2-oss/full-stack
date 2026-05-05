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
function campo(){
    quadrado(gol1);
    quadrado(gol2);
    linha(linha_1);
    circulo(circulo_1);
    circulo(circulo_2)
}
let gol1 = {
    w : 80,
    h : 40,
    x : 110,
    y : 260,
    color : "white",
}
let gol2 = {
    w : 80,
    h : 40,
    x : 110,
    y : 0,
    color : "white",
}
let linha_1 = {
    color : "white",
    x1 : 0,
    y1 : 150,
    x2 : 300,
    y2 : 150,
}
let circulo_1 = {
    stroke : "white",
    x : 150,
    y : 150,
    r : 30,
    ini : 1*Math.PI,
    fim : 3*Math.PI,
}
let circulo_2 = {
    stroke : "white",
    color : "white",
    x : 150,
    y : 150,
    r : 5,
    ini : 1*Math.PI,
    fim : 3*Math.PI,
}
let bola = {
    x : 150,
    y : 150,
    r : 20,
    img : new Image(),
    desenha : function(){
        this.img.src = 'bola.png';
        ctx.beginPath();
        ctx.drawImage(this.img,this.x - this.r,this.y - this.r,2*this.r,2*this.r);
        ctx.closePath()
    }
}
function animacao(){
    ctx.clearRect(0,0,300,300);
    campo();//redesenha o capo toda vez que ele é apagado
    bola.desenha();//redesenha a bola
    requestAnimationFrame(animacao)
}
animacao();//fazer a animação de limites com o professor em aula
document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    bola.x = x_mouse;
    bola.y = y_mouse;
    if(x_mouse < 12){bola.x = 12}
    else if(x_mouse > 288){bola.x = 288}
    if(y_mouse < 12){bola.y = 12}
    else if(y_mouse > 288){bola.y = 288}
})