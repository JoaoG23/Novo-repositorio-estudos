##create database if not exists ESTUDOS_FUNCTIONS;

##----Functions------
## DELIMITER $$ $$ irá delimitar o escopo da funcão;
DELIMITER $$
create function respondeComMensagem(comTexto varchar(30))

## returns 50 e por que ele pode retorna até 50 caracteres
returns varchar(50)

## O que a funcão irá retorna 
return concat('Olá ', comTexto,' Tudo Bom contigo?respondeComMensagem')
$$


### Exemplo de Funcão 2
DELIMITER $$

create function removeAcentuacao(comTexto varchar(50))
returns varchar(50)
BEGIN
### Substitui por sem acento
set comTexto = replace(comTexto,'á','a'),
	comTexto = replace(comTexto,'ã','a'),
    comTexto = replace(comTexto,'à','a'),
    comTexto = replace(comTexto,'é','e'),
    comTexto = replace(comTexto,'è','e'),
    comTexto = replace(comTexto,'ç','c'),
    comTexto = replace(comTexto,'ó','o'),
    comTexto = replace(comTexto,'ò','o'),
    comTexto = replace(comTexto,'õ','o'),
    comTexto = replace(comTexto,'í','i');
    return comTexto;
END
$$

/*create table if not exists produtos_padaria(
id int auto_increment,
descricao varchar(50) not null,
custo decimal (5,2)  not null,
quantidade_estoque float(4,3) default '000',
cod_grupo int ,
primary key(id)
) charset utf8;*/


insert into produto values
(default,'COCA-COLA',4.50,60,0);

select * from produto;






