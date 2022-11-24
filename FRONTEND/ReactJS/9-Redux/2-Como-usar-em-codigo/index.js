const redux = require('redux');
const createStore = redux.createStore;
const combineReduce = redux.combineReducers;

const { incrementAction, decrementAction } = require('./Actions/CounterAction');
const { addListAction } = require('./Actions/ListAction'); // Mediante a açoes dispara a acao


const counterReduce = require('./Reduces/CounterReduce'); 
const listaReduce = require('./Reduces/ListaReduce');

const allReduce = combineReduce({
    count: counterReduce,
    list:listaReduce
}); // Para juntar dois alteradores de estados 

const store = createStore(allReduce); 
console.log(store.getState());

store.subscribe(() => { console.log(store.getState())}); // Toda vez que o meu item for modificado ele sera mostrado por esse codigo


store.dispatch(addListAction('Batedeira'));
store.dispatch(incrementAction(2)); // De contar sobre as coisa
store.dispatch(addListAction('Martelete')); // Acao de add Itens na lista
store.dispatch(decrementAction(2));




