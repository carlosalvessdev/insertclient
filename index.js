
// módulo express, criando servidor e rotas
const express = require("express");
const app = express();


app.get('/', function (req, res){
    res.send('tela principal')
});

app.get('/cadastro', function(req, res){
    res.send ('tela de cadastro')
});

app.get('/consulta', function (req, res){
    res.send ('Tela de consulta')
});

app.listen(8081, function(){
    console.log('APP DE CADASTROS RODANDO NA URL http://localhost:8081')
});

//fim do módulo express, servidor alocado na porta 8081.