import React, { useEffect, useState } from "react";
import Botao from './Botao';
// type Repositories = {
//     full_name:string;
//     description:string;
// }

const Body: React.FC = () => {

  type ResponseJ = {
    situacao?: boolean;
    msg?: string;
    tokenUser?: string;
  };

  type DadosUsuario = {
    usuario:string;
    senha:string;
  }


  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

    const [senha , setSenha] = useState('');
    const [login , setLogin] = useState('');

  const [dados, setDados] = useState<ResponseJ>({});
  function buscar() {
    console.log('Seus dados buscado : ' + senha + ' ' + login);

      let url = `http://localhost:2001/login`;
        let dadosInput:DadosUsuario = {
            usuario:login,
            senha:senha
        };

        const dadosString = JSON.stringify(dadosInput);
        // console.info(dadosString);
        const options = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: dadosString
        };
        
        fetch(url,options)
        .then(response => response.json())
        .then(
        (data) => {
          console.info(data);
          setIsLoaded(true);
          setDados(data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      ).catch((error) => console.log(error))
  }
  if (error) {
    return <div>Error: {error}</div>;
  } else if (isLoaded) {
    return <div> ...</div>;
  } else {
    return (
      <div>
        <input placeholder="Login" type='text' onChange={event => setLogin(event.target.value)}></input>
        <input placeholder="Senha" onChange={event => setSenha(event.target.value)} ></input>
        <Botao onClick={() => buscar()}></Botao>
        <h2>{dados.msg}</h2>
      </div>
    );
  }
};

export default Body;
