const clienteCriado = {
    cnpj_cpf: "9999989",
    nomeFantasia: "ROBERTO LTDA",
    razaoSocial: "ROBERTO LTDA",
    telefone: "3321111",
    fax: "3321111",
    email: "roberto@gmail.com",
    site: "www.roberto.com",
    rua: "Rua 3",
    numero: "23",
    complemento: "casa 2",
    bairro: "Ceu branco",
    cidade: "Rio da Bahia",
    cep: "0000999",
    nome_responsavel: "Calos",
    estado: "MG",
    cpfResponsavel: "9393939",
    ativo: true,
    inscricaoestadual: "03023",
    celular: "(31)9999-9999"
}

const clienteEditado  = {
    cnpj_cpf: "5221111",
    nomeFantasia: "LEANDRO LTDA",
    razaoSocial: "LEANDRO LTDA",
    telefone: "3321111",
    fax: "3321111",
    email: "leandro@gmail.com",
    site: "www.leandro.com",
    rua: "Rua 3",
    numero: "23",
    complemento: "casa 2",
    bairro: "Ceu branco",
    cidade: "Rio da Bahia",
    cep: "0000999",
    nome_responsavel: "leandro",
    estado: "MG",
    cpfResponsavel: "9393939",
    ativo: false,
    inscricaoestadual: "03023",
    celular: "(31)9999-9999"
}

const departamento = {
	"iddepartamento": "009",
	"descricao": "Entrada",
	"ativo": "1"
}
function main(objetoInteracao) {
    
    // Recebe objeto 
    Object.entries(objetoInteracao).forEach(([key, value]) => {
        
        console.log(`expect(editar).toHaveProperty('${key}', '${value}')`); // "a 5", "b 7", "c 9"
    });


}

main(departamento)