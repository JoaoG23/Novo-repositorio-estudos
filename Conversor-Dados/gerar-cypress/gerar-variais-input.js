const fs = require("fs");

const dadosInput = {
  cpf: "30099938118",
  ativo: "1",
  nome: "Selia Dunca ATeste",
  empresa: "Sodex.ltda",
  cnh: "33445566",
  validadecnh: "2026-02-28T00:00:00.000Z",
  rg: "10000299",
  emissoruf: "MG",
  fone: "319999-8988",
  celular: "319999-8988",
  tipo_acessoId: 2,
};

function gerarVariaveisInputs(objetoInteracao) {
  let declarandoVariaveis = "";
  let criadoAcoesVariaveis = "";
  Object.entries(objetoInteracao).forEach(([key, value]) => {
    declarandoVariaveis += `
      .as('${key}')
      `;
  });
  Object.entries(objetoInteracao).forEach(([key, value]) => {
    criadoAcoesVariaveis += `
        cy.get('@${key}').click({ force: true });
      cy.get('@${key}').type('${value}').should("have.value",'${value}');
      
      `;
  });

  const arquivoSaidaInputs = "./saidaInputsVariaisCypress.js";
  fs.writeFile(arquivoSaidaInputs, declarandoVariaveis, function (err) {
    if (err) throw err;
    console.log("Todos os inputs arquivo foram gerado com sucesso!");
  });
  fs.appendFile(arquivoSaidaInputs, criadoAcoesVariaveis, function (err) {
    if (err) throw err;
    console.log(
      "Todos os inputs criadoAcoesVariaveis foram gerado com sucesso!"
    );
  });
}

gerarVariaveisInputs(dadosInput);
