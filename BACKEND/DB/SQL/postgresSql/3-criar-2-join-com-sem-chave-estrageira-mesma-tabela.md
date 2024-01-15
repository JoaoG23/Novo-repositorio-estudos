SELECT
    parametros."nomeParametro",
    parametros."queryOrigem",
    parametros."idBancoDadosOrigem",
    origem_base_dados.nome_conexao AS origem_banco_dados,
    parametros."idBancoDadosDestino",
    destino_base_dados.nome_conexao AS destino_banco_dados,
    parametros."queryDestino"
FROM
    xcmid.tabela_1 parametros
LEFT JOIN
    xcmid.tabela_2 origem_base_dados ON parametros."idBancoDadosOrigem" = origem_base_dados.id
LEFT JOIN
    xcmid.tabela_2 destino_base_dados ON parametros."idBancoDadosDestino" = destino_base_dados.id;