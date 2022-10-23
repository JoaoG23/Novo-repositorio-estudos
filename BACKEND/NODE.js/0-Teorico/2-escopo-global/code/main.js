// Para ver os elementos Globais

// console.log(global);

// Objets.keys para os indentificados
// console.log(Object.keys.global);

// Setando VAR GLOBAL NO Node
// Exemplo abaixo;

global.max = 1000;
const configs = require('./configs');
const generate = require('./serialGenerate');

console.log(generate.generate())
console.log(configs.maximo);