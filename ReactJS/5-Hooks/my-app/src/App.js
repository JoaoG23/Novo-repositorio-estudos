
import { useState , useEffect } from 'react';
import './App.css';
import objPrincipal, { ObjetoNaoDefault } from './Coisas'; // Pode dar qualquer nome pois vou dar exportacao default...
import Contador from './Contador';

function App() {
  const [show , setShow] = useState(true);
  
  let time = 0;
  console.info(objPrincipal);
  console.info(ObjetoNaoDefault);

  useEffect(() => {

    let timer = setInterval(() => {
      time++;
      console.info(time);

      if ( time > 5 ) {
        clearInterval(timer);
        setShow(false);
      }
    }, 1000);
  },[])

  if(show){
    return (
      <div>
        <Contador contador={6}></Contador>
      </div>
    );
  } else {
    return (
      <div>
        Sem Contador
      </div>
    );
  }
}

export default App; //5 - Exportando o App para index.js
