import React from 'react';
import logo from './logo.svg';
import Contador  from './Componentes/Contador';
import Cabecalho from './Componentes/Header';
import './App.css';
import { combineReducers, createStore } from 'redux';
import contadorReducer from './Reduces/ContadorReduce';
import { Provider } from 'react-redux';

function App() {

  const allReducers = combineReducers({ counter: contadorReducer });
  const store = createStore(allReducers);

  return (
    <div>
      <Provider store={store}>
        <Cabecalho></Cabecalho>
        <Contador></Contador>
      </Provider>
    </div>
  );
}

export default App;
