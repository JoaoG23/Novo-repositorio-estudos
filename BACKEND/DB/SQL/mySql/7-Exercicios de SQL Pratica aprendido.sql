#--- Tarefa de Hoje ------
/*
1- Criar um banco PAdareia
2-Tabelas e estabelecer relacões entre elas
3-Criar Triggers
4-Criar funções de remoção de caracteres
5-Criar procedures com as funcões citadas acima com remoção de caracteres.
*/

## Criação do Base ---------
create database if not exists ELETRICA_TESOURO_V1
default collate utf8_general_ci;

## Criação das tabelas --------

create table if not exists produtos_em_estoque(
codigo int auto_increment not null,
descricaoprodutos_em_estoque varchar(80) not null,
custo decimal(8,2) not null,
quantidade_estoque bigint(20) unsigned,
primary key(codigo)
);

create table if not exists pedido_item(
id_item int auto_increment not null,
numero_pedido int not null,
codigo_produto int not null,
quantidade_estoque bigint(20) unsigned,
total decimal (10,2),
cancelado varchar(1),
primary key(id_item,numero_pedido)
);

## ------Modificando campos -------
desc pedido_item;
desc produtos_em_estoque;

alter table pedido_item
change column cancelado cancelado enum('N','S') DEFAULT 'N' not null;

## ==== Inserindo produtos ========

insert into produtos_em_estoque values(default,'Teste CàrÊêèé§cteresespeciais!@#$%¨&*()_++{}^`_´´Ç.,??!°°ºª/*-+
',1.40,2);
insert into pedido_item values(default,1,1,90,15.40,'N');

delete from pedido_item where cancelado = ''
limit 2;

## ==== Selecionando tudo
select * from produtos_em_estoque;
select * from pedido_item;

## ===  Criando Triggers ======
## --- Depois de colocar no pedido
/*
DELIMITER $
CREATE TRIGGER tr_baixa_estoque
AFTER INSERT ON pedido_item
FOR EACH ROW
BEGIN
	UPDATE produtos_em_estoque 
	SET produtos_em_estoque.quantidade_estoque = produtos_em_estoque.quantidade_estoque - new.quantidade
	WHERE produtos_em_estoque.codigo = new.codigo_produto;
END
$
*/

## --- Depois de deletar no pedido
/*DELIMITER $
CREATE TRIGGER tr_retorna_estoque
AFTER DELETE ON pedido_item
FOR EACH ROW
BEGIN
	UPDATE produtos_em_estoque 
	SET produtos_em_estoque.quantidade_estoque = produtos_em_estoque.quantidade_estoque + old.quantidade
	WHERE produtos_em_estoque.codigo = old.codigo_produto;
END
$
*/


## === Testando Triggers ==========
insert into pedido_item value (default,1,1,10,15.40,'N');
select * from produtos_em_estoque;
SELECT * FROM pedido_item;

DELETE FROM pedido_item WHERE numero_pedido = 1
limit 1;









