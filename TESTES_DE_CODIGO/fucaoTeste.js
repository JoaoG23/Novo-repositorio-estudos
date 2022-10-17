let valorIpServidor = document.querySelector('#ipServidor');
let valorIpEquipamento = document.querySelector('#ipEquipamento');




function controllerPortaSerial() {
    try {
        // --- Receber Valores -----
        const seletorComandosinput = document.querySelector('#selectSerial');


        // console.log(document.querySelectorAll('input')[0])
        let valoresObj = {}
        let inputs = document.querySelectorAll('input');
        for (const input of inputs) {

            // if()
            valoresObj += input;
        }
        console.log
        console.log(valoresObj);

        let elementBuffer = document.querySelector('#buffer');

        seletorComandosinput.addEventListener('change', () => ExibirElementoSeNecessario(seletorComandosinput, '#buffer', 'REMOTE_SERIAL_WRITE'))
        return '/portaSerial.html'

    } catch (error) {
        console.log("AVISO: A funcao controllerPortaSerial() procura ClassName ou Id inexistente nessa Pagina, por isso,  Fica o Erro!" + error)
    }
};






function controllerSendMgs() {
    
        const inputs = document.querySelectorAll('input');
        console.log(inputs[0].value);

        return '/painelmsgsend.html'
  
    };


// const pegarValor = document.querySelectorAll('input')

// console.log(pegarValor);
let listaControllers = [
    controllerPortaSerial(),
    controllerSendMgs()

]
let caminhoDaPagina = window.location.pathname;
// console.log(listaControllers[0] === caminho)
// console.log(window.location.pathname)

// Forma Ruim 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// for (let i = 0; i < listaControllers.length; i++) {
//     if (caminhoDaPagina === listaControllers[i]) {
//         console.log("Caminho Correto");

//         listaControllers[i];
//     }

// }



