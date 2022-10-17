class Person {

    constructor (name, age) { // Constructor = Metodo criando sempre que o objeto for chamado
         this.name = name;
         this.age = age;
    }
    
    greetings() { // Funcao da classe = Metodo
        console.log("Olá, Tudo bem? Meu nome é : ", this.name )
    }

}

module.exports = Person;