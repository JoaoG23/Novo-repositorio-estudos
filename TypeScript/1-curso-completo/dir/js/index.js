"use strict";
const valor1Input = document.querySelector('#v1');
const valor2Input = document.querySelector('#v2');
const somarBtn = document.querySelector('#somar');
function soma(v1, v2) {
    return v1 + v2;
}
somarBtn === null || somarBtn === void 0 ? void 0 : somarBtn.addEventListener('click', () => {
    console.info(soma(Number(valor1Input.value), Number(valor2Input.value)));
});
let isOpen;
isOpen: true;
let message;
message = `foo `;
let total;
total = 0xff0;
let items;
items = ['foo', 'bar'];
let values;
values = [1, 2, 4];
let title;
title = [1, 'foo'];
var Color;
(function (Color) {
    Color["white"] = "#fff";
    Color["black"] = "#000";
})(Color || (Color = {}));
let coisa;
coisa = [1];
function looger() {
    console.info('foo');
}
function error() {
    throw new Error('error');
}
let cart;
cart = {
    key: 'fi'
};
let message2 = 'dsa';
window.addEventListener('click', (e) => {
    console.info(e.target);
});
function logDetails(uid, item) {
    console.info(`A product with ${uid} has a title as ${item}`);
}
logDetails(123, 'sapato');
function renderPlataform(tipo) {
    return tipo;
}
renderPlataform('Linux');
const account = {
    id: 233,
    name: 'Joao',
    email: 'joao@email.com',
};
const playerInfo = {
    nickname: 'Willian Justo',
    level: 120
};
const player = {
    id: 132,
    name: 'Carlos',
    nickname: 'carlin332',
    level: 20
};
class UserAccount {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    logDetails() {
        console.info(`The Player ${this.name} is ${this.age} years Old.`);
    }
    getName() {
        return this.name;
    }
    setName(nome) {
        this.name = nome;
    }
}
class PersonAccount extends UserAccount {
    constructor(name, age, nickname, level) {
        super(name, age);
        this.nickname = nickname;
        this.level = level;
    }
}
const jonh = new PersonAccount('Jonh', 34, 'joabh', 34);
jonh.setName('Amarilo');
console.info(jonh.getName());
const tlou = {
    title: 'The Last of Us ',
    description: 'The best game of years',
    genre: 'Action',
    plataform: ['PS3', 'PS4'],
    getSimilars: (title) => {
        console.log(`Similar Games to ${title}, Uncharted, play tales`);
    }
};
const leftbehind = {
    title: 'The last of Us - Left Behind',
    description: 'To continues the legend of last game',
    genre: 'Action',
    plataform: ['PS3', 'PS4'],
    originalGame: tlou,
    newContent: ['3 hours story more', 'new characteres']
};
class CreateGame {
    constructor(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
}
const $ = {
    a: 'bla',
    b: 'foo'
};
function useState() {
    let state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState, setState };
}
const newState = useState();
newState.setState('sad');
console.log(newState.getState());
const todo = {
    title: 'Assistir Dark',
    description: 'Relembrar os dados',
    completed: false
};
console.info(todo);
function updateTodo(todo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, todo), fieldsToUpdate);
}
const todo2 = updateTodo(todo, { completed: true });
console.info(todo2);
const todo3 = {
    title: 'Joaoa',
    description: 'Sisdnadda'
};
const todo4 = {
    title: 'Joao',
    completed: true
};
console.info(todo4);
//# sourceMappingURL=index.js.map