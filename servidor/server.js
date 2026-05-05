var http = require('http');
var express = require('express');
var app = express();
app.use(express.static('./public/pag_inicial'));
var server = http.createServer(app);
server.listen(80);
console.log("servidor rodando..")