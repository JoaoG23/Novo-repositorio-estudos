const fs = require('fs')
const arrayConvertido = [
    'Código da transportadora',
    '
    CNPJ ou CPF'
]
function main(arrayPalavras) {
    let corpoObjeto
    arrayPalavras.forEach((palavra) => {
        corpoObjeto += `
        const ${palavra} = screen.getByText(${palavra})
        expect(${palavra}).toBeInTheDocument();`
    });

    fs.writeFile('./testes.js', corpoObjeto, function (err) {
        if (err) throw err;
        console.log('Todos os expect foram gerado com sucesso no arquivo testes!');
    });


}

main(arrayConvertido)