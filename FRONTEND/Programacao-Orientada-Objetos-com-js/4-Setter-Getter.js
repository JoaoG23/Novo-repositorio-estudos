// 4- ---- METODO SET E GET --=------

class Carro {
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
        console.info('----------------------------')
    }
    ligar(){
        this.ligado = true;
    }
    desligado(){
        this.ligado = false;
    }

    set setCombustivel(quantidade){ // SETs quando definir o valor de um atributo
        if (quantidade < 0 || quantidade > 100) {
            console.error('Por favor coloque um valor 0 ate 100 litros.');
            return;
        }
        this.comb =  quantidade;
        console.info('Combustivel alterado, quantidade atual: ' + this.comb )
    }
    get getCombustivel() { // GET para buscar um dados
        return this.comb;
    }
}

let carro1 = new Carro('Uno','FIAT','branco');
let carro2 = new Carro('Golf','VW','preto');
let carro3 = new Carro('Mustang','Ford','vermelho');


carro1.ligar();
carro2.ligar();

carro2.setCombustivel = -1; // Para alterar diretamente sem parenteses ()
console.log(carro2.getCombustivel); // Para obter diretamente sem parenteses ()

carro2.info()
