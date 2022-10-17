class Pessoa {

    // Todos os metodos e atributos teram esse mesmo estado
    // Na class tem o estado do objeto;
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    nomeCompleto() {
        return `${this.nome} ${this.sobrenome}`
    }
}

// Class Static não precisamos criar uma nova instância
// Do Objeto para utilizar somente invocar a funcão
class Matematica {
    static somar(n1, n2) {
        return n1 + n2;
    }
}

// Existem metodos que pode ser 
//compartilhados e nao precisam ser compartilhados
// let pessoa1 = new Pessoa('Carlinhos', 'Jorge', 29);
// let pessoa2 = new Pessoa('Luiz', 'Braga', 90);
// let soma = Matematica.somar(pessoa1.idade, pessoa2.idade);

// console.info(pessoa1.nomeCompleto() + " " + pessoa1.idade);
// console.info(pessoa2.nomeCompleto() + " " + pessoa2.idade);
// console.info(soma);

// 4- ---- STATICS ------

class Carro {
    static alerta = true; // Static , server para todos os objetos da class em geral.
    constructor(modelo, marca , cor){
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
        this.ligado = false;
        this.km = 0;
        this.comb = 10;
    }

    info(){
        console.info('Marca ......: ' + this.marca)
        console.info('Modelo .....: ' + this.modelo)
        console.info('Cor ........: ' + this.cor)
        console.info('Ligado .....: ' + (this.ligado ? "Sim" : "Não"))
        console.info('KM .........: ' + this.km)
        console.info('Combustível : ' + this.comb)
        console.info('Alerta .....: ' + (Carro.alerta ? "Sim" : "não"))
        console.info('----------------------------')
    }
    ligar(){
        this.ligado = true;
    }
    desligado(){
        this.ligado = false;
    }
    setAlerta(t){
        Carro.alerta = t;
    }

    set setCombustivel(quantidade){ 
        if (quantidade < 0 || quantidade > 100) {
            console.error('Por favor coloque um valor 0 ate 100 litros.');
            return;
        }
        this.comb =  quantidade;
        console.info('Combustivel alterado, quantidade atual: ' + this.comb )
    }
    get getCombustivel() { 
        return this.comb;
    }
}

let carro1 = new Carro('Uno','FIAT','branco');
let carro2 = new Carro('Golf','VW','preto');

carro1.setAlerta(false);
carro1.info();
carro2.info();

