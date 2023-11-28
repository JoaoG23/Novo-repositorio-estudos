// 1- INTRODUCAO A TIPAGEM

// Pegando os elementos do Input 
const valor1Input = document.querySelector('#v1') as HTMLInputElement; // Atribuindo tipos com AS
const valor2Input = document.querySelector('#v2') as HTMLInputElement;
const somarBtn = document.querySelector('#somar')!; // !

/**
 * Quando o eu coloco a "!" afirmo
 * para o typescript que realmente
 * o elemento existe na tela
 */

function soma(v1:number, v2:number) {
    return v1 + v2;
}

somarBtn?.addEventListener('click', () => {

    console.info(soma(Number(valor1Input.value), Number(valor2Input.value)))
})



/// 2 - TIPAGEMS

// Boolean
let isOpen: boolean;
isOpen:true;

// string ('foo', "foo", `foo`)
let message:string;
message= `foo `;

// number (int, float, hex, binary);
let total:number;
total = 0xff0;

// Array (type[])
let items: string[];
items = ['foo','bar'];

// ou forma de declaracao abaixo
let values:Array<number> 
values = [1,2,4];

// Tuple
let title: [number, string];
title = [1, 'foo'];

// Enum 
enum Color {
    white = '#fff',
    black = '#000'
}

// any = qualquer coisa;

let coisa:any;
coisa = [1];

// void (vazio)
function looger():void {
    console.info('foo');
}

// null/undefined

type Bla = string | null;

// Never nunca retorna = ele para tudo 
// throw new Error ('Error')

function error():never {
    throw new Error('error');
}

// object (nem string, array , nen bollean , number)
let cart:object;
cart = {
    key:'fi'
}


// Inferencias de TIPOS
let message2 = 'dsa'; // não precisa passar o tipo

window.addEventListener('click', (e) => {
    console.info(e.target);
})






// types alias para varias fincoes usarem o mesmo tipo
type UId = number | string;

// 3 - UNION 
function logDetails(uid:UId , item:string) {
    console.info(`A product with ${uid} has a title as ${item}`)
}

logDetails(123, 'sapato')

type Plataform = 'Windows' | 'Linux'; // Definindo valores fixos igual o enum

function renderPlataform(tipo:Plataform) {
    return tipo;
}

renderPlataform('Linux')



// 08. Estendendo Type Aliases com Intersection
/**
Introducao:
? = Opicional campo
& = E ou and - server para realizar o intescscao
*/

// accountInfo
//charInfo

type AccountInfo = {
    id:number;
    name:string;
    email?:string;
}

const account: AccountInfo = {
    id:233,
    name:'Joao',
    email:'joao@email.com',
}

type CharInfo = {
    nickname:string;
    level:number;
}

const playerInfo:CharInfo = {
    nickname:'Willian Justo',
    level:120
}

// Intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
    id:132, 
    name:'Carlos',
    nickname:'carlin332', 
    level:20
}


// Classes

abstract  class UserAccount {
   private name:string;
   private age:number;

   constructor( name: string, age:number ){
        this.name = name;
        this.age = age;
   }

   logDetails():void {
    console.info(`The Player ${this.name} is ${this.age} years Old.`)
   }

   getName():string {
    return this.name;
   }
   setName( nome:string ) {
    this.name = nome;
   }

}

// const will = new UserAccount('Joao', 23);

class PersonAccount extends UserAccount {
    nickname:string;
    readonly level:number; // somente lida nao alterada..

    constructor(name:string, age:number , nickname:string, level:number) {
        super(name, age); // Para pegar as propriedades da class Progenitora
        this.nickname = nickname;
        this.level = level;
    }
}


const jonh = new PersonAccount('Jonh', 34, 'joabh', 34);

jonh.setName('Amarilo')
console.info(jonh.getName())



// INTERFACE 
// O que é: 
/*
Diferente com Type alias onde pode ser passado varios tipos primitos
a interface trabalha exclusivamente com objetos.
*/ 



interface Game {
    title:string;
    description:string;
   readonly genre:string; // somente leitura
    plataform?:string[];
    getSimilars?:(title: string) => void;
}

const tlou:Game = {
    title:'The Last of Us ',
    description:'The best game of years',
    genre:'Action',
    plataform:['PS3','PS4'],
    getSimilars:(title:string) => {
        console.log(`Similar Games to ${title}, Uncharted, play tales`)
    }
}

//tlou.genre = 'dsadsa' // Somente e leitura...

// Criar extensoes outra interfaces com abaixo:
interface DLC extends Game {
    originalGame:Game // DLC teria um objeto do tipo Game com todas as infomacoes jogo original
    newContent:string[];
}

const leftbehind: DLC = {
    title:'The last of Us - Left Behind',
    description:'To continues the legend of last game',
    genre:'Action',
    plataform:['PS3','PS4'],
    originalGame:tlou,
    newContent:['3 hours story more', 'new characteres']
}

// Implementando interface com classes
class CreateGame implements Game {

    title: string;
    description:string;
    genre:string;

    constructor(t:string, d:string, g:string) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}


// Diferencas dos Intefaces e Types Alias
/**
 * INTERFACES
 * Vantagem: quando tiver criando libs prefira
 * interfaces, por que são mais extensiveis
 * 
 * Criando objetos /Classes (POO)
 */
interface JQuery {
    a:string;
}
interface JQuery {
    b:string;
}
const $: JQuery = {
    a:'bla',
    b:'foo'
}

/**
 * TYPES
 * mais recomendado na maioria das vezes
 * React - Props
 */

// Nao consegue passa com o mesmo nome.
// Sendo mais consistente
// type JQueryT = { a:string }
// type JQueryT = { b:string }



// GENERICS

/**
 * Serve para reutilizacao do
 * codigo, para tornar os metodos
 * mais genericos
 *
 * Aceitando diferentes tipos de 
 * parametros.
 */

// Exemplo:
// function useState() {
//     let state: number | string;
//     function getState() {
//         return state;
//     }
//     function setState( newState: number | string ) {
//         state = newState;
//     }

//     return { getState , setState }
// }


// // Generic
// // Entra no momento em que depois de 
// // definido o tipo ele nao possa mudar.
// const newState = useState();

// newState.setState('foo') // e uma string
// console.log(newState.getState())
// newState.setState(123); 
// console.log(newState.getState()) // de error


// S => State
// T => Type
// K => Key
// V => Value
// E => Element 

// USANDO GENERICS
// function useState<S>() {
//     let state: S;
//     function getState() { // S = unkown = igual ao any, porem quando o tipo e definido nao pode ser modificado...
//         return state;
//     }
//     function setState( newState: S ) {
//         state = newState;
//     }

//     return { getState , setState }
// }

// const newState = useState<string>(); // Definido jamais possa ser modificado

// newState.setState('foo') // e uma string
// console.log(newState.getState())
// newState.setState(123); 
// console.log(newState.getState()) 



// USANDO GENERICS extenxivel

// (=) pare definir o padrao

type numOrStr = number | string; // usar o type alias

function useState<S extends numOrStr = string>() {// por padrao ele seja string
// function useState<S extends number | string = string>() {// por padrao ele seja string
    let state: S;
    function getState() { // S = unkown = igual ao any, porem quando o tipo e definido nao pode ser modificado...
        return state;
    }
    function setState( newState: S ) {
        state = newState;
    }

    return { getState , setState }
}

const newState = useState(); // Definido jamais possa ser modificado

newState.setState('sad'); 
console.log(newState.getState()) 



// 13. Type Utilities

type Todo = { 
    title:string;
    description:string;
    completed:boolean;
}

// Readonly
const todo:Readonly<Todo> = { // Nao deixa mudar o elemento inicial
    title:'Assistir Dark',
    description:'Relembrar os dados',
    completed:false
}

// Invès de altera diretamento o objeto 
// Uma funcao que criar um novo objeto atualizado 

// todo.completed = true; // errado X
// Imutabilidade
console.info(todo);


function updateTodo(todo:Todo, fieldsToUpdate:Partial<Todo>) { // Certo 
    return { ...todo, ...fieldsToUpdate }
}
/**
 * PARTIAL
 * é o todo ele deixa todas as
 * propriedades em <T> opicionais.
 * e ele garente que a s consistencia
 * dos dados da interface ou type 
 * permaneca
 */

const todo2: Todo = updateTodo(todo, { completed: true }); // Certo
console.info(todo2);

// PICK = Seleciona as algumas propriedade que o usuario
// queira buscar dentro de um determinado objeto.

type TodoPreview = Pick<Todo , 'title'|'description'>

const todo3:TodoPreview = {
    title:'Joaoa',
    description:'Sisdnadda'
};

// OMIT = O inverso do PICK , tudo o que for passado
// nos dentro dos <> Será omitido.

type TodoPreview2 = Omit<Todo,  "description">
const todo4:TodoPreview2 = {
    title:'Joao',
    completed:true
}

console.info(todo4);


/// Juntar duas intefaces

// interface IFooBar extends IFoo, IBar {}

