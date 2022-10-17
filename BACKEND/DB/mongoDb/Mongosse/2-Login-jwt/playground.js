const jwt = require('jsonwebtoken');

// Simulacão de Usuario no banco 

// Ele Logar e return user{}
const user = {
    id:"20",
    name:" Joao",
    username: "joao@gmail.com",
    password:"123457"
}
const secret = "beth"; 
function createToken(){
    
    // // sign( payload = o que eu quero passar, chave secreta)
    var token = jwt.sign({ id: user.id , username: user.username } , secret , { expiresIn: 20 } ); // expiresIn tempo em milisegundo de mudar de token
    console.log(token);
    //console.log(token); // Gerou um token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJqb2FvQGdtYWlsLmNvbSIsImlhdCI6MTYzNzI3ODExMH0.IwX7ZL7j450CJOpWeLYbXWSLW3SUvEypOk3SRlxohc0
}

function testToken(token){
    try {
        const eValidoOuNao = jwt.verify(token , secret);
        console.log(eValidoOuNao);
    } catch (error) {
        console.log(error);
    }

}
createToken();
testToken(token);
// ************** Verficando se o Token e valido ou não *****************

//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwidXNlcm5hbWUiOiJqb2FvQGdtYWlsLmNvbSIsImlhdCI6MTYzNzI3ODExMH0.IwX7ZL7j450CJOpWeLYbXWSLW3SUvEypOk3SRlxohc0";

//const eValidoOuNao = jwt.verify(token , secret);

//console.log(eValidoOuNao); // Gera dados do usuario { id: '20', username: 'joao@gmail.com', iat: 1637278110 }