var http = require('http');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(express.static('./public'));
var server = http.createServer(app);
server.listen(80);
console.log("servidor rodando..")
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

//conexão com o banco de dados
var mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const uri = "mongodb+srv://lucas_queiroz:<db_password>@cluster0.v0wgphd.mongodb.net/?appName=Cluster0";
const client = new MongoClient(uri, {useNewUrlparser: true });
var dbo = client.db("exemplo_bd");
var posts = dbo.collection("posts");

//atividade de laboratorio num 9
app.get("/redirect",function(req, res){
    res.render("blog.ejs")
});
//sempre que for um link deve-se usar o metodo get, não post

//atividade de laboratorio num 8
var email;
var senha;
app.post('/cadastrar',function(req,res){
    email = req.body.email;
    senha = req.body.senha;
    res.render('cadastro.ejs',{resposta : "usuario cadastrado com sucesso!"})
    //envia a variavel resposta para a pagina resposta.ejs
});
//a função sempre deve receber dois valores, a requisição e a resposta
app.post('/login',function(req,res){
    var login_email = req.body.login_email
    var login_senha = req.body.login_senha
    if(login_email == email && login_senha == senha){
        res.render('cadastro.ejs',{resposta : "usuario logado com sucesso!"})
    }
    else{
        res.render('cadastro.ejs',{resposta : "email e/ou senha não encontrados!"})
    }
})