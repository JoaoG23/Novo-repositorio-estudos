import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import aulas from '../Data';

function Aulas() {

    
    return(<div>
        <h1>Aulas</h1>
        <ul className='aulas'>
            {aulas.map((aula) =>  <li key={ aula.id }><Link className='linked' to={ `${ aula.id }` }>{ aula.title }</Link></li> )}
        </ul>
    </div>
    )
}

export default Aulas;