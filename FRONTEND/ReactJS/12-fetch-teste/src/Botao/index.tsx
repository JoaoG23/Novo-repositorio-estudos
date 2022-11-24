import {Button} from './css';


function Botao(props?:any) {
    return(<Button onClick={props.onClick}>dados</Button>)
}

export default Botao;