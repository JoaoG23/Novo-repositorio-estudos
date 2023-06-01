
const dados = {
    descricao: "Item de teste",
    valor: 100,
    data_insersao:'2023-04-13T00:00:00.000Z',
    hora_insersao: '2023-04-13T00:00:00.000Z',
    elementosId: null,
    usuariosId: null,
    locaisId: null,
    subelementosId: null,
    tiposId: null,
    subtiposId: null,
    saldo: 100,
};

function main(objetoInteracao, retornoTestado, objetoMocado) {
    Object.entries(objetoInteracao).forEach(([key]) => {
        console.log(`expect(${retornoTestado}).toHaveProperty('${key}', ${objetoMocado}.${key})`);
    });

}

main(dados, 'retorno', 'programacaoEntradaCriado')