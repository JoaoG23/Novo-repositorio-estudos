// ====== Parametros ==========
// Funcao com 3 Parametros
function logsParametros(a,b,c) {
    console.log(a,b,c);
}

logsParametros(1,2,3)// Quantidade normal de parametros
logsParametros(1,2,3,4,5)// Ignorou os parametros a mais
logsParametros(1,2)// assumiu os valore que falta indefinido pois ficou faltando parametros
logsParametros()// assumiu os valore que falta indefinido pois ficou faltando parametros


function valorPadrao(a = 1 ,b = 2,c = 3) {
    console.log(a,b,c);
}
valorPadrao(2,1);// Sem nenhum parametro ele coloca o 3 defindo nos argumento


// ----- Metodos para passar parametros ilimitados
// function logsNumeros(numeros) {
//     // 1 parametro dentro de um for of
//     for (const n of numeros) {
//         console.log(n)
//     }
// }

// 2 - Passa um Array para ele
logsNumeros([1,2,3,4,5,6]);
// OU ...

// Metodo mais eficaz - usa spread/rest operator
function logsNumeros(...numeros) {

    console.log(Array.isArray(numeros)) // Verifica se Array ainda
    for (const n of numeros) {
        console.log(n)
    }
}

logsNumeros(1,2,3,4,5,6);
function somaTudinho(...numeros) {
    let total = 0;
    for (const n of numeros) {
        total += n
    }

    return total;
}

console.log(somaTudinho(1,2,3,4,5,6));

