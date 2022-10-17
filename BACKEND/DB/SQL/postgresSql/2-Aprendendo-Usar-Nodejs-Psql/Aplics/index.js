const Client = require('pg').Client
const cliente = new Client({
    user: 'postgres',
    password: 'admin',
    host: '127.0.0.1',
    port: 5432,
    database: "frota",
})
// -------------Maneira mais simples -----------
// cliente.connect(); // Abrir conexao
// cliente.query('select * from carros') // Exerculta a query
// .then(results => {// Joga resultado da query 
//     const resultado = results.rows // Jogar o resultado na constatee
//     console.log(resultado);// Organiza resultado por json
//     console.table(resultado);// Organiza resultado por table
// })
// .finally(() => cliente.end()) // Fechar a conexao

// ----EXECULTANDO FUNCOES DE TESTE ----
// insererCarro('FIAT','');

 atualizarDado(8,{marca:'vindo do Node',modelo:'MOdelo Inserido pelo Node'});

    async function buscaCarros() {
    try {


        console.log('Iniciando Conexao');
        await cliente.connect()
        console.log('Conexao feita');

        const resultado = await cliente.query('SELECT * FROM carros');
        console.log(resultado.rows);

    } catch (erro) {

        console.log('Ocorreu um erro na conexao!' + erro);
    } finally {

        await cliente.end()
    }

}

async function insererCarro( marca, modelo ) {
    try {


        console.log('Iniciando Conexao');
        await cliente.connect()
        console.log('Conexao feita');

        await cliente.query('INSERT INTO carros ("marca", "modelo") values ('+"'"+marca+"', '"+modelo+"');")
        console.log('Valor inserido na Tabela');

        const resultado = await cliente.query('SELECT * FROM carros');
        console.log(resultado.rows)
 
    } catch (erro) {

        console.log('Ocorreu um erro em Inserir um Dado!' + erro);
    } finally {

        await cliente.end()
    }

}

async function deletaCarro( modelo ) {
    try {


        console.log('Iniciando Conexao');
        await cliente.connect()
        console.log('Conexao feita');

       
        await cliente.query("DELETE FROM carros where modelo = '"+modelo+"';")
        console.log('Valor removido na Tabela');

        const resultado = await cliente.query('SELECT * FROM carros');
        console.log(resultado.rows);// 

    } catch (erro) {

        console.log('Ocorreu um erro ao Deletar um Dado! ' + erro);
    } finally {

        await cliente.end()
    }

}

async function atualizarDado(id,{marca:marca,modelo:modelo}) {
    try {


        console.log('Iniciando Conexao');
        await cliente.connect()
        console.log('Conexao feita');

        await cliente.query("UPDATE carros set marca = '"+marca+"', modelo = '"+modelo+"' where id = '"+id+"';")
        console.log('Valor atualizado na Tabela');

        const resultado = await cliente.query('SELECT * FROM carros');
        console.log(resultado.rows);// 

    } catch (erro) {

        console.log('Ocorreu um erro ao Atualizar um Dado! ' + erro);
    } finally {

        await cliente.end()
    }

}

