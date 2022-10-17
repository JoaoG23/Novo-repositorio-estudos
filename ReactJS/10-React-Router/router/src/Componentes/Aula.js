import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import aulas from '../Data';


function useAula() {
    const id = useParams().id
    return aulas.filter(aula => aula.id == id)[0];

}

function Aula() {

    // const params = useParams();
    const aula = useAula();
    // const [aula, setAula] = useState({});

    // 1-- ---- Usando o Hook original ------
    /*useEffect(() => {
        setAula(aulas.filter( aula => aula.id == params.id )[0]);

    },[params]) */

    // const location = useLocation();

    // useEffect(() => {
    //     console.log(location);
    // })

    return(<div>
        <h1>{aula.title}</h1>
        <h3>{aula.desc}</h3>
    </div>
    )
}

export default Aula; 