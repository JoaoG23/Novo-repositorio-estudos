### 5- 	VIEWS COMO CRIAR-LAS --- --- --- -

## QUANDO VOCE USA O MESMO CODIGO CONSTANTEMENTE 
## CRIE UMA VIEW PARA FACILITAR SUA VIDA
SELECT codigo,descricao ,estoque_atual FROM produto;

## Criando View
CREATE VIEW vw_inventario AS
SELECT codigo,descricao ,estoque_atual FROM produto;

## Usando a view

select * from pedido_item;


## Complicando um pouca mais -----------------
CREATE VIEW vw_colunas_essenciais AS
SELECT pe.numero_pedido, it.codigo_produto, pr.descricao, it.quantidade , it.unitario, 
SUM(it.quantidade * it.unitario) as Total FROM pedido pe
LEFT JOIN pedido_item it ON it.nro_pedido = pe.numero_pedido
LEFT JOIN produto pr ON pr.codigo = it.codigo_produto
GROUP BY pe.numero_pedido, it.codigo_produto, pr.descricao, it.quantidade , it.unitario; 

## Usando a view -------------------

select * from vw_colunas_essenciais
where numero_pedido in(2);