const express = require('express');
const app = express();
const bodyParser = require('body-parser');
let bodyParserJson = bodyParser.json();
const contatos = require("./model/model");
const cors = require('cors');

app.use(cors());
app.use(bodyParser.urlencoded());

//___________________ROTAS_________
app.get("/contatos", bodyParserJson ,(req, resp) => {

    resp.json(contatos.listaContatos());
});

app.get("/operadoras", bodyParserJson,(req, resp) => {
    resp.json(contatos.listaOperadoras());
});

app.post("/contatoAdicionar",bodyParserJson , (req ,resp) => {
    
    let acrescContato = req.body.contato;
    // let nome = req.body.nome;
    // let telefone = req.body.telefone;
    contatos.adicionarContatos(contato );
    // if(nome == "" && telefone == ""){
        //     contatos.adicionarContatos(nome , telefone );
    // } else{
    //     resp.status(404);
    //     resp.json("ERRO voce adicionou contato vazio !");
    // }
    resp.json("Contato Adicionado com sucesso !");
});

//___________________________

let door = 3003
app.listen(door, () => console.log(" All Services Started on Door of Number => ",door));