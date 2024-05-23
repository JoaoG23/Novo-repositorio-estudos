var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//== Codigo------

app.use(bodyParser.urlencoded())

app.get("/",(requisicao , resposta) =>{
    
    resposta.send("Hello World")
})

//Rotas
app.get("/alunos" , (requisicao , resposta) => {

    let alunos = [
        { id: 0, nome: "Maio" },
        { id: 1 ,nome: "Jorge" },
        { id: 2 ,nome: "Califa" },
        { id: 3 ,nome: "Meira" }
    ]

    resposta.json(JSON.stringify(alunos))
})

let porta = 3001;
app.listen(porta, () => console.log('Servido rodando em porta ..',porta))