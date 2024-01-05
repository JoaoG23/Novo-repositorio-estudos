SELECT
    parametros."nomeParametro",
    parametros."queryOrigem",
    parametros."idBancoDadosOrigem",
    origem_base_dados.nome_conexao AS origem_banco_dados,
    parametros."idBancoDadosDestino",
    destino_base_dados.nome_conexao AS destino_banco_dados,
    parametros."queryDestino"
FROM
    xcmid.xcmid_parametros parametros
LEFT JOIN
    xcmid.xcmid_base_dados origem_base_dados ON parametros."idBancoDadosOrigem" = origem_base_dados.id
LEFT JOIN
    xcmid.xcmid_base_dados destino_base_dados ON parametros."idBancoDadosDestino" = destino_base_dados.id;