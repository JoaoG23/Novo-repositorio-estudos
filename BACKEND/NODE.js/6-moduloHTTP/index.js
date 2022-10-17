const http = require('http');
const url = require('url');
//3 - Para abrir o nosso arquivo na requisicao
const fs = require('fs');

// http.createServer(( request, response) =>{

//     response.writeHead(200,{ 'Content-Type': 'text/plain' });
//     response.end("<h1>Hello World</h1>");
// }).listen(3000, (err) =>{
//     if (err) {

//         console.log(err);
//     } else {

//         console.log("Servidor rodando na Porta 3000");
//     }
// })
// http.createServer(( request, response) =>{

//     response.writeHead(200,{ 'Content-Type': 'application/json' });
//     response.end(JSON.stringify({ texto : "<h1>Hello World</h1>" }));




// }).listen(3000, (err) =>{
//     if (err) {

//         console.log(err);
//     } else {

//         console.log("Servidor rodando na Porta 3000");
//     }
// })





//=== Cria um servidor ===
// http.createServer((request, response) => {
//     // 1 - Pega o caminho da requisição
//     let path = url.parse(request.url).pathname;
//     // 5 - Redirecionamento caso tenha algo errado
//     if ( path == " " || path == "/" ){
//         path = "/index.html";
//     }

//     //2 - Na mesma pasta a contenacao do ponto + o pateName Ex: /teste;
//     let fileName = "." + path;

//     // 4 - Para abrir o arquivo  ========-------
//         //retorna uma função com erro , data
//     fs.readFile(fileName, (erro, data) => {
//         if(erro){
//             // Se de erro aparece isso
//             response.writeHead(404,{'Content-Type': 'text/html; charset=utf-8'});
//             response.end("<h1>Página não encontrada</h1>");
//         } else{
//             //Se OK aparece isso 
//             response.writeHead(200,{'Content-Type': 'text/html'});
//             response.write(data);
//             response.end();
//         }

//     });
//         // Encerrando a requisição

// }).listen(3000, (err) => {
//     if (err) {

//         console.log(err);
//     } else {

//         console.log("Servidor rodando na Porta 3000");
//     }
// })




function trataPagina(req, resp , callback) {


    let path = url.parse(req.url).pathname;
    let fileName = "." + path;

    fs.readFile(fileName, (erro, data) => {
        if (erro) {

            if(callback){
                if(!callback(req, resp)){
                    resp.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
                    resp.end("<h1>Página não encontrada</h1>");
                };
            }

        } else {
            resp.writeHead(200, { 'Content-Type': 'text/html' });
            resp.write(data);
            resp.end();
        }

    });
    
}

function trataRequisicao( req , resp ){
    let path = url.parse(req.url).pathname;
    
    let method = req.method;
    console.log(method);
    if( method == "PUT"){
        resp.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    }

    if (path == "/teste") {
        resp.end("Teste");
        return true;
    }
    return false;
}

http.createServer((request, response) => {

    trataPagina(request, response ,trataRequisicao);

}).listen(3000, (err) => {
    if (err) {

        console.log(err);
    } else {

        console.log("Servidor rodando na Porta 3000");
    }
})