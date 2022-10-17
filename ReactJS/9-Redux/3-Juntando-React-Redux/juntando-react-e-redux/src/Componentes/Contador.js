import React from "react";
import { useDispatch, useSelector } from 'react-redux';

function Contador() {

    const contador = useSelector( ( state ) => { return state.counter });
    const dispatch = useDispatch(); 

    return (<div>
            <h3 className="App">{ contador }</h3>
            <button onClick={() => { dispatch({ type: 'DECREMENT' })}}>-</button>
            <button onClick={() => { dispatch({ type: 'INCREMENT' })}}>+</button>
        </div>
    )
}

export default Contador;