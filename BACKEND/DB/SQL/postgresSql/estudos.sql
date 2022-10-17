----1 Tipos de Funcao ======== Vindo da documentacao 9.5 - 
---=== argumentos sem nome  
CREATE FUNCTION addteste(integer, integer) 
	RETURNS integer
    AS 'select $1 + $2;'
    LANGUAGE SQL
    IMMUTABLE
RETURNS NULL ON NULL INPUT;

-- Execultando a funcao ---------------
select addteste(10,4);



----Tipo 2 ========
---=== argumentos com nome  
CREATE OR REPLACE FUNCTION incremento(i integer) RETURNS integer AS $$
        BEGIN
                RETURN i + 1;
        END;
$$ LANGUAGE plpgsql;

-- Execultando a funcao ---------------
select incremento(542)





--3 Retorne um registro contendo vários parâmetros de saída:

CREATE FUNCTION dup(int, out f1 int, out f2 text) 
    AS $$ SELECT $1, CAST($1 AS text) || 'é texto' $$ 
    LANGUAGE SQL; 

SELECT * FROM dup(42);


---4 Outra maneira de retornar várias colunas é usar uma função TABLE :

CREATE FUNCTION retornandoTabelas(int) RETURNS TABLE(f1 int, f2 text) 
    AS $$ SELECT $1, CAST($1 AS text) || 'é texto' $$ 
    LANGUAGE SQL; 

SELECT * FROM retornandoTabelas(42);











-- ************ LIMPANDO TABELA  ********
 TRUNCATE TABLE TBCREDENCIAL_CADASTRADAS,
	TB_USUARIOS;

-- ******** ADICIONADO COLUNAS DA CHAVE ESTRANGEIRA ********

ALTER TABLE TB_USUARIOS ADD COLUMN CRENDENCIAL_USUARIO VARCHAR(50) UNIQUE;


ALTER TABLE TBCREDENCIAL_CADASTRADAS ADD COLUMN CREDENCIAL VARCHAR(50) UNIQUE;

-- ******** ADICIONADO CHAVE ESTRANGEIRA 1 PARA ! TABELA FILHA ********

ALTER TABLE TB_USUARIOS ADD
FOREIGN KEY (CRENDENCIAL_USUARIO) REFERENCES TBCREDENCIAL_CADASTRADAS(CREDENCIAL);

-- para para deletar em cascata os demais item relacionado 
ALTER TABLE tbcredencial_cadastradas ADD
FOREIGN KEY (tempo_afastamento) REFERENCES tb_tipo_afastamento(fg_tempo_afastamento) ON DELETE CASCADE;
-- ******** INSERINDO USUARIOS ********

INSERT INTO TB_USUARIOS
VALUES (DEFAULT, 'foto', 'Luiza','Sonia','RG','111.111.111-23','2199999-9999','email@email.com')---- ATENCAO + PRIMEIRA CREDENCIAL DEPOIS _ Usuario Crendencia
INSERT INTO TBCREDENCIAL_CADASTRADAS 
VALUES (DEFAULT, 'ATIVA', '2022-02-20','08:31','2022-02-20','08:31','Entrada','G888');


UPDATE TB_USUARIOS
SET CRENDENCIAL_USUARIO = 'G888'
WHERE ID_USUARIO = 5;

-- ************** DANDO JOIN TUDO ******************

SELECT *
FROM TB_USUARIOS AS U
LEFT JOIN TBCREDENCIAL_CADASTRADAS AS CR ON U.CRENDENCIAL_USUARIO = CR.CREDENCIAL;

-- ************** DANDO JOIN Em Campos especificos ******************

SELECT U.ID_USUARIO,
	U.NOME_USUARIO,
	U.SOBRENOME_USUARIO,
	U.TIPO_DOCUMENTO_USUARIO,
	U.NUMERO_DOCUMENTO_USUARIO ,
	CR.CREDENCIAL,
	CR.SITUACAO_CREDENCIAL,
	CR.DATA_INICIAL_CREDENCIAL,
	CR.HORA_INICIAL_CREDENCIAL,
	CR.DATA_FINAL_CREDENCIAL,
	CR.HORA_FINAL_CREDENCIAL,
	CR.DIRECAO
FROM TB_USUARIOS AS U
LEFT JOIN TBCREDENCIAL_CADASTRADAS AS CR ON U.CRENDENCIAL_USUARIO = CR.CREDENCIAL;


CREATE VIEW VW_DADOS_USUARIO_CREDENCIADO AS
SELECT U.ID_USUARIO,
	U.NOME_USUARIO,
	U.SOBRENOME_USUARIO,
	U.TIPO_DOCUMENTO_USUARIO,
	U.NUMERO_DOCUMENTO_USUARIO ,
	CR.CREDENCIAL,
	CR.SITUACAO_CREDENCIAL,
	CR.DATA_INICIAL_CREDENCIAL,
	CR.HORA_INICIAL_CREDENCIAL,
	CR.DATA_FINAL_CREDENCIAL,
	CR.HORA_FINAL_CREDENCIAL,
	CR.DIRECAO
FROM TB_USUARIOS AS U
LEFT JOIN TBCREDENCIAL_CADASTRADAS AS CR ON U.CRENDENCIAL_USUARIO = CR.CREDENCIAL;


CREATE FUNCTION SP_INSERIR_USUARIO(DADOS_JSON text, RETORNA_SAIDA text) 
RETURNS LONGTEXT 
DECLARE 
	valor_nome varchar(80) :=  '';
	valor_sobrenome varchar(80) :=  '';
	valor_tipo_documento varchar(50) = '';
	valor_numero_documento varchar(20) = '';
	valor_crendencial varchar(50) = '';
	valor_data_inicial_credencial = '';
	valor_time_inicial_credencial = '';
	valor_data_final_credencial = '';
	valor_time_final_credencial = '';
	
BEGIN
	for 
END 
LANGUAGE PLPGSQL


-- ===== INSERIR dado Tipo Json ======

CREATE OR REPLACE FUNCTION public.salvar(
	data json)
    RETURNS void
    LANGUAGE 'sql'
    COST 100
    VOLATILE 
AS $BODY$
INSERT INTO "tbcredencial_cadastradas" SELECT * FROM json_populate_record(null::"tbcredencial_cadastradas", $1);

$BODY$;

-- ===== INSERINDO dados em JSON ======
select * from tbcredencial_cadastradas;
	SELECT salvar('{"id_credencial":"10",
	"situacao_credencial":"ATIVA",
	"data_inicial_credencial":"2022-02-20",
	"hora_inicial_credencial":"08:31:00",
	"data_final_credencial":"2022-02-20",
	"hora_final_credencial":"08:31:00",
	"direcao":"Entrada",
	"credencial":"33GR"}');




-- ====== Aprendendo e criando na pratica a estrutura JSON ======
select procedure_adicionar_crendencial('{"id_credencial":"1",
"situacao_credencial":"ATIVA",
"data_inicial_credencial":"2021-12-20",
"hora_inicial_credencial":"11:01:00",
"data_final_credencial":"2022-08-20",
"hora_final_credencial":"12:31:00",
"direcao":"Entrada",
"credencial":"15GR"}')

select * from tbcredencial_cadastradas;

-- - 1 transformando a tabela em json sem nome da linha -----
select row_to_json(row(situacao_credencial,
				   data_inicial_credencial,
				   hora_inicial_credencial,
				   data_final_credencial,
				  hora_final_credencial,
				  direcao,
				  credencial)) from tbcredencial_cadastradas;
				  
-- - 2 tabela em json com nome da linha -----
explain
select row_to_json(vw_dados_usuario_credenciado) from vw_dados_usuario_credenciado;

-- - 3 transformando a tabela em array dados json todas as linhas -----


select array_to_json (array_agg(row_to_json(tbcredencial_cadastradas))) from tbcredencial_cadastradas;
select array_to_json (array_agg(row_to_json(tb_usuarios))) from tb_usuarios;

---- 4 - transformando a dados da view em arrays de dados JSON
select array_to_json (array_agg(row_to_json(vw_dados_usuario_credenciado))) from vw_dados_usuario_credenciado;


insert into tb_usuarios (nome_usuario,
sobrenome_usuario,tipo_documento_usuario ,
 numero_documento_usuario ,
  crendencial_usuario,email_usuario) values ('Lucas','Jamarino Barbosa','CPF','333390992122','35GR','lucas@email.com');


---------------5 --- limpando campos nulos na tabela --------
  update tb_usuarios set foto_usuario = '' where foto_usuario is null;



   ---  execultando a procedure adicionar usuario + Crendencial ----

    --- Coisas importante sobre JSON psql:
    -- 1- Quando a coluna nao e referenciada = sera colocada na linha campo 'null' no campo sem nome da coluna
    
select procedure_adicionar_usuario_credencial('{"id_credencial":22,
											   "situacao_credencial":"ATIVA",
											   "data_inicial_credencial":"2021-12-20",
											   "data_final_credencial":"2022-08-20",
											   "direcao":"Entrada","credencial":"FD"}',
											   
											   '{"id_usuario":22,
											   "foto_usuario":"",
											   "nome_usuario":"Marina",
											   "sobrenome_usuario":"Santo da Gema",
											   "tipo_documento_usuario":"CPF",
											   "numero_documento_usuario":"332323232",
											   "telefone_usuario":"(31)9999-9999",
											   "email_usuario":"email@email.com",
											   "empresa_usuario":"empresaTeste",
											   "tipo_usuario":"Comum",
											   "setor_usuario":"Administracão",
											   "pais_usuario":"",
											   "estado_usuario":"",
											   "cidade_usuario":"",
											   "rua_usuario":"",
											   "numero_usuario":"",
											   "crendencial_usuario":"FF"
											   }');



-------- SELECIONANDO AS TABELAS -------
select  procedure_remover_usuario_crendenial(1,'123');
select * from tb_usuarios;
select * from tbcredencial_cadastradas;


------------ Criando uma procedure que update de dados----------------
CREATE OR REPLACE FUNCTION public.procedure_atualizar_usuario(
	integer,
	data json)
    RETURNS text
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE 
AS $BODY$
	begin
			IF $1 <> null or  THEN
			  		DELETE from tb_usuarios where id_usuario = $1;
					INSERT INTO tb_usuarios SELECT * FROM JSON_POPULATE_RECORD(NULL::tb_usuarios,$2);
					
					RETURN '{"situacao":"true","msg":"Usuario Atualizado com sucesso"}';
			  ELSE
				  RETURN '{"situacao":"false","msg":"Houve um erro .nada atualizado -_-"}';
			  END IF;
			  

		EXCEPTION WHEN TOO_MANY_ROWS THEN RAISE
		EXCEPTION '{"situacao":"false","msg":"Houve um erro .nada atualizado -_-"}';
	END
$BODY$;

-- select uma procedure que update de dados:
select procedure_atualizar_usuario(null, '{"id_usuario":9,
											   "foto_usuario":"",
											   "nome_usuario":"Teste de insersao",
											   "sobrenome_usuario":"pedo",
											   "tipo_documento_usuario":"CPF",
											   "numero_documento_usuario":"332323232",
											   "telefone_usuario":"(31)9999-9999",
											   "email_usuario":"email@email.com",
											   "empresa_usuario":"JgEmprendimentos",
											   "tipo_usuario":"Comum",
											   "setor_usuario":"Administracão",
											   "pais_usuario":"",
											   "estado_usuario":"",
											   "cidade_usuario":"",
											   "rua_usuario":"",
											   "numero_usuario":"",
											   "crendencial_usuario":"999"
											   }');

-- ================= Aprendendo a inserir dados de uma tabela Existente em outra =============
	-- 1- Criando para verifica e registra acesso em na tabela
	CREATE OR REPLACE FUNCTION public.procedure_verifica_se_existe_credenc(
	character varying,
	character varying)
    RETURNS text
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE 
AS $BODY$
begin
     IF EXISTS(SELECT credencial FROM tbcredencial_cadastradas WHERE credencial = $1 )  THEN
	 
	 	 -- ****Para pega os dados de uma tabela e inserer em outra tabela***
		 
-- 		   	EX: INSERT INTO tb_registro_acessos (nome_usuario,credencial);
-- 			SELECT nome_usuario, credencial FROM vw_dados_usuario_credenciado where credencial = '1234' ;

	 		 INSERT INTO tb_registro_acessos (
				nome_acesso,
				sobrenome_acesso,
				credencial,
				situacao_credencial,
				data_final_credencial,
				hora_final_credencial,
				direcao
			 )
			 
			SELECT nome_usuario,
			sobrenome_usuario,
			credencial,
			situacao_credencial,
			data_final_credencial ,
			hora_final_credencial,
			direcao 
			FROM vw_dados_usuario_credenciado where credencial = $1;
			
		return '{"situacao":"true","msg":"Credencial Permitida :D pode passar"}'::json;
	ELSE
		Insert into tb_registro_acessos (nome_acesso,
										 sobrenome_acesso,
										 credencial,
										 situacao_credencial,
										 direcao,
										 data_acesso,
										 hora_acesso
										)
										 values
										 ('Opaá parado ai.','Credencial Invalida ou inexistente',$1,'INVALIDA',$2,CURRENT_DATE,CURRENT_Time);
		return '{"situacao":"false","msg":"Essa credencial esta Invalida ou inexistente -_-"}'::json;
     END IF;
			  
------ try catch execessao diversao
		EXCEPTION WHEN others THEN
		RAISE EXCEPTION '{"situacao":"false","msg":"Houve um erro na funcao |procedure_verifica_se_existe_credenc| verifique o erro! "}';
END;
	
$BODY$;

-- 5.6.5. Mudar valor padrão da coluna
-- Para definir um novo valor padrão para a coluna, utiliza-se:

ALTER TABLE produtos ALTER COLUMN preco SET DEFAULT 7.77;
Deve ser observado que este comando não afeta nenhuma coluna existente na tabela, apenas muda o valor padrão para os próximos comandos INSERT.

-- Para remover o valor padrão para a coluna, utiliza-se:

ALTER TABLE produtos ALTER COLUMN preco DROP DEFAULT;
-- =================== Para Contactenar PSQL ===================
-- http://jquerydicas.blogspot.com/2014/01/postgre-funcao-concat-e-operador-de.html

-- _________________________PARA ALTERAR O TIPO DA COLUNA PSQL ___________________

-- http://pgdocptbr.sourceforge.net/pg80/ddl-alter.html#:~:text=Mudar%20o%20tipo%20de%20dado,TYPE%20numeric(10%2C2)%3B

-- ================= Como criar um trigger ==============

CREATE TRIGGER tr_adicionar_afastamento
    AFTER INSERT
    ON tbcredencial_cadastradas
    FOR EACH ROW
    EXECUTE PROCEDURE pr_update_datainicial();
	
CREATE OR REPLACE FUNCTION pr_update_datainicial()
    RETURNS trigger
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE NOT LEAKPROOF
AS $BODY$
	BEGIN 
			update tbcredencial_cadastradas set data_inicial_credencial = current_timestamp + tempo_afastamento 
			where credencial = new.credencial;
			return new;
	END		
$BODY$;


---- Usuario de teste 

-- INSERT 
-- USUARIO DE TESTE 

select procedure_adicionar_usuario_credencial(
											'{
											  "id_credencial":"g",
											   "situacao_credencial":"ATIVA",
											   "data_inicial_credencial":"2021-12-20",
											   "data_final_credencial":"2022-08-20",
											   "direcao":"Entrada","credencial":"G"
											  }',
										
											   '{
											  "id_usuario":"g",
											   "foto_usuario":"",
											   "nome_usuario":"Jorge Carlos",
											   "sobrenome_usuario":"Moura",
											   "tipo_documento_usuario":"CPF",
											   "numero_documento_usuario":"332323232",
											   "telefone_usuario":"(31)9999-9999",
											   "email_usuario":"email@email.com",
											   "empresa_usuario":"empresaTeste",
											   "tipo_usuario":"Comum",
											   "setor_usuario":"Administracão",
											   "pais_usuario":"",
											   "estado_usuario":"",
											   "cidade_usuario":"",
											   "rua_usuario":"",
											   "numero_usuario":"",
											   "crendencial_usuario":"G"
											   }'
											 );
						
-- DELETE 
SELECT public.procedure_remover_usuario(
	'g'
)

-- ALTER 
SELECT public.procedure_atualizar_usuario(
	'g', 
											'{
											  "id_credencial":"g",
											   "situacao_credencial":"ATIVA",
											   "data_inicial_credencial":"2021-12-20",
											   "data_final_credencial":"2022-08-20",
											   "direcao":"Entrada","credencial":"G"
											  }',
										
											   '{
											  "id_usuario":"g",
											   "foto_usuario":"",
											   "nome_usuario":"Mauricio Ribeiro",
											   "sobrenome_usuario":"Jasper",
											   "tipo_documento_usuario":"CPF",
											   "numero_documento_usuario":"12312313",
											   "telefone_usuario":"(31)9999-9999",
											   "email_usuario":"email@email.com",
											   "empresa_usuario":"empresaTeste",
											   "tipo_usuario":"Comum",
											   "setor_usuario":"Logistica",
											   "pais_usuario":"",
											   "estado_usuario":"",
											   "cidade_usuario":"",
											   "rua_usuario":"",
											   "numero_usuario":"",
											   "crendencial_usuario":"G"
											   }'
)


-- CONTROLE DE ACESSO --

SELECT public.procedure_verifica_se_existe_credencial(
	'G', 
	'Saida'
)

-- Criando Constrainger de unique 
-- 1 Alter criando constrange para ser colocada em tabela 
	
CREATE UNIQUE INDEX CONCURRENTLY email_gestor_unique
ON tb_registrar_gestor (email_gestor);

-- 2 Colocando unique em tabela = add constraint 
ALTER TABLE tb_registrar_gestor 
ADD CONSTRAINT email_gestor_unique 
UNIQUE USING INDEX email_gestor_unique;


---- Criando LOOPS no Psql FOR IN 

create function Teste_iteraTupla() returns void as $$
	declare
	tupla record; -- Tipo Generico par armazenargem
	cont int := 1; -- Contado para increnmento
begin
	for tupla in
	select * from tb_usuarios order by id_usuario
	loop -- Inicio da interacao ou loop
	raise notice 'Funcionario %- Credencial: % | Nome: % ',cont, --Cada % Simboliza onde aparecera o campo
	tupla.crendencial_usuario, tupla.nome_usuario; --- declarando os campo que selecionado da tabela usuarios
	cont := cont + 1;
	end loop;
end;
$$ language plpgsql;
select Teste_iteraTupla();

https://pt.stackoverflow.com/questions/311944/autoincremento-do-postgresql-pula-1-valor-quando-o-insert-%C3%A9-feito-por-uma-fun%C3%A7%C3%A3o


==== Brincando com valores de tabela 

http://jquerydicas.blogspot.com/2014/04/subtrair-intervalo-de-uma-data.html


CREATE OR REPLACE VIEW public.vw_tempo_afastamento_credencial
 AS
 SELECT 
    cr.credencial,
    cr.situacao_credencial,
    cr.data_inicial_credencial,
    cr.data_final_credencial,
    cr.direcao,
    cr.credito_credencial,
	
	af.id_afastamento,
	af.nome_afastamento,
	af.tempo_afastamento
   FROM tb_tipo_afastamento af
     LEFT JOIN tbcredencial_cadastradas cr ON af.id_afastamento = cr.id_tipo_afastamento;
	 
	 insert into tb_tipo_afastamento values(default,'Ferias','35 days');

-- ================ DANDO JOIN EM 3 TABELAS DIFERENTES ==============

create view tudos_dados as 
SELECT * FROM tb_usuarios Fus
INNER JOIN tbcredencial_cadastradas crd ON crd.credencial = us.crendencial_usuario
INNER JOIN tb_tipo_afastamento af ON af.fg_tempo_afastamento = crd.tempo_afastamento;


-- === COMO TRABALHA COM OS ERROS DO DOTENV 
-- https://stackoverflow.com/questions/61407393/while-running-the-script-throws-cannot-find-module-dotenv


-- === COMO USAR SETOF E DEMAIS PROCEDURE ===
-- https://www.devmedia.com.br/postgresql-stored-procedures-funcoes-em-linguagem-sql/5118


-- Paginacao no banco de dados ---



--- Limite para conexoes do poool 

Por padrão o postgres tem limite de conexoes para clientes externos 
como o nodejs 
-- essse limite e de 100 conexoes por cliente
O COMANDO PARA VER:
-- show max_connections;

-- para ver quais os acesso e conexoes o postgres tem
-- SELECT * FROM pg_stat_activity;

--- COMO RESOLVER O PROBLEMA 
alter system set max_connections = size of connection.



PARA IMPORTA UM DUMP NO SISTEMA no POSTGRES 
-- psql -h localhost -U postgres -d dbsistema_acesso < C:\Users\joaog\Desktop\DBbackup\plin