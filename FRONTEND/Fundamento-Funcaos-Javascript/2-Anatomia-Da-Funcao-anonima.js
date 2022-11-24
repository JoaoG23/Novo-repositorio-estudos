// Funcao Anonima = funcao sem nome
(
    function (a,b,c) {
        return a + b + c
    }
)

// Function Expression = quando atribuida o valor
// de uma funcao ao uma variavel ex: como abaixo:

let anonima = function (a,b) {
    return a + b
}

const result = anonima(1,2); // demostrado a funcao
console.log(result);

// atribuindo para outra variavel o valor de uma umaOutraFuncao
const umaOutraFuncao = anonima
console.log(umaOutraFuncao(5,5));

