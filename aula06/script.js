document.getElementById("d1").innerHTML = "aluno.lucas queiroz"
let nome = "lucas"//prompt("digite o seu nome..: ");
//variaveis string sempre ficam em parenteses
let idade = 18//prompt("digite sua idade...: ");
let ano = 2026
let ano_nasc = ano - idade;

document.getElementById("resp01").innerHTML=
"olá" + nome + ",seu ano de nascimento é..:" + ano_nasc + "!"

function soma(a,b){return a + b};
function subtracao(a,b){return a - b};
function divisao(a,b){return a / b};
function multiplicacao(a,b){return a * b};

function exemplo02(){
    let x = parseInt(document.getElementById("in1_ex2").value);
    for(let i = 1 ; i <= x ; i++){
        console.log(x + 1);
    }
    document.getElementById("resp_ex2").innerHTML = x;
}

function exemplo03(){
    let a = parseInt(document.getElementById("n1").value);
    //a letra "i" em parseInt tem q ser maiuscula
    let b = parseInt(document.getElementById("n2").value);

    let resp = soma(a,b);

    document.getElementById("resp-ex3").innerHTML = resp;

}

function exemplo04(){
    let a = parseInt(document.getElementById("n3").value)
    let b = parseInt(document.getElementById("n4").value)
    resp = 0
    //precisa definir um valor para a variavel antes de encaixa-la
    //no bloco
    if( a < 0 || b < 0){
        resp = soma(a,b);
    }
    else{
        resp = multiplicacao(a,b);
    }
    document.getElementById("resp_ex4").innerHTML = resp
}