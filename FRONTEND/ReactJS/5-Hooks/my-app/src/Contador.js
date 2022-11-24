/**
 *  Hooks
 *  Quando a funcao nao tem estados e nem
 * ciclo de vida. São utilizados os hookes
 * 
 * 1- Use effect = Ira ser chamado em 2 ocasioes 
 * 1º Quando o componente for criado. = didMount
 * 2º Toda vez que ele for atualizado = didMountUpdate
 * 
 * Estados dos useEffect : Será execultado toda vez que estado 
 * de uma variavel for recarregada.
 * 
 * 1° - Se nao for colocado nada, qualquer estado que for 
 * atualizado e ira exercultar essa função. ((useEffect))
 * 
 * 2º - Se colocar para o estado que voce deseja ele irá execultar
 * somente para aquele estado. [contador]
 * 
 * 3º - Se ele colocar isso vazio esse estado irá exercultar
 * uma única vez.[]
 * 
 * 4º - Para representar o componentWillUnmount, basta
 * realizar o evento quando o elemento sai da tela.
 * 
 *  Ex: abaixo = Use isso no useEffects 
 *         return() => {
            console.info("Não tem mais contador......")
        }

*/
import React , { useEffect, useState } from "react";

function Contador(props) {
    // Criar 2 constantes
    const [contador , setContador] = useState(props.contador);
    const [meuEstado , setMeuEstado] = useState('qualquer coisa');

    useEffect(() => {
        setContador(parseInt(localStorage.getItem("contador")));

        return() => {
            console.info("Não tem mais contador......")
        }

     },[]) // Para setar o metodo na memoria.

    useEffect(() => { 
        document.title = contador // Titulo
        localStorage.setItem("contador", contador); //ERRO - Preciso setar ele da memoria quando a pagina sofre alguma atualização
    }, [contador]);

    function add() {
        setContador(contador + 1);
        console.info(meuEstado);
    }

    return (
        <div>
            <h1>Contador: {contador}</h1>
            <button onClick={add}>add</button>
        </div>
    )
}



export default Contador;