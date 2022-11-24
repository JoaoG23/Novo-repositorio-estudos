import React, { useContext, useState } from "react";
import { ContadorContexto } from '../Componentes/ContadorContexto';

function Cabecalho(props) {
    const [ contagem , setContagem ] = useContext( ContadorContexto ); // Para usar o Contexto;

    return(<div className="cabecalho">
        <h3>Contador</h3>
        <div>{ contagem }</div>
    </div>)
}

export default Cabecalho;