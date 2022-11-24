// 4- ---- STATICS ------

class Carro {
    static alerta = true; // Static , server para todos os objetos da class em geral.
    constructor( tipoCombustivel ){
        // this.marca = marca;
        // this.modelo = modelo;
        // this.cor = cor;
        this.ligado = false;
        this.tipoCombustivel = tipoCombustivel;
        this.quatidadeCombustivel = 100;
    }

    info(){
        console.info( 'Quantidade Combustivel ......: ' + this.quatidadeCombustivel );
        console.info( 'Ligado ......: ' + this.ligado );
        console.info( 'Tipo combustivel ......: ' + this.tipoCombustivel );
        console.info('-------------------------------------------------------');
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
        this.quatidadeCombustivel =  quantidade;
        console.info('Combustivel alterado, quantidade atual: ' + this.quatidadeCombustivel )
    }
    get getCombustivel() { 
        return this.quatidadeCombustivel;
    }
}

class CarroCombate extends Carro{
    constructor() {
        super(1)  // Contrutor da class PAI

    }
}


let carro1 = new CarroCombate(1)
let carro2 = new CarroCombate(1)

carro1.setAlerta(false);
carro1.info();
carro2.info();

// {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 		'Accept': 'application/json'
// 	},
// 	body: JSON.stringify({
// 		 name: name,
// 		 info: info,
// 		 stuff: stuff
// 	})
// }
class Request {
    constructor( endpoint, config ) {
        this.endpoint = endpoint || 'http://localhost:4000';
        this.config = config;
    }

    makeRequest() {
         fetch( this.endpoint , this.config )
         .then(resp => resp.json())
         .then(data =>  console.info(data))
         .catch(error => console.error(error));
    }
}
