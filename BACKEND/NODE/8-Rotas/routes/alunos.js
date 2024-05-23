var express = require('express');
// ====Obj = ROUTER ==
var router = express.Router();//igual ao nosso app

let alunos = [
    { id: 0, nome: "Maio" },
    { id: 1 ,nome: "Jorge" },
    { id: 2 ,nome: "Califa" },
    { id: 3 ,nome: "Meira" },
    { id: 4 ,nome: "Naome Santana" },
    { id: 5 ,nome: "Carlos Braga" },
    { id: 6 ,nome: "Guantes Fernandez Delcaco" }
    
];

//*******BODY *******
router.get("/", (requisicao, resposta , next) => {
    
    console.log(requisicao.body);
    let aluno = alunos[requisicao.body.id];
    
    if (aluno) {
        resposta.json(aluno);
    } else {
        resposta.json("Erro ID não encontrado. VERIFIQUE A LISTA DE ALUNOS !BABACA!");
        next()
    }
    
    
})


//*******TODOS******
router.get("/lista" , (requisicao , resposta) => {

    resposta.json(JSON.stringify(alunos))
})

//*******ID******
router.get("/:id", (requisicao, resposta , next) => {
    
    console.log(requisicao.params.id);
    let aluno = alunos[requisicao.params.id];
    
    if (aluno) {
        resposta.json(aluno);
    } else {
        resposta.json("Erro ID não encontrado. VERIFIQUE A LISTA DE ALUNOS !BABACA!");
        next()
    }
    
})



//*******QUERY *******
router.get("/", (requisicao, resposta) => {
    
    
    console.log(requisicao.query.id);
    let aluno = alunos[requisicao.query.id];
    
    if (aluno) {
        resposta.json(aluno);
    } else {
        resposta.json("Erro ID não encontrado. VERIFIQUE A LISTA DE ALUNOS !BABACA!");
    }
})


module.exports = router;