
/**
 * STATES
 * Por Quando a tela nao esta sendo atualizada o contador ?
 * 
 * ESTADO = e um tipo de varivel na tela quando o elemento e
 * atualizado ele irá redenizar ele novamente na tela.
 * 
 * 1 - Criar o state no construtor
 * 2 - No render criar this.state.variavel
 * 3- inserir no metodo add
 * 4 - Use o setState dentro do add 
 * 5- Transformando um estado em uma propriedade
 * passe no objeto contador o this.props.nome_propriedade no App.js
 */
import React from "react";

class Contador extends React.Component {

    constructor(props){
        super(props);
        this.state = { contador: this.props.Contador } /// 5- Exemplo do passo 5 acima
        this.add = this.add.bind(this);
    }
    
    
    add(){
        //this.state.contador += 1 Forma errada -_- Não se pode mudar um state diretamente
        // this.setState({ contador: thdatais.state.contador + 1 }) // se fizer muito rapido pode pular sem atualizar
        this.setState((state) => { return { contador:state.contador + 1 } }); // Correta
    }

    render() {
        return(
        <div>
            <h1>Contador: {this.state.contador}</h1>
            <button onClick={this.add}>Adicionar mais 1</button>
        </div>
        )

    }
}

export default Contador;