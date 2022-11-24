const Person = require('./Person'); // Importando o pai de aluno 

class Aluno extends Person { // Aluno recebe heranca
    constructor(name, age, turma) {
        super(name , age) // Para  pegar HERANCA USE o super do pai
        this.turma = turma; // Adiciona turma para alunos 
    }

    greetings() { // Funcao da classe = Metodo
        console.log("Olá, Tudo bem? Meu nome é : ", this.name, "Sou da turma: ", this.turma ) // Ele sobrescreve o metodo de cima. Exerculte para ver
    }

}

module.exports = Aluno; 