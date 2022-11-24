// import logo from './logo.svg';
import './App.css';

import Nav from './Componentes/Nav';
import Home from './Componentes/Home';
import Aulas from './Componentes/Aulas';
import Aula from './Componentes/Aula';
import Sobre from './Componentes/primeira/Segunda/Sobre';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Assistir from './Componentes/Assistir';

import loginReducer from './Reduces/loginReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import PrivateRoute from './Componentes/PrivateRoute';


const store = createStore(loginReducer)

function App() {
  return (
    <Provider store={store}>

      <Router>
        <div className='App'>
          <Nav />
          <Routes>
            
            <Route exact path='/' element={<Home />}></Route>
            <Route path='/sobre' element={<Sobre />}></Route>

            <Route
          path='/aulas'
          element={
            <PrivateRoute>
              <Aulas />
            </PrivateRoute>
          }></Route>
            <Route path='/aulas/' element={<Aulas />}></Route>
          <Route path='/aulas/:id' element={<Aula />}></Route>
            <Route path='/assistir' element={<Assistir />}></Route>
            <Route path='*' element={<h2>Essa Rota não Existe</h2>}></Route>

          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
