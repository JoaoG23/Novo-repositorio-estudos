// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');

// let alunos = [
//     { id: 0, nome: "Maio" },
//     { id: 1 ,nome: "Jorge" },
//     { id: 2 ,nome: "Califa" },
//     { id: 3 ,nome: "Meira" }
// ]
// //== Codigo------

// app.use(bodyParser.urlencoded())

// app.get("/",(requisicao , resposta) =>{
    
//     resposta.send("Hello World")
// })

// //-----Rotas são caminhos do servidor irá fazer para que o cliente execulte algo.

// app.get("/alunos" , (requisicao , resposta) => {

//     resposta.json(JSON.stringify(alunos))
// })

// // Criando rota de 1 aluno
// // app.get("/aluno", (requisicao, resposta) => {
// //     //Pegando aluno pelo id 
// //     console.log(requisicao.body);
// //     let aluno = alunos[requisicao.body.id];
// //     resposta.json(aluno);

// // })

// // *****Outra maneira = ID******
// //1- Coloque parametros:id URL 
// // app.get("/aluno/:id", (requisicao, resposta) => {

// //     console.log(requisicao.params.id);
// //     let aluno = alunos[requisicao.params.id];
// //     resposta.json(aluno);

// // })

// // *****Outra maneira = query******

// // 2- Coloque parametros na ?id= query
// app.get("/aluno", (requisicao, resposta) => {

//     console.log(requisicao.query.id);
//     let aluno = alunos[requisicao.query.id];
//     resposta.json(aluno.nome);

// })


// let porta = 3001;
// app.listen(porta, () => console.log('Servido rodando em porta ..',porta))