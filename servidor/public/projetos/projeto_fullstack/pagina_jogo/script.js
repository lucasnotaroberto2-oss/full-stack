//declaração das variaveis----------------------------------------------
let canvas = document.getElementById("canvas1")
let ctx = canvas.getContext("2d")
//---------imagens------------------------------------------------------

let background1 = new Image();
background1.src = "../imagens/backgrounds/background_inicial.png"

let arm_hor = new Image();
arm_hor.src = "../imagens/armadilhas/armadilha_horizontal.png"

let img_coracao = new Image();
img_coracao.src = "../imagens/coletaveis/coracao.png"

let diamante = new Image();
diamante.src = "../imagens/coletaveis/diamante.png"

let moeda = new Image();
moeda.src = "../imagens/coletaveis/moeda.png"

let moeda_animacao = new Image();
moeda_animacao.src = "../imagens/coletaveis/moeda2.png"

let espinho = new Image();
espinho.src = "../imagens/armadilhas/armadilha_espinho.png"

let dardo = new Image();
dardo.src = "../imagens/armadilhas/dardo.png"

let movimento_direita = new Image();
movimento_direita.src = "../imagens/personagem/movimento_direita.png"

let movimento_esquerda = new Image();
movimento_esquerda.src = "../imagens/personagem/movimento_esquerda.png"

let coracao_perdido = new Image();
coracao_perdido.src = "../imagens/coletaveis/coracao_perdido.png"

let bau_img = new Image();
bau_img.src = "../imagens/coletaveis/bau_aberto.png"

let bau_fechado_img = new Image();
bau_fechado_img.src = "../imagens/coletaveis/bau_fechado.png"

let imagem_dungeon = new Image();
imagem_dungeon.src = "../imagens/backgrounds/imagem_background.png"

let habitante1 = new Image();
habitante1.src = "../imagens/personagem/habitante1.png"

let habitante2 = new Image();
habitante2.src = "../imagens/personagem/habitante2.png"

let habitante3 = new Image();
habitante3.src = "../imagens/personagem/habitante3.png"
//----------------------------------------------------------------------
function quadrado(qua){
    if(!qua){
        return
    }
    if(qua.img){
        ctx.drawImage(qua.img, qua.x, qua.y, qua.w, qua.h)
    } else {
        ctx.fillStyle = qua.color
        ctx.fillRect(qua.x, qua.y, qua.w, qua.h)
    }
}

function escrevermensagem(mensagem,x,y){
    ctx.font = "30px 'Press Start 2P'";
    ctx.fillStyle = "black";
    ctx.fillText(mensagem, x, y);
}

function colisao(a,b){
    return (
        a.x < b.x + b.w &&
        a.x + a.w > b.x &&
        a.y < b.y + b.h &&
        a.y + a.h > b.y
    )
}

function hitbox(obs){
    quadrado(obs)
    if(personagem.y + personagem.h >= obs.y && personagem.y + personagem.h <= obs.y + obs.h ){
        if(personagem.x + personagem.w >= obs.x && personagem.x <= obs.x + obs.w){
            vertical = 0
            personagem.y = obs.y - personagem.h 
            chao = true
        }
    }
}

let dir = 1
function armadilha_subida(obs,y,y2,vel){
    hitbox(obs)
    obs.y += vel * dir
    if(obs.y <= y){dir = 1}
    if(obs.y >= y2){dir = -1}
    if(personagem.x + personagem.w >= obs.x && personagem.x <= obs.x + obs.w){
        if(personagem.y +personagem.h >= obs.y){
            vida -= 1
            personagem.x = 40
        }
    }
}

let direcao = 1
function armadilha_horizontal(obs,x1,x2,vel){
    hitbox(obs)
    obs.x += vel * direcao
    if(obs.x <= x1){direcao = 1}
    if(obs.x >= x2){direcao = -1}
    if(personagem.x + personagem.w >= obs.x && personagem.x <= obs.x + obs.w){
        if(personagem.y +personagem.h >= obs.y && personagem.y <= obs.y + obs.h){
            vida -= 1
            personagem.y = 340
            personagem.x = 40
        }
    }
}

function lava(obs){
    hitbox(obs)
    if(personagem.y + personagem.h >= obs.y){
        vida -= 1
        personagem.y = 300 - personagem.h
        personagem.x = 40
    }
}

let x = 1
function armadilha_dados(obs,z){
    quadrado(obs)
    obs.y += x
    if(obs.y >= z){
        obs.y = 0
    }
    if(personagem.y + personagem.h >= obs.y && personagem.y + personagem.h <= obs.y + 10 ){
        if(personagem.x + personagem.w >= obs.x && personagem.x <= obs.x + obs.w){
            personagem.y = 300 - personagem.h
            personagem.x = 40
            vida -= 1
        }
    }
}
let z = 0.5
function plataforma_movel(obs,x1,x2){
    quadrado(obs)
    if(obs,colisao(personagem,obs)){
        personagem.y = obs.y - personagem.h
        chao = true
    }
    if(obs.x<=x1){z = 1}
    if(obs.x + obs.w>=x2){z = -1}
    obs.x += 1 * z
}

let vel_estrela = 1
function animar_estrela(obs,x1,x2){
    if(!obs){ return } 
    quadrado(obs)
    if(obs.y <= x1){
        vel_estrela = 1
        obs.img = moeda
    }
    else if(obs.y >= x2){
        vel_estrela = -1
        obs.img = moeda_animacao
    }
    obs.y += 0.3 * vel_estrela
}
//------fases----------------------------------------------------------------------
let contador_fases = 0

function desenhar(){
    ctx.clearRect(0,0,600,400)
    if(vida != 0){
        if(personagem.x >= 560 && contador_fases != 5){
            contador_fases += 1
            personagem.x = 10
        }
        else if(personagem.x <= 0 && contador_fases != 0){
            contador_fases -= 1
            personagem.x = 540
        }
        if(contador_fases == 0){
            cenario_inicial()
        }
        if(contador_fases == 1){
            cenario_1()
        }
        if(contador_fases == 2){
            cenario_2()     
        }
        if(contador_fases == 3){
            cenario_3()
        }
        if(contador_fases == 4){
            cenario_4()
        }
        if(contador_fases == 5){
            cenario_5()
            if(flor_templo && colisao(personagem,flor_templo)){
                if(estrelas == 3){
                    flor_templo = null
                    escrevermensagem("voce coletou","a flor do templo!",250,200)
                }
                else{
                    escrevermensagem("faltam","estrelas!",250,200)
                }
            }
        }
        quadrado(personagem)
    }
    else{
        estrelas = 0
        vida = 3
        contador_fases = 0
        personagem.x = 40
    }
    coletar_estrela()
    perda_vida()
    requestAnimationFrame(desenhar)
}
//-------cenario inicial--------------------------------------------------
function cenario_inicial(){
    quadrado(background_cenario_inicial)
    quadrado(habitante_vila1)
    quadrado(habitante_vila2)
    quadrado(habitante_vila3)
}
let background_cenario_inicial = {
    x : 0,
    y : 0,
    w : 600,
    h : 400,
    img : background1
}
let habitante_vila1 = {
    x : 430,
    y : 360,
    w : 40,
    h : 40,
    img : habitante1
}
let habitante_vila2 = {
    x : 270,
    y : 360,
    w : 40,
    h : 40,
    img : habitante2
}
let habitante_vila3 = {
    x : 520,
    y : 360,
    w : 40,
    h : 40,
    img : habitante3
}
//-------cenario1---------------------------------------------------------
function cenario_1(){
    quadrado(background_c1)
    hitbox(p1_c1)
    hitbox(p2_c1)
    hitbox(p3_c1)
    hitbox(p4_c1)
    hitbox(p5_c1)
    armadilha_subida(armadilha_vert_c1,220,400,1)
    armadilha_horizontal(armadilha_hor1_c1,50,450,1)
    armadilha_horizontal(armadilha_hor2_c1,90,530,2)
    if(estrela1.estado){animar_estrela(estrela1,10,40)} 
}
let background_c1 = {
    x : 0,
    y : 0,
    w : 600,
    h : 400,
    img : imagem_dungeon
}
let p1_c1 = {
    x : 0,
    y : 300,
    w : 100,
    h : 20,
    color : "brown"
}
let p2_c1 = {
    x : 150,
    y : 240,
    w : 100,
    h : 20,
    color : "brown"
}
let p3_c1 = {
    x : 250,
    y : 190,
    w : 100,
    h : 20,
    color : "brown"
}
let p4_c1 = {
    x : 0,
    y : 90,
    w : 100,
    h : 20,
    color : "brown"
}
let p5_c1 = {
    x : 250,
    y : 90,
    w : 250,
    h : 20,
    color : "brown"
}
let armadilha_vert_c1 = {
    x : 110,
    y : 350,
    w : 30,
    h : 180,
    img : espinho
}
let armadilha_hor1_c1 = {
    x : 250,
    y : 120,
    w : 40,
    h : 40,
    img : arm_hor
}
let armadilha_hor2_c1 = {
    x : 300,
    y : 20,
    w : 40,
    h : 40,
    img : arm_hor
}
let estrela1 = {
    x : 380,
    y : 20,
    w : 50,
    h : 50,
    img : moeda,
    estado : true
}
//-------cenario2---------------------------------------------------------
function cenario_2(){
    quadrado(background_c2)
    armadilha_dados(dardo1_c2,225)
    armadilha_dados(dardo2_c2,170)
    armadilha_dados(dardo3_c2,190)
    hitbox(p1_c2)
    hitbox(p2_c2)
    hitbox(p3_c2)
    hitbox(p4_c2)
    hitbox(p5_c2)
    hitbox(p6_c2)
    hitbox(p7_c2)
    armadilha_subida(armadilha_vert1_c2,340,450,0.5)
    armadilha_subida(armadilha_vert2_c2,340,450,0.6)
    armadilha_subida(armadilha_vert3_c2,340,450,0.7)
    if(estrela2.estado){animar_estrela(estrela2,40,60)}
}
let estrela2 = {
    x : 40,
    y : 50,
    w : 50,
    h : 50,
    img : moeda,
    estado : true
}
let background_c2 = {
    x : 0,
    y : 0,
    w : 600,
    h : 400,
    img : imagem_dungeon
}
let p1_c2 = {
    x : 0,
    y : 100,
    w : 100,
    h : 20,
    color : "brown"
}
let p2_c2 = {
    x : 150,
    y : 150,
    w : 300,
    h : 100,
    color : "brown"
}
let p3_c2 = {
    x : 450,
    y : 150,
    w : 150,
    h : 20,
    color : "brown"
}
let p4_c2 = {
    x : 500,
    y : 200,
    w : 50,
    h : 20,
    color : "brown"
}
let p5_c2 = {
    x : 500,
    y : 250,
    w : 50,
    h : 20,
    color : "brown"
}
let p6_c2 = {
    x : 500,
    y : 300,
    w : 50,
    h : 20,
    color : "brown"
}
let p7_c2 = {
    x : 500,
    y : 350,
    w : 50,
    h : 20,
    color : "brown"
}
let armadilha_vert1_c2 = {
    x : 175,
    y : 400,
    w : 25,
    h : 60,
    img : espinho
}
let armadilha_vert2_c2 = {
    x : 275,
    y : 400,
    w : 25,
    h : 60,
    img : espinho
}
let armadilha_vert3_c2 = {
    x : 375,
    y : 400,
    w : 25,
    h : 60,
    img : espinho
}
let dardo1_c2 = {
    x : 150,
    y : 0,
    w : 25,
    h : 25,
    img : dardo
}
let dardo2_c2 = {
    x : 250,
    y : 0,
    w : 25,
    h : 25,
    img : dardo
}
let dardo3_c2 = {
    x : 350,
    y : 0,
    w : 25,
    h : 25,
    img : dardo
}
//------cenario3---------------------------------------------------------
function cenario_3(){
    quadrado(background_c3)
    hitbox(p1_c3)
    hitbox(p2_c3)
    hitbox(p3_c3)
    hitbox(p4_c3)
    plataforma_movel(plat_movel,275,550)
    if(estrela3.estado){animar_estrela(estrela3,0,15)}
}
let background_c3 = {
    x : 0,
    y : 0,
    w : 600,
    h : 400,
    img : imagem_dungeon
}
let p1_c3 = {
    x : 0,
    y : 150,
    w : 100,
    h : 20,
    color : "brown"
}
let p2_c3 = {
    x : 550,
    y : 300,
    w : 50,
    h : 100,
    color : "brown"
}
let p3_c3 = {
    x : 150,
    y : 200,
    w : 100,
    h : 20,
    color : "brown"
}
let p4_c3 = {
    x : 350,
    y : 50,
    w : 100,
    h : 20,
    color : "brown"
}
let estrela3 = {
    x : 375,
    y : 5,
    w : 40,
    h : 40,
    img : moeda,
    estado : true
}
let plat_movel = {
    x : 350,
    y : 150,
    w : 100,
    h : 20,
    color : "brown"
}
//-------cenario4---------------------------------------------------------
function cenario_4(){
    quadrado(background_c4)
    hitbox(plat1)
    hitbox(plat2)
    lava(lava1)
    hitbox(plat3)
    hitbox(plat4)
    armadilha_dados(dardo1,400)
    armadilha_dados(dardo2,400)
    armadilha_dados(dardo3,400)
    armadilha_dados(dardo4,400)
    armadilha_dados(dardo5,400)
}
let background_c4 = {
    x : 0,
    y : 0,
    w : 600,
    h : 400,
    img : imagem_dungeon
}
let plat1 = {
    x : 0,
    y : 300,
    w : 100,
    h : 20,
    color : "brown"
}
let plat2 = {
    x : 520,
    y : 300,
    w : 80,
    h : 100,
    color : "brown"
}
let lava1 = {
    x : 0,
    y : 380,
    w : 520,
    h : 20,
    color : "red"
}
let plat3 = {
    x : 160,
    y : 300,
    w : 100,
    h : 20,
    color : "brown"
}
let dardo1 = {
    x : 120,
    y : 0,
    w : 30,
    h : 30,
    img : dardo
}
let dardo2 = {
    x : 300,
    y : 0,
    w : 30,
    h : 30,
    img : dardo
}
let dardo3 = {
    x : 340,
    y : 0,
    w : 30,
    h : 30,
    img : dardo
}
let dardo4 = {
    x : 380,
    y : 0,
    w : 30,
    h : 30,
    img : dardo
}
let dardo5 = {
    x : 420,
    y : 0,
    w : 30,
    h : 30,
    img : dardo
}
let plat4 = {
    x : 270,
    y : 250,
    w : 190,
    h : 20,
    color : "brown"
}
//-------cenario5---------------------------------------------------------
function cenario_5(){
    quadrado(background_c5)
    hitbox(p1_c5)
    hitbox(p2_c5)
    hitbox(p3_c5)
    hitbox(p4_c5)
    quadrado(bau)
    if(estrelas == 3){
        bau = null
        quadrado(flor_templo)
        quadrado(bau_aberto)
    }
}
let background_c5 = {
    x:0,
    y:0,
    w:600,
    h:400,
    img : imagem_dungeon
}
let p1_c5 = {
    x : 0,
    y:380,
    w:600,
    h:20,
    color:"brown"
}
let p2_c5 = {
    x : 0,
    y:360,
    w:200,
    h:20,
    color:"brown"
}
let p3_c5 = {
    x : 0,
    y:340,
    w:150,
    h:20,
    color:"brown"
}
let p4_c5 = {
    x : 0,
    y:320,
    w:100,
    h:20,
    color:"brown"
}
let bau = {
    x:425,
    y:330,
    w:50,
    h:50,
    img : bau_fechado_img
}
let bau_aberto = {
    x:425,
    y:330,
    w:50,
    h:50,
    img : bau_img
}
let flor_templo = {
    x : 420,
    y :270,
    w:60,
    h:60,
    img : diamante
}
//-------personagens------------------------------------------------------
let personagem = {
    x : 40,
    y : 360,
    w : 40,
    h : 40,
    img : movimento_direita
}
//---------movimentação-------------------------------------------------------
let vertical = 0;
let gravidade = 0.1;
let chao = true

function pulo(){ //inicializa o pulo
    if(chao){
        vertical = -5
        chao = false
    }
}

function pulo_ar(){ //prossegue com a ação do pulo
    vertical += gravidade
    personagem.y += vertical
    if(personagem.y >= 360){ //descida
        vertical = 0
        personagem.y = 360
        chao = true
    }
}

function loop(){
    pulo_ar()
    requestAnimationFrame(loop)
}

loop()

document.addEventListener("keydown",function(evento){
    var tecla = evento.key;
    var velocidadex = 8
    if(tecla == "a" && personagem.x == 0){velocidadex = 0}
    if(tecla == "d" && personagem.x >= 560){velocidadex = 0}
    if(tecla == "w"){ pulo() }
    if(tecla == "d"){ 
        personagem.x += velocidadex
        personagem.img = movimento_direita
    }
    if(tecla == "a"){ 
        personagem.x -= velocidadex 
        personagem.img = movimento_esquerda
    }
})

//---------sistema de vida-------------------------------------------

let vida1 = {
    x : 20,
    y : 20,
    w : 20,
    h : 20,
    img : img_coracao
}
let vida2 = {
    x : 60,
    y : 20,
    w : 20,
    h : 20,
    img : img_coracao
}
let vida2_hub = {
    x : 60,
    y : 20,
    w : 20,
    h : 20,
    img : coracao_perdido
}
let vida3 = {
    x : 100,
    y : 20,
    w : 20,
    h : 20,
    img : img_coracao
}
let vida3_hub = {
    x : 100,
    y : 20,
    w : 20,
    h : 20,
    img : coracao_perdido
}

let vida = 3
function perda_vida(){
    if(vida == 3){
        quadrado(vida1)
        quadrado(vida2)
        quadrado(vida3)
    }
    else if(vida == 2){
        quadrado(vida1)
        quadrado(vida2)
        quadrado(vida3_hub)
    }
    else if(vida == 1){
        quadrado(vida1)
        quadrado(vida2_hub)
        quadrado(vida3_hub)
    }
}
//------sistema de coletaveis--------------------------------------------------------------------------------
let estrela1_hud = {
    x : 560,
    y : 20,
    w : 20,
    h : 20,
    img : moeda
}
let estrela2_hud = {
    x : 520,
    y : 20,
    w : 20,
    h : 20,
    img : moeda
}
let estrela3_hud = {
    x : 480,
    y : 20,
    w : 20,
    h : 20,
    img : moeda
}
estrelas = 0
function coletar_estrela(){
    if(contador_fases == 1){
        if(estrela1.estado && colisao(personagem,estrela1)){
            estrelas += 1
            estrela1.estado = false
        }   
    }
    if(contador_fases == 2){
        if(estrela2.estado && colisao(personagem,estrela2)){
            estrelas += 1
            estrela2.estado = false 
        }
    }
    if(contador_fases == 3){
        if(estrela3.estado && colisao(personagem,estrela3)){
            estrelas += 1
            estrela3.estado = false
        }
    }
    if(estrelas >= 1){
        quadrado(estrela1_hud)
    }
    if(estrelas >= 2){
        quadrado(estrela2_hud)
    }
    if(estrelas >= 3){
        quadrado(estrela3_hud)
    }
    if(estrelas == 0){
        if(contador_fases == 1){estrela1.estado = true}
        if(contador_fases == 2){estrela2.estado = true}
        if(contador_fases == 3){estrela3.estado = true}
    }
}
//--------função de botao reset------------------
desenhar()