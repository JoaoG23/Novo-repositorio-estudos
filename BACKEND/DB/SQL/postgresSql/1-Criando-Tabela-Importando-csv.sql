--- ------ CRIAR TABELA ----------
create database testeDados;
create table tbColaboradoresCsv(
	idcolaborador integer not null ,
	nome_colaborador varchar(100),
	telefone_colaborador bigint,
	data_de_insersao date,
	PRIMARY KEY(idcolaborador)
);



--- ------ INSERIR ----------
insert into tbColaboradoresCsv values (default,'1Primeiro Colaborador Teste',3199998888,'2000-11-27');

drop table tbColaboradoresCsv;
truncate tbColaboradoresCsv;

create table tbcidadeDoColaboradores(
	nome_cidade varchar(100)
)



--- ------ CRIAR SEQUENCIA DE AUTO_INCREMENT PK ----------
-- drop sequence cidade_id_seq;

create sequence id_sequencia
increment 1
minvalue 1
maxvalue 9223372036854775807
start 1
cache 1;

Select * from tbColaboradoresCsv;
Select * from tbcidadeDoColaboradores;

insert into tbcidadeDoColaboradores values ('Montana');
insert into tbcidadeDoColaboradores values ('Rubela');



--- ------ ADICIONAR COLUNA  ----------
ALTER TABLE tbcidadeDoColaboradores add column id_cidade int not null PRIMARY KEY;


--- ---- ADICIONANDO AUTOINCREMENT ----------
ALTER TABLE tbColaboradoresCsv ALTER COLUMN idcolaborador SET DEFAULT NEXTVAL('id_sequencia'::regclass);


-- COPY tbColaboradoresCsv FROM 'C:\testeDir.csv' (DELIMITER ';');

-- COPY tbColaboradoresCsv FROM 'C:/testeDir/colaboradores.csv' WITH (FORMAT csv);

 ----- 2 --------- IMPORTANDO CSV PARA TABELA -------------------------
copy tbColaboradoresCsv_backup from 'C:/testeDir/colaboradoresPorVirgula.csv' with (delimiter ';', null '');
-- truncate table tbColaboradoresCsv;
SELECT * FROM tbColaboradoresCsv_backup;


SET client_encoding = 'utf-8';

SHOW server_encoding;

 ----- 1 ---------- PARA COPIAR ESTURURA DA COMO NO MYSQL -------------------
create table tbColaboradoresCsv_backup 
as table tbColaboradoresCsv
with no data;

------ 3 --------- COPIA TODO DADO PARA TABELA PRINCIPAL --------------

select * from tbColaboradoresCsv;
insert into tbColaboradoresCsv ( select * from tbColaboradoresCsv_backup );

