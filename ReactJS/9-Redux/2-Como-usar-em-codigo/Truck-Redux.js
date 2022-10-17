
const { createStore , applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;
const fetch = require('cross-fetch');

const initialState = [ { id: 0, title: "Tarefa", completed: false } ];

const addListAction = ( item ) => {return {type: 'ADD_ITEM', payload: item}}
const loadItemAndAdd = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(resp => resp.json())
        .then(json => {
            dispatch(addListAction(json))
        });
    }
}








function listReduce( state = initialState , action  ) {
  switch ( action.type ) {
      case 'ADD_ITEM':
          return [ ...state, action.payload ] ;
      default:
          return state;
  }
}

const store = createStore( listReduce , applyMiddleware(thunk) );

store.dispatch(addListAction( { id:1 , title:'NOvo Item ', completed: true } )) // Enves de disparar essa funcao 
store.dispatch(loadItemAndAdd());  // Somente passa e nao a action aqui neste local

console.log(store.getState());

store.subscribe(() => { console.log(store.getState()) });












// const { createStore, applyMiddleware } = require('redux')
// const thunk = require('redux-thunk').default
// const fetch = require('cross-fetch')


// const initialState = [{ id: 0, title: 'Tarefa', completed: false }]


// const addItem = (item) => { return { type: 'ADD_ITEM', payload: item } }

// const loadItemAndAdd = () => {
//     return (dispatch) => {
//         fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()).then(json => {
//             dispatch(addItem(json))
//         })
//     }
// }

// const listReducer = (state = initialState, action) => {

//     switch (action.type) {
//         case 'ADD_ITEM':
//             return [...state, action.payload]

//         default:
//             return state
//     }

// }

// const store = createStore(listReducer, applyMiddleware(thunk))

// store.dispatch(loadItemAndAdd)

// console.log(store.getState())

// store.subscribe(() => { console.log(store.getState()) })