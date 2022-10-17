
import './App.css';
import Header from './header';// 4 - Importando o Header para App (componente principal)
import Contador from './Contador';
function App() {
  return (
    <div>
      <Header nome="LogoMarca" links={["Sobre","Comprar","Vender","Login"]}></Header> 
      <Contador Contador={6}></Contador>
    </div>
  );
}

export default App; //5 - Exportando o App para index.js
