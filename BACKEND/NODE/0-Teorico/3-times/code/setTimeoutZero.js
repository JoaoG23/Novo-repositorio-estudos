// console.log('A' + new Date());
// setTimeout(() => {
//     console.log('I' + new Date()) // Execulta por ultimo na fila
// }, 0);

// console.log('B' + new Date());

// OU USAR O SET IMEDDITES

console.log('primeiro ' + new Date());

setImmediate(() => {
    console.log('Meio ' + new Date())
})

console.log('Ultimo ' + new Date());