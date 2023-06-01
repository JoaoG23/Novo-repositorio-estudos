

const objeto = {
    "senha": "CRIADO",
    "tipo": "E",
    "cliente": "CRIADO",
    "fornecedor": "CRIADO",
    "cidade": "CRIADO",
    "uf": "AM",
    "tpeso": 0,
    "dtEmbarque": "2023-01-20T19:30:21.373Z",
    "prSaida": "1970-01-01T10:30:21.374Z",
    "notafiscal": "00343",
    "tipoFrete": "DIV",
    "complexidade": "Média",
    "produto": "",
    "observacao": "",
    "status": "Aeroporto",
    "transportadora": "TRANSMARIA.LTDA"
}
function gerarTdsParaTabelas(nomeObjeto,objeto) {
    let html = "";
    for (const key in objeto) {
        html += `<td>{${nomeObjeto}?.${key}}</td>
        `;
    }
    console.log(html);
}
function gerarThParaTabelas(objeto) {
    let html = "";
    for (const key in objeto) {
        html += `<td>${key}</td>
        `;
    }
    console.log(html);
}


gerarTdsParaTabelas('programacao',objeto)
gerarThParaTabelas(objeto)