## ----- PARA CRIAR UMA PROCEDURE --------
## O que e procedures =

## ------ CRIANDO UMA PROCEDURE DE UPDATE DE PRODUTOS ESTOQUE 
## REVISAO -- COMANDO UPDATE TABLE
update produto
set produto.estoque_atual = produto.estoque_atual - 2 ## estoque_atual = 10 recebera estoque_atual - 2 que o resultado = 8
where produto.codigo = 1 ## Onde o codigo do produto for igual a id 1;

##-----------------------------------------------------------------

# VARIAVEIS DE ENTRADA ---------------------
delimiter $$
create procedure pr_baixaestoque(
in ncodigo int, ## 'in' É codigo do produto variavel de entrada
in nquantidade decimal(10,2)
)
## Aqui acontece o programa de fato.
BEGIN
	UPDATE produto 
	SET produto.estoque_atual = produto.estoque_atual - nquantidade
	WHERE produto.codigo = ncodigo;
END
$$


## Para exercultar a procedure digite CALL 
## Ex: call nome_procedure(codigo_produto, quantidade a retira);
CALL pr_baixaestoque(2,2);

select * from produto;

