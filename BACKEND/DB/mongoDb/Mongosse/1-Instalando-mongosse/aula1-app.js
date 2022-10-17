const express = require('express');
const { send } = require('process');
const app = express();
const porta = 2001;
const mongoose = require('mongoose');

// --- objeto Json com colunas ----

//Obs: required true = Campo obrigatório
// default = o valor padrão 
const linkSchema = new mongoose.Schema({
    titulo: {type:String  , required:true},
    descricao:String,
    url: {type:String , required:true},
    clique: { type:Number , default: 0 }
})

// ------ Modelo + o a usa estrutura do Objs JSon
const Link = mongoose.model('Link', linkSchema);



// ++++++++ 1 MANEIRA DE CONEXAO COM DB CALLBACK++++++++++
// mongoose.connect('mongodb://localhost/links',(error,db)=>{
//     console.log(error);
//     console.log(db);
// });

//---------2 MANEIRA DE CONEXAO-----PROMISE----
// mongoose.connect('mongodb://localhost/links').then(db=>{
//     console.log(db);

// }).catch(err => {

//     console.log(err);
// })



//---------3 MANEIRA DE CONEXAO-----Funcao----
// mongoose.connect('mongodb://localhost/links')

// let db = mongoose.connection;

// db.on("error" , () => {console.log("HOUVER UM ERRO")});
// db.once("open" , () => {console.log("BANCO CARREGADO ...")});


//_____Criando e logando em um banco diferente Para ver a Diferença entre bancos

//___________Adicionando Algo ao Banco______


// let link = new Link({
    
//     descricao:"Link para o Site JOAO G",
//     url:"https://jgportifolio.netlify.app/",
//     clique:0
// });

//_____Salvando o Novo registro

// link.save().then(ok =>{
//     console.log("Sucesso dados adicionado", ok);
// }).catch(erros =>{
//     console.log("De Error meu parceiro !!", erros);
// })

mongoose.connect('mongodb://localhost/newlinks')

let db = mongoose.connection;

db.on("error" , () => {console.log("HOUVER UM ERRO")});
db.once("open" , () => {
    console.log("BANCO CARREGADO ...");


    app.get('/:title' , (req, resp) => {
        let titulo = req.params.titulo;

        Link.find( {titulo} ).then(doc =>{
            console.log( doc );
            resp.send( doc );
        })
        .catch(( erro ) => {
            console.log( erro );
            resp.send( erro );
        });
    });
});





let midleCorpo = (req ,resp) => {
    resp.send("Testando Aplicação ")
}
app.get("/", midleCorpo);

app.listen(porta ,() =>{
    console.log("Servior Rodando na Porta : ", porta);
});