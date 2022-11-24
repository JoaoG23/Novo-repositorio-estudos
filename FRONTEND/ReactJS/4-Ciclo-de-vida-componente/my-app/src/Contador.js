/**
 * Ciclo de Vida do COMPONENTE
 * 
 * Significa o que acontece quando a gente 
 * cria um novo componente ou tira ele da tela.
 * 
 * 1° - O primeiro metodo do ciclo de vida - constructor
 * quando e criado um componente chamar-se o metodo const....
 * 
 * 2º - Render = Será execultado toda a vez que houver alguma alteracao
 * no componente ou nas propriedades
 * 
 * 3º - shouldComponentUpdate = Serve para dita se o metodo render deve 
 * ser atualizado ou nao.
 * 
 * 4º - componentDidMount = Será chamado quando
 * for de fato apresentado na tela eu atualizo meu estado
 * 
 * 5º - componentWillUnmount = Sempre será chamado quando
 * for removido ou sair da algo da tela.
 */
import React from "react";

class Contador extends React.Component {

    constructor(props){
        super(props);
        this.state = { contador:0 } /// 2 - Inicia o state com 1
        this.add = this.add.bind(this);
    }
    
    
    add(){
        this.setState((state) => { return { contador:state.contador + 1 } }, () => {
            console.info(this.state); // Pode passar um callback 
            localStorage.setItem("state", JSON.stringify(this.state)); // 1- Salvando como local storagem
        }); 
    }

    render() {
        return(
        <div>
            <h1>Contador: {this.state.contador}</h1>
            <button onClick={this.add}>Adicionar mais 1</button>
        </div>
        )
    }

    shouldComponentUpdate(){
        return true;
    }

    componentDidMount(){ // 3 - Quando e componente for de fato apresentado na tela eu atualizo meu estado
        this.setState(JSON.parse( localStorage.getItem("state") ))

        //EX: Irá fazer o fetch de fato aqui e nao em nenhum outro construtor
    }

    // componentWillUnmount(){

    // }
}

export default Contador;