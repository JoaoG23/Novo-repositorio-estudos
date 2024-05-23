// const express = require('express');
// const fs = require('fs');
// const app = express();

// let user = {
//     id: 0,
//     name: "João  Guilherme",
//     phone: "31 7878-7878",
// }

// function render(data ,obj){

//     for(let key in obj){
//         data = data.replace(`{{{${key}}}}` , obj[key]);

//     }
//     return data;
// }
// app.get("/", (req , resp ) => {
//     fs.readFile("./templates/user.html","UTF8",(erro , data) =>{

//         if(!erro){
//             //*****Modo Didático *****/
//             // data = data.replace("{{{Nome}}}", user.name);
//             // data = data.replace("{{{Telefone}}}", user.phone);
//             // resp.send(data);}

//              resp.send(render(data ,user)) }

//     });
// });

// app.listen(3000, function() {
//     console.log(" Serve Ligado porta 3000");
// })