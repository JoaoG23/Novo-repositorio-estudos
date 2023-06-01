const fs = require('fs')
const programacao = 
function gerarToBeDocuments(objetoInteracao) {
    let arquivo = ''
    Object.entries(objetoInteracao).forEach(([key, value]) => {

        arquivo +=
            `
        test('Se elemento está (${value}) presente na tela', () => { 
            
            const ${key}Esperado = screen.getByText('${value}')
            expect(${key}Esperado).toBeInTheDocument();
            
        })
            `
    });

    fs.writeFile('./toBeDocuments.js', arquivo, function (err) {
        if (err) throw err;
        console.log('Todos os toBeDocuments foram gerado com sucesso!');
    });

}

gerarToBeDocuments(programacao)