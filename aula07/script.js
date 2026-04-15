let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//quadrado
ctx.beginPath();//os comandos begin e end path definem o bloco de comandos que serão usados para criar o bquarado
ctx.lineWidth = 2;
ctx.fillStyle = "blue";//cor do preenchimento
ctx.strokeStyle = "red";//cor da borda
ctx.fillRect(10,10,50,50);//definem as dimensões que serão pintadas, no caso de dentro do quadrado
ctx.strokeRect(10,10,50,50);//as medidas dizem respito,respectivamente a x(posição horizontal), y(posição vertical), largura, comprimento
ctx.closePath();
//as palavras complementares necessitam ser iniciadas com letras maisculas

//quadrilatero
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "blue";
ctx.strokeStyle = "red";
ctx.moveTo(200,150);//move o pincel dentro do canvas sem pinta-lo
ctx.lineTo(60,10);//lineTo desenha as linhas da forma
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();//permite que apareça o preenchimento dentro do canvas
ctx.stroke();//permite que apareça a borda da formas dentro do canvas
ctx.closePath();

//circulo
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = "blue";
ctx.strokeStyle = "red";
//----novos parametros----//
ctx.arc(200,200,50,1*Math.PI,3*Math.PI)//50 é o parametro para raio, os outros dois definem o inicio e o fim do circulo
//------------------------//
ctx.fill();
ctx.stroke();
ctx.closePath();
//exercicio01
let canvas2 = document.getElementById("ex1");
let ctx2 = canvas2.getContext("2d");

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = "yellow";
ctx2.fillRect(0,450,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = "green";
ctx2.fillRect(450,450,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = "red";
ctx2.fillRect(0,0,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = "blue";
ctx2.fillRect(450,0,50,50);
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = "green";
ctx2.moveTo(0,250);
ctx2.lineTo(500,250);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = "green";
ctx2.arc(250,250,70,2*Math.PI,1*Math.PI);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = "red";
ctx2.moveTo(0,0);
ctx2.lineTo(500,500);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = "blue";
ctx2.moveTo(500,0);
ctx2.lineTo(0,500);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = "green";
ctx2.fillStyle = "yellow";
ctx2.arc(110,200,25,1*Math.PI,3*Math.PI);
ctx2.stroke();
ctx2.fill();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = "green";
ctx2.fillStyle = "yellow";
ctx2.arc(390,200,25,1*Math.PI,3*Math.PI);
ctx2.stroke();
ctx2.fill();
ctx2.closePath();

//exercicio02
let canvas3 = document.getElementById("ex2");
let ctx3 = canvas3.getContext("2d");

ctx3.beginPath();
ctx3.fillStyle = "grey";
ctx3.fillRect(0,350,500,150);
ctx3.closePath();

ctx3.beginPath();
ctx3.fillStyle = "cyan";
ctx3.fillRect(0,350,90,150);
ctx3.closePath();

ctx3.beginPath();
ctx3.fillStyle = "cyan";
ctx3.fillRect(90,425,115,90);
ctx3.closePath();

ctx3.beginPath();
ctx3.fillStyle = "brown";
ctx3.fillRect(200,200,120,150);
ctx3.closePath();

ctx3.beginPath();
ctx3.fillStyle = "cyan";
ctx3.arc(0,350,90,1.5*Math.PI,2.5*Math.PI);
ctx3.fill();
ctx3.closePath();

ctx3.beginPath();
ctx3.fillStyle = "cyan";
ctx3.arc(205,500,75,1.5*Math.PI,2.5*Math.PI);
ctx3.fill();
ctx3.closePath();