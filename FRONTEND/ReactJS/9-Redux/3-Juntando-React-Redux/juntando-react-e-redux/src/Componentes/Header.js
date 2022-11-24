import React from "react";
import { useSelector } from 'react-redux';

function Cabecalho() {

    const contador = useSelector( ( state ) => { return state.counter });

    return(<div className="App-header">
        <h1>Contador</h1>
        <h1>{ contador }</h1>
    </div>)
}

export default Cabecalho;