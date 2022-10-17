"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let x = 10;
x = 2 + 2;
console.warn(x);
let y = 12;
let numero = 10;
const myNumbers = [1, 2, 3];
console.info(myNumbers);
let myTuple;
myTuple = [5, "joao", ["Guilherme", "Tito"]];
console.info(myTuple);
const user = {
    name: "jaoo",
    age: 34,
};
console.info(user);
let qualquer = 0;
qualquer = "a";
qualquer = true;
qualquer = [];
console.info(qualquer);
let id = "10";
id = 200;
console.info(id);
const userId = 10;
const produtoId = "R4332";
const srirdId = ["n33", "n44"];
console.info("codProduto: ", userId);
console.info("userID: ", produtoId);
console.info("srId: ", srirdId);
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "Medio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    nome: "Camisola V",
    tamanho: Size.G,
};
console.info(camisa);
let teste;
teste = "autenticado";
teste = null;
function soma(n1, n2) {
    return n1 + n2;
}
const resultado = soma(3, 3);
console.info(resultado);
function sayHelloTo(nome) {
    return `Hello : ${nome}`;
}
console.info(sayHelloTo("Matheus"));
function naoRetornaNada() {
    console.info("Nao retorna nada");
}
naoRetornaNada();
function greenting(nome, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${nome}`);
    }
    else {
        console.info(`Olá ${nome}`);
    }
}
greenting("Joao", "Sr");
greenting("Joao");
function somaNumeros(numeros) {
    return numeros.n1 + numeros.n2;
}
console.info(somaNumeros({ n1: 3, n2: 4 }));
function multiplica(numeros) {
    return numeros.n1 * numeros.n2;
}
console.info(multiplica({ n1: 3, n2: 4 }));
const algunsNumeros = {
    n1: 5,
    n2: 18,
};
console.info(multiplica(algunsNumeros));
function fazerChecagem(info) {
    if (typeof info === "number") {
        console.info("O numero é " + info);
        return;
    }
    console.info("Não foi passado um numero");
}
fazerChecagem(true);
function showArrayItens(arr) {
    arr.forEach((item) => {
        console.info(`ITEMS : ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];
showArrayItens(a1);
showArrayItens(a2);
class User {
    constructor(name, role, isAprroved) {
        this.name = name;
        this.role = role;
        this.isAprroved = isAprroved;
    }
    mostrarNome() {
        console.log("Nome do usuario é " + this.name);
    }
}
const zeca = new User("Lucas", "Admin", false);
zeca.mostrarNome();
console.log(zeca);
class Car {
    constructor(marca, rodas) {
        this.marca = marca;
        this.rodas = rodas;
    }
    mostrarMarca() {
        console.info("A marca do carro é : " + this.marca);
    }
}
const fusca = new Car("VW", 3);
console.info(fusca);
function controllerInsersao() {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.id = Math.random();
                this.createdAt = new Date();
            }
        };
    };
}
let Pessoa = class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
};
Pessoa = __decorate([
    controllerInsersao()
], Pessoa);
const sam = new Pessoa("Samm");
console.info(sam);
