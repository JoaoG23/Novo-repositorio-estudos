// Funcao de Seta sempre será uma funcao anonima
const soma = function(v1, v2) {
    return v1 + v2
}

// Quando e recebido somente um atributo
const incremento = (n) => {
    return n + 1
}
// Sem Conchetes 
const incremento2 = n => {
    return n + 1
}

// Pode recebe somente um parametros

const incremento4 = n => n + 1
// ou
// com dois parametros 
// coloca os parenteses 
const incremento5 = (n,a) => n + a;


console.log(incremento(2));

// IIFE - Immediately Invoked Function Expression
(
    function (a,b,c) {
        let x = 3;
        console.log(a,b,c);
    }
)(1,2,4);
(
    function () {
        let x = 200;
        console.log(x);
    }
)();

// Mas quando e necessario esse tipo de funcao?

// Resp: Quando temos variaveis atribuida dentro do escopo
// de uma funcao, ou Quando a funcao define o escopo 

(() => { console.log("Funcao de Seta1"); })(); // Pre invocada
(() =>  console.log("Funcao de Seta3") )(); // Pre invocada modo 2

