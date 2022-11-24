
import './App.css';
import Header from './header';// 4 - Importando o Header para App (componente principal)
function App() {
  return (
  <Header nome="LogoMarca" links={["Sobre","Comprar","Vender","Login"]}></Header> // nome = a props
  );
}

export default App; //5 - Exportando o App para index.js
