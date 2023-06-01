const fs = require("fs");
const programacao = {
  nome_motorista: "Nome do motorista",
  cpf_motorista: "CPF do motorista",
  placa_veiculo: "Placa do veiculo",
  tipo_veiculo: "Tipo Veiculo",
  dataChegada: "Data Chegada",
  horaChegada: "Hora Chegada",
  carreta: "Media Carreta",
  container: "Container",
  doca: "Doca",
  pesoEntrada: 100,
  dataEntrada: "Data Entrada",
  horaEntrada: "Hora Entrada",
};

function gerarInputs(objetoInteracao) {
  let arquivo = "";
  Object.entries(objetoInteracao).forEach(([key, value]) => {
    arquivo += `
        <Row>    
            <Col sm={12} md={6} lg={4}>
                <InputPadrao type='text' name='${key}' register={register} label='${value}' />
                {errors.${key}?.type === "required" && (
                    <AlertErro mensagem="Campo ${value} vazio! Por gentileza preencher-o!"/>)}
            </Col>
        </Row>
        `;
  });

  fs.writeFile("./inputsReact.js", arquivo, function (err) {
    if (err) throw err;
    console.log("Todos os inputs foram gerado com sucesso!");
  });
}

gerarInputs(programacao);
