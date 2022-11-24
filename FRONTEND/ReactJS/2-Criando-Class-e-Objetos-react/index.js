const Aluno = require('./Aluno'); // Exportando pais e filhos  
const Person = require('./Person');

let jao = new Person('Joao',32); // Entrada de dados class
let igor = new Person('IGOR',22);

jao.greetings() // Saida de dados com o metodo da class
igor.greetings()

// ----- QUAL A VANTAGEM DA ORIENTACAO A OBJETOS -----
// 1 - Aluno e antes de ser um aluno ele e uma pessoa

let jasinto = new Aluno("Jasinto", 40, " BF 444")
jasinto.greetings();

console.info(jasinto);
