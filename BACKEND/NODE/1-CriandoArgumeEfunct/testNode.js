// NÃO ESQUEÇA DE ANOTAR A DATA! PORRA!

//Data - 1 - 29/08/2021 
//Data - 2 - Revisao 1 02/09/2021
//Data - 3 - Revisao 02/10/2021

// Os dois caminho dos modulos para selecionamento de funções diferentes.

let calc = require("./calc2Funct")

//------ Declarando argumentos
let args = process.argv.slice(2);

let a = Number(args[1]);
let b = Number(args[2]);
let c = "";


if ( args[0] == "s"){

    c = calc.soma(a,b);

} else if (args[0] == "m") {

    c = calc.mult(a,b);
} else {
    c = "Opção invalida! digite s para Soma ou m Multiplica!"
}


//----------modulos de Função locais------- 
// function soma(x,y){
//     return x + y;
// }

// function mult(x,y){
//     return x * y;
// }

console.log("O resultado foi: ", c);



