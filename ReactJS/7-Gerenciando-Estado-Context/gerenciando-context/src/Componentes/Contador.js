import React, { useContext, useState } from 'react';
import { ContadorContexto } from './ContadorContexto';

function Contador(props) {

    const [ contagem , setContagem ] = useContext( ContadorContexto );

    return(<div>
        <div>
            <div>{ contagem }</div>
            <button onClick={() => { setContagem( anterior => anterior -1) }}>-</button>
            <button onClick={() => { setContagem( anterior => anterior +1) }}>+</button>
        </div>
    </div>)
}

export default Contador;