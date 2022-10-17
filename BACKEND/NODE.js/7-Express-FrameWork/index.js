const express = require('express');
const path = require('path');
const { nextTick } = require('process');

// Rodando o construtores do express
const app = express();

app.use( "/mysite" ,express.static(path.join(__dirname, 'client')) );

// app.get("/",(req, resp) => {
    
//     // resp.set('Content-Type', 'text/html');
//     resp.type('html');

//     //Type of response
//         // res.type('.html') => 'text/html'
//         // res.type('html') => 'text/html'
//         // res.type('txt') => 'text/plain'
//         // res.type('json') => 'application/json'
//         // res.type('application/json') => 'application/json'
//         // res.type('png') => 'image/png'
//     resp.send("<h2>Foi um GET</h2>");
// })

// app.post("/",(req, resp) => {
    
//     // === Ele irá passar a resposta POSt
//     resp.type('json');
//     // Resposta de Inserção de Dados
//     resp.send('[{"mensagem":"Você fez um POST"}]');
// })

// app.put("/",(req, resp) => {
    
//     // === Ele irá passar a resposta POSt
    
//     // Resposta de Inserção de Dados
//     resp.send("<h2>Voce fez um PUT</h2>");
// })

// app.delete("/",(req, resp) => {
    
//     // === Ele irá passar a resposta POSt
    
//     // Resposta de Inserção de Dados
//     resp.send("<h2>Voce fez um DELETE</h2>");
// })


const PORT = 5000;
//escultando a porta 5000
app.listen(PORT, () => {
    
    console.log(`Servidor rodando na porta : ${PORT}`);
});

//****************MidleWare***************** */
//-- MidleWare - É basicamente tipo de função que está entre um pedido HTTP e a resposta final que o servidor envia de volta para o cliente

let imprimeMetodo = (req , resp ,next) =>{
    console.log(req.method);
    //Pode passar algo
    // next("Erro de Qualquer coisa!")
    next()
}
let midleWare = (req, resp) => {

    resp.type('json');
    resp.send('[{"mensagem":"Você fez um POST Ou GET"}]');
}

// app.post("/", imprimeMetodo, midleWare);
app.use("/", imprimeMetodo);// para Todos os metodos
app.get("/", imprimeMetodo, midleWare);