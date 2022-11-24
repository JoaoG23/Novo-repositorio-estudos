require('dotenv').config();
const express = require('express');
const app = express();
const userRouter = require('./routers/userRouter');
const adminRouter = require('./routers/adminRouter');

app.use('/user', express.json(), userRouter); // Controla todas a requisicao caso não queria defini POST GET ou DELETE use "USE

app.use('/admin',  express.json(), adminRouter);

app.listen(process.env.PORT , () => {console.log("Server Running")});

// Registro do Usuário
/* Requisitos 
- Nome 
- Email 
- senha
- data de criacao*/