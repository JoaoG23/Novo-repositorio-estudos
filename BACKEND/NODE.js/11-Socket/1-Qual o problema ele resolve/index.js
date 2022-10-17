const express = require('express');
const path = require('path');
const app = express();
const socketOI = require('socket.io');
/*
PREVIEW

Socket io ---- 
E uma solução para que 
o cliente não 
precise toda a hora fazer um nova 
requisição do tipo AJAX para servidor.

Pois IO input output

Ele cria um tunner entre esses dois 
possibilitando a comunicação
em tempo real.
*/

// 1 - Instalar o modulo npm install socket.io
// 2 - Inporte ele 


app.use('/', express.static(path.join(__dirname,'public')));

// 3 --- Coloque a const server para receber o Server
const server = app.listen(3000,()=>{
        console.log('running');
});
/* 
// Modo complicado --------
const http = require('http');
const server = http.Server(app);
server.listen(3000 , () => {    
    console.log('Running Na Port 3000 !');
});

*/

// 4 - Criar o server = Quem esta gerenciandos as requisição Http
// const io = socketOI(server);
// // 5 - Selecione o evento de entrada com on 
// io.on('connection', (socket)=>{

//     const random = Math.random();
    
//     console.log(random);
//     console.log("New Connection");


//     // O metodo de emitir uma mensagem para o front
//     socket.emit('hello', {msg:`Seja bem Vindo! ${random}`});
//     // metodo de receber msg do Front
//     socket.on('hello_client_response', (data) =>{
//         console.log(data.msg);
//     });

// });


// const  randons = [];
// //======= 2 - Enviando Mensagem para todos =========
// const io = socketOI(server);

// io.on('connection', (socket)=>{

//     const random = Math.random();
    
//     console.log(random);
//     console.log("New Connection");
//     randons.push(random);

//     console.log(" List of randons " + randons );

//     // Io = emitir mensagem para todos os sockets inclusive o mesmo front-end
//     io.emit('hello', {msg:`Seja bem Vindo! ${randons}`});
//     
//     socket.on('hello_client_response', (data) =>{
//         console.log(data.msg);
//     });

// });



const io = socketOI(server);

io.on('connection', (socket)=>{

    console.log("New Connection!!");


    socket.broadcast.emit('hello', { msg:`Chegou! Sou um novo usuario `});// Broadcast = Manda mensagem para todos, menos o usuario referente ao socket ou usuario que acabara de conectar
    


});