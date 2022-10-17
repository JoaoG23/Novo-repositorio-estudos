function finalPrice(taxa) {
    // 1- Receber o Taxa
    return function (preco) {
        // 2 - So ira retorna o resultado depois do primeiro retorno
        return preco * (1 + taxa)
    }
}

console.log(finalPrice(0.123,43))// ERRADO = Nao ira execultar direito Function (anonymous)

// 1 - Coloque dentro de parentes os dois argumentos da funcao
console.log(finalPrice(0.123)(43)) // CERTO = Ira exercultar corretamente

// ???? MAS QUAL O FUNDAMENTE DE QUEBRA EM DUAS FUNCOES ?

/*
Resp: Voce consegue ter mais nivel de uso, reaproveitamento 
quando e aplicado essa tecnica de uma funcao retornado outra funcao.
Ex: Abaixo o imposto ou (taxa) ja foi aplicado quando retorna o primeiro
argumento da funcao 
*/

// Ex: Quando a taxa e fixa = a taxa 
const oMesmoImpostoAplicadoATodos = finalPrice(0.123);

// Evitando de passa repetidamento valores fixo 
console.log(oMesmoImpostoAplicadoATodos(100));
console.log(oMesmoImpostoAplicadoATodos(40));
console.log(oMesmoImpostoAplicadoATodos(23));

// --- Isso se chama de CURRY ------


