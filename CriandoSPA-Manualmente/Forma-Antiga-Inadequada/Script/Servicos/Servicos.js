
// ------ Services ------

/*
    Camada de Serviço usada para
    Servir a camada de HTML com 
    serviços(ou funções) que pode 
    ser usadas e acessadas pelo 
    controlador de Eventos.


*/


const testeVariavel = ( variavel ) => {

        if (!variavel) {

          return 'Tem algo (ERRADO) no seu código X!';
        } else {
      
         console.log('SUA VARIAVEL: ' + variavel + ' FUNCIONOU !');
         console.log('E seu primeiro filho é: ' + Achar1Filho( variavel ))
          // --- Extrair o valor de dentro da variavel funcao = Achar1Filho
        }
      }
      
const achar1Filho = ( pai ) => pai.children;




const mascara = ( elemento, tipoSeparador ) => {
        let elementoInput = elemento;

        if( elementoInput.value.length == 3 ||  elementoInput.value.length == 7 ){
            elementoInput.value += tipoSeparador;

        } else if (  elementoInput.value.length == 11) {
            elementoInput.value += tipoSeparador;

        }
    }




const formularioGenerico = ( root ) => {
        
        
        let resultadoTemplate = `
        <form>
        <div>
            <label>Item</label>
            <input name="item1" type="text" placeholder="Digite o Item0">
        </div>
        <div>
            <label>Item1</label>
            <input name="item1" type="text" placeholder="Digite o Item1">
        </div>
        <div>
            <label>Item2</label>
            <input name="item2" type="text" placeholder="Digite o Item2">
        </div>
        <div>
            <label>Item3</label>
            <input name="item3" type="text" placeholder="Digite o Item3">
        </div>
        <div>
            <label>Item4</label>
            <input name="item4" type="text" placeholder="Digite o Item4">
        </div>
        <div>
            <label>Item5</label>
            <input name="item5" type="text" placeholder="Digite o Item5">
        </div>
        <div>
            <label>Numero1</label>
            <input name="numero1" type="number" placeholder="Digite o numero1">
        </div>
        <div>
            <label>Tel</label>
            <input name="telefone" type="tel" placeholder="Digite o Telefone">
        </div>
        <div>
            <label>url</label>
            <input name="url" type="url" placeholder="Digite o Endereco Site">
        </div>
        <div>
            <label>Data e hora</label>
            <input name="data" type="datetime" placeholder="Digite o Data e hora">
        </div>
        <div>
            <label>Imagens</label>
            <input name="images" type="image" placeholder="Ache a imagen">
        </div>
        <div>
            <label>Arquivo</label>
            <input name="files" type="file" placeholder="Upload do arquivo">
        </div>
        <div>
            <label>Ligar dados</label>
            <input name="checkbox1" type="checkbox" placeholder="checkbox">
        </div>
        <button>Enviar</button>
    </form>`;

        root.innerHTML = resultadoTemplate;
        
        
    }

const criaNavBar = ( root ) => {
        
        let resultadoTemplate = `
        `;

        root.innerHTML = resultadoTemplate;
        
        
    }
// https://www.youtube.com/watch?v=YPWl29sKFsQ


