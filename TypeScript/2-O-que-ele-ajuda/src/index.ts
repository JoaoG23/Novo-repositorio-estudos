// 1-Para declara uma variavel tipada
let x: number = 10;

x = 2 + 2;
console.warn(x);

// Inferencia quando determina o dados pelo valor de dentro da sua variavel
//EX
let y = 12;

// Anotation quando voce define o tipo naturalmente.
let numero: number = 10;
//Como definir um array em typescript
const myNumbers: number[] = [1, 2, 3];

console.info(myNumbers);

// Tuplas = Um array onde voce determina os tipos de cada coluna sua
// Um molde de como nossa lista deve ficar
let myTuple: [number, string, string[]];

// Correto
myTuple = [5, "joao", ["Guilherme", "Tito"]];
// Errado
// myTuple = [true, false, true];

console.info(myTuple);
// Object Literals - OBJETO LITERALS
// Exemplo {prop: value}

// ERRO
// const user: { name:string, age:number } = {
//     firstname:"jaoo", idade:34
// };
// CERTO
const user: { name: string; age: number } = {
  name: "jaoo",
  age: 34,
};
console.info(user);







// TIPO ANY - tem a funcão dar qualquer tipo de dados ao qualquer variavel

let qualquer: any = 0;
qualquer = "a";
qualquer = true;
qualquer = [];

console.info(qualquer);






// ********* UNION TYPE **********
// Quando 2 ou mais tipos de variaveis
let id: string | number = "10";
id = 200;

// ERRO
// id = true;
// id = [];

console.info(id);









// ******** ALIAS *********
// Para selecionar o tipo separado e em seguida inserir o dados em varias variaveis
type myIdType = number | string | string[];

const userId: myIdType = 10;
const produtoId: myIdType = "R4332";
const srirdId: myIdType = ["n33", "n44"];
console.info("codProduto: ", userId);
console.info("userID: ", produtoId);
console.info("srId: ", srirdId);











// ******* ENUM ***********
// Como no Sql o enum server para enumera valores fixos
enum Size {
  P = "Pequeno",
  M = "Medio",
  G = "Grande",
}

const camisa = {
  nome: "Camisola V",
  tamanho: Size.G,
};

console.info(camisa);

// ******* LITERAL TYPES ***********
// Um valor literal para um tipo
// Ou seja aceita somente 1 valor

let teste: "autenticado" | null;

// teste = "outrovalor";

teste = "autenticado";
teste = null;







// ******** FUNCTIONS **********//

// Tipar argumentos
function soma(n1: number, n2: number) {
  // Deve tipar aos argumentos da funcao
  return n1 + n2;
}

// ERRO ----
// const resultado = soma('3',3);
// CERTO -----
const resultado = soma(3, 3);
console.info(resultado);

// Tipar o retorno
function sayHelloTo(nome: string): string {
  return `Hello : ${nome}`;
  // return true ;// erro no retorno de tipo diferente
}
console.info(sayHelloTo("Matheus"));

function naoRetornaNada(): void {
  // Void Nao retorna nada
  console.info("Nao retorna nada");
}
naoRetornaNada();

// Argumento opicional coloque isso '?'
// Exemplo abaixo
function greenting(nome: string, greet?: string): void {
  if (greet) {
    console.log(`Olá ${greet} ${nome}`);
  } else {
    console.info(`Olá ${nome}`); // Para evitar o undefined
  }
}
// Opicional
greenting("Joao", "Sr");
// Sem Opicional
greenting("Joao");






// ********* INTEFACE *********
// Ela é padroniza algo para ser usado como tipo
// Podendo reaproveitar os tipos existentes
interface MathFunctionsParams {
  n1: number;
  n2: number;
}

function somaNumeros(numeros: MathFunctionsParams) {
  return numeros.n1 + numeros.n2;
}

console.info(somaNumeros({ n1: 3, n2: 4 }));

function multiplica(numeros: MathFunctionsParams) {
  return numeros.n1 * numeros.n2;
}
// Reaproveitamento de uma interface
console.info(multiplica({ n1: 3, n2: 4 }));

// Com objeto tipado
const algunsNumeros: MathFunctionsParams = {
  n1: 5,
  n2: 18,
};
console.info(multiplica(algunsNumeros));

// Narrowing = Checagem de tipos para o desenvolvedor
function fazerChecagem(info: number | boolean) {
  if (typeof info === "number") {
    console.info("O numero é " + info);
    return;
  }
  console.info("Não foi passado um numero");
}

fazerChecagem(true); // Posso usar com numero ou Boolean





// Generics = Pode ser usado com qualquer coisa
// Melhor que o ANY

function showArrayItens<T>(arr: T[]) {
  arr.forEach((item) => {
    console.info(`ITEMS : ${item}`);
  });
}

// Nao importa se eu tenho uma lista de Numerica ou
// Ou de texto

const a1 = [1, 2, 3];
const a2 = ["a", "b", "c"];

showArrayItens(a1);
showArrayItens(a2);






/// ********* CLASS **********
/// Adiciona os tipos

class User {
  name;
  role;
  isAprroved;

  constructor(name: string, role: string, isAprroved: boolean) {
    this.name = name;
    this.role = role;
    this.isAprroved = isAprroved;
  }
  mostrarNome(): void {
    console.log("Nome do usuario é " + this.name);
  }
}

const zeca = new User("Lucas", "Admin", false);
zeca.mostrarNome();
console.log(zeca);








// ******* INTERFACES ********

interface IVeiculo {
  marca: string;
  mostrarMarca(): void;
}

class Car implements IVeiculo {
  marca;
  rodas;

  constructor(marca: string, rodas: number) {
    this.marca = marca;
    this.rodas = rodas;
  }

  mostrarMarca(): void {
    console.info("A marca do carro é : " + this.marca);
  }
}

const fusca = new Car("VW", 3);

console.info(fusca);

///////////@DECORATORS//////////

// Para voce intervir em algum ponto da aplicacao e colocar algo.
function controllerInsersao() {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      id = Math.random();
      createdAt = new Date();
    };
  };
}

@controllerInsersao()

////
class Pessoa {
  nome;

  constructor(nome: string) {
    this.nome = nome;
  }
}

const sam = new Pessoa("Samm");

console.info(sam);
