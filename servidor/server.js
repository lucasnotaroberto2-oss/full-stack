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

app.get("/redirect",function(req, res){
    res.render("blog.ejs")
});
//a função sempre deve receber dois valores, a requisição e a resposta
//sempre que for um link deve-se usar o metodo get, não post