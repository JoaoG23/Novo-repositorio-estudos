var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//------Importando Alunos -------
var aluno = require("./routes/alunos")



app.use(bodyParser.urlencoded());

//---Escolher uma nova rota-----------
app.use("/aluno", aluno);

app.get("/",(requisicao , resposta) =>{
    
    resposta.send("Acessando o Sistema de Alunos .. ")
})


let porta = 3001;
app.listen(porta, () => console.log('Servido rodando em porta ..',porta))