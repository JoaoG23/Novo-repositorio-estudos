const dados = {
  descricao: "BRADESCO",
  usuariosId:null
};

function main(objetoInteracao, retornoTestado) {
  Object.entries(objetoInteracao).forEach(([key, value]) => {
    console.log(
      `expect(${retornoTestado}).toHaveProperty('${key}', '${value}')`
    );
  });
}

main(dados, "retorno");
