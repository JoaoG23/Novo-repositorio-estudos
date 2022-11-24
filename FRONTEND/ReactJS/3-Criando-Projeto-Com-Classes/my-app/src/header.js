 import React from 'react';
 import Menus from './Menu';
import App from './App';
 import './App.css'



// MODELO USANDO CLASSEs
 

class Header extends React.Component {
// Herda as caracteristica do React

    // Quando e criando uma class e criando o proprio construto da class
    constructor(props) {
        super(props);
    }

        render() {// O que rendeniza o meu metodo
            return (// o THIS para fazer refencia a estancia do objeto exemplo abaixo
                <header className='header verm'> 
                  <h1>{this.props.nome}</h1> 
                      <Menus links={this.props.links}></Menus>
                </header>
                );
        }
}
 export default Header; // 3 - exportando Header.js
