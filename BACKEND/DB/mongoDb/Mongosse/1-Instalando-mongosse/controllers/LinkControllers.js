//-----------------O controller ou Controlador--------------------
//       Ele irá controlar de acordo com que o usuario esta pedindo,
// o que deve ser feito. = "A Lógica de Negocio" ,
// ou seja, aqui estará o que acontece quando essa rota é chamada.

//Relebrando o que e de fato um callback = Transformar algo assincrono em sincrono
// usuarios = [jaoa,maria]
// inserir usuarios (carla)
// fuction listausuarios() retorna [jaoa,maria] lista antiga menos a '(carla)'

// Promise = Subistitui o callback e cria um recebe reject e reslvor
// .then = a funcão a proxima funcão
// .catch = recebe o erro trata o erro

// Asyc await
// Ele somente e execultado quando a promise e resolvida
// Asyc

// await = Codigo execultado quando o codigo e resolvido



const Link = require("../models/Link");
const redirect = async ( req, resp, next ) => {

    let titulo = req.params.titulo;

    try {
        let documento = await Link.findOneAndUpdate({ titulo } , {$inc : { clique: 1 }}) // ou find
        if(documento){
            
            resp.redirect(documento.url);
        } else {
            next(); // passa para próxima ROTA
        }
    } catch (error) {
        console.log(error);
        resp.send(" ❌ ERRO ao busca documento : " + error);
    }
}


const addLink = async ( req, resp ) => {
    
    let link = new Link(req.body); // Cria um novo schrema de Link -- Ex:vá em na pasta models
    try {
        let doc = await link.save(); // Variavel receber o linkScrema e salva na variavel doc.
        //resp.send("Link adiciondo com Sucesso 💾✔️ !");// ANTIGO
        resp.redirect('/');
        console.log(doc);
    } catch (error) {
        resp.render('add',{ error , body: req.body});
    }

}

const deleteLink = async ( req, resp ) => {
    
    let id = req.params.id;
    if(!id){
        id = req.body.id;
    }

    try {
        await Link.findByIdAndDelete(id);
        resp.send(id);
    } catch (error) {
        resp.status(404).send(error);   
    }

}

const allLinks = async ( req , resp ) => {

    try {
        let links = await Link.find({});
        resp.render('all', { links });// Para rendenizar pelo servidor. EJS = 'links' variavel
        
    } catch (error) {
        resp.send(error);
    }
} 

const loadLink = async ( req , resp ) => {

    let id = req.params.id;
    try {
        let link = await Link.findById(id);
        resp.render('edit' , { error:false , body: link })// Para rendenizar pelo servidor. EJS
        
    } catch (error) {
        resp.send(error);
    }
} 

const editLink = async ( req, resp ) => {
    
    let link = {};
    link.titulo = req.body.titulo;
    link.descricao = req.body.descricao;
    link.url = req.body.url;

    let id = req.params.id;
    if(!id){
        id = req.body.id;
    }

    try {
        let doc = await Link.updateOne({ _id: id },link);
        resp.redirect('/');
    } catch (error) {
        resp.render('edit',{ error , body: req.body});
    }

}


// Está sendo exportado como um OBJETO por TERAO outras funcoes aqui.

module.exports = { redirect  , addLink , allLinks , deleteLink , loadLink , editLink }




//************************** Alguns Midleware******************************* */

let quandoUsuarioFazReqPromise = (req, resp) => {

    let titulo = req.params.titulo;

    Link.find({ titulo }).then(docs => {
        console.log(docs);
        resp.send(docs);

    }).catch(erro => {
        console.log(" O seu erro :", erro);
    })
}
