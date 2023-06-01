
const arrayConvertido = [

    'id',
    'senha',
    'cliente',
    'cidade',
    'uf',
    'rota',
    'doca',
    'tcubagem',
    'tunidad',
    'tpeso',
    'dtEmbarque',
    'transportadora',
    'veiculo',
    'prSaida',
    'status',
    'consolidado',
    'sequencial',
    'textoEmail',
    'ativo',
    'tipo',
    'email1',
    'email2',
    'arquivoEmail',
    'complexidade',
    'manual',
    'notafiscal',
    'produto',
    'observacao',
    'situacao',
    'agendamento',
    'codAgendamento',
    'tipoFrete',
]
function main(arrayPalavras) {

    const abreChavesObjeto = '{';
    const fechaObjeto = '}';

    let corpoObjeto = abreChavesObjeto
    arrayPalavras.forEach((palavra) => {
        corpoObjeto += `"${palavra}":"teste",`
    });
    corpoObjeto += fechaObjeto

    console.log(corpoObjeto)

}

main(arrayConvertido)