
//writeFile
//appendFile
//unlink
//readFile
// rename

let args = process.argv.slice(2);
//Importando um Modulo
let fs = require('fs');

// ATENCAO:EX:(./fs) devido este modulo esta dentro do node na precisa passa os pontos.

let opcoes = Number(args[0]);

switch (opcoes) {

    case 1: 
        // Criar um Arquivo -------
        fs.writeFile('teste2.txt', 'Hello World', function (error) {

            if (error) { throw error };

            console.log("Arquivo Criado com sucesso");

        })

        break;
    case 2: 

        // Concatenar Com o que esta escrito

        fs.appendFile('teste.txt', `Esta e nova Frase Contatenada a esse texto!!!`, function (error) {

            if (error) { throw error };

            console.log("Arquivo Modificado com sucesso");

        });

        break;
    case 3: 

        // Remover tudo o que há dentro escrito
        //Porém ele só recebe o (nome_arquivo, Callback)

        fs.unlink('teste.txt', function (error) {

            if (error) { throw error };

            console.log("Arquivo apagado com sucesso");

        });
        break;
    case 4:

        //Renomear um arquivo Ex:('Nome_atual_arquivo','Novo_nome',callback()=>{})

        fs.rename('teste2.txt', 'teste.txt', function (error) {

            if (error) { throw error };

            console.log("Arquivo Criado com sucesso");

        });
        break;
    case 5: 

        //Para ler Um arquivo
        //----------------
        //Porém o callback error + data
        // readFile('teste.txt',formato ,callback(error,data));

        fs.readFile('teste.txt', 'UTF8', function (error, data) {

            if (error) { throw error };

            console.log(data);

        });

        break;
    default:

        console.log("Alguma coisa aconteceu de errado");

        break;
}


// Para criar muito um arquivo em letras maiusculas

// let argv = process.argv.slice(2);

// let fileName = argv[0];

// fs.readFile(fileName,"UTF8",(error , data)=>{

//     if (error) throw error;


//     fs.writeFile(fileName + "Uppercase" , data.toUpperCase(), (error) => {

//         if (error) throw error;

//         console.log("Arquivo Geradoo com sucesso");
//     })


// });
