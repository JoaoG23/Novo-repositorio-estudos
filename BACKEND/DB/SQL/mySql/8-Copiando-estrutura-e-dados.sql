## 8 --- COPIANDO ESTRUTURAS E REGISTROS -----

## 1 CRIANDO TABELA ---

create table if not exists alunos (
ID_ALUNO INT auto_increment NOT NULL,
NOME_ALUNO VARCHAR(70),
NOTA DECIMAL(5,2),
primary key (ID_ALUNO)
) default charset=utf8;

## INSERINDO VALORES ------
insert into alunos values
(default,'Betanio Jose Almeida',6.7),
(default,'Betanio Jose Almeida',6.7),
(default,'Betanio Jose Almeida',6.7),
(default,'Betanio Jose Almeida',6.7),
(default,'Betanio Jose Almeida',6.7),
(default,'Betanio Jose Almeida',6.7),
(default,'Betanio Jose Almeida',6.7),
(default,'Betanio Jose Almeida',6.7),
(default,'Betanio Jose Almeida',6.7),
(default,'Betanio Jose Almeida',6.7),
(default,'Betanio Jose Almeida',6.7),
(default,'Betanio Jose Almeida',6.7),
(default,'Betanio Jose Almeida',6.7),
(default,'Betanio Jose Almeida',6.7);

select * from alunos;
## 2 COPIANDO APENAS ESTRUTURA DE TABELAS -------

CREATE TABLE aluno_back like alunos;

## 3 COPIANDO ESTRUTURA E DADOS -------

INSERT INTO aluno_back select * from alunos;

select * from aluno_back;

## 4 -RECREVENDO A TABELA -----------------
DROP TABLE alunos;
RENAME TABLE aluno_back TO alunos;

## 6- USANDO AS TABELAS TRADICIONANIS ---

create table pruduto_bkp like produto;
insert into pruduto_bkp select * from produto where codigo > 5;
select * from pruduto_bkp;


## 7 - COPIANDO DBS ----------
CREATE database backup;
create table backup.alunos like empresa.alunos;
select * from alunos;
insert into backup.alunos select * from empresa.alunos;


QUANDO O BANCO POR MEDIDAS DE SEGURACA NAO DEIXA VOCE DAR UM UPDATE

SET SQL_SAFE_UPDATES=0;
