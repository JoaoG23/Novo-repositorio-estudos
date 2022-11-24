import logo from './logo.svg';
import './App.css';
import Contador from './Componentes/Contador';
import Cabecalho from './Componentes/Cabecalho';
import { ContadorProvider } from './Componentes/ContadorContexto';



function App() {
  return (
    <div className='App'>
      <ContadorProvider>
        <Contador></Contador>
        <Cabecalho></Cabecalho>
      </ContadorProvider>
    </div>
  );
}

export default App;
