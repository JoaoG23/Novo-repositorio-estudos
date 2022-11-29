const express = require('express');
const app = express();
const porta = 3000;


app.get('/', (req, res) => {
    res.send('<h1>Rodando com DOCKER IMAGEM !!</h1>');
});

app.listen(porta, () =>{
    console.info(`App rodando DOCKERS na porta ${porta}`)
});