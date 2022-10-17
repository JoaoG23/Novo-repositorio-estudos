// Declarando a funcao
// 1- Ex: Sem nenhum parametro 
// Sem retorna nada

function dizerOla() {
    console.log('Ola');
    
}

// dizerOla(); //Invocando a funcao



// 2 - Ex: Sem retorno + Sim Recebe parametros 
function sayHelloTo(name) {
    console.log('Hello ! ' + name );
    
}


// sayHelloTo('Jose'); //Invocando a funcao


// 3 - Ex: Somente com Retorno + Sem parametros

function returnHi() {
    return 'Hi!'
    
}


console.log(returnHi()) // Para que ela mostre na algo
// OU

// Atribua uma variavel a funcao  como abaixo
let saudacao = returnHi()
console.log(saudacao);



// 4- Ex:  Com Retorno + Com parametros

function returnHitoName(name) {
    return `Hi! ${name}`;
    
}

console.log(returnHitoName('Joao'))
