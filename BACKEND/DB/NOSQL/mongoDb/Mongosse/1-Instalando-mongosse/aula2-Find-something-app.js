const express = require('express');
const { send } = require('process');
const app = express();
const porta = 2001;
const mongoose = require('mongoose');

// --- objeto Json com colunas ----

const linkSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    descricao: String,
    url: { type: String, required: true },
    clique: { type: Number, default: 0 }
})




const Link = mongoose.model('Link', linkSchema); // Referencia a colecão

mongoose.connect('mongodb://localhost/newlinks')

let db = mongoose.connection;

db.on("error", () => {
    console.log("HOUVER UM ERRO")
});
db.once("open", () => {
    console.log(" ---Iniciado servidor ! ---")
});


//console.log("Entrada no banco feita com sucesso! ");
// Somente ler quando Um Usuario fizer uma requisição.
/*app.get('/:titulo' , quandoUsuarioFazReqPromise) */

app.get('/:titulo', async (req, resp) => {

    let titulo = req.params.titulo;
    try {

        let documento = await Link.findOne({ titulo }) // ou find 
        //resp.send(documento);   
        resp.redirect(documento.url);   // Caso queira redirecionar use.
    } catch (error) {
        console.log(error);
    }
});


//****** Alguns Midleware**** */
/// Corpo da aula

// Usando PROMISE------------------
let quandoUsuarioFazReqPromise = (req, resp) => {

    let titulo = req.params.titulo;

    Link.find({ titulo }).then(docs => {
        console.log(docs);
        resp.send(docs);

    }).catch(erro => {
        console.log(" O seu erro :", erro);
    })
}


// ------METODO COM ASYNC await----  mais prático

//ATENCAO MIDLEWARE NAO FUNCIONA AWAIT
// let quandoUsuario_FazReq_await = (req , resp) => {

//     let titulo = req.params.titulo;
//     let documento = await Link.find({titulo});
//     resp.send(documento);
// }




let midleCorpo = (req, resp) => {
    resp.send("Testando Aplicação ")
}
app.get("/", midleCorpo);

app.listen(porta, () => {
    console.log("Servior Rodando na Porta : ", porta);
});