### Criando funções

sure, I can help you with that. Here’s a simple Oracle PL/SQL function that checks if a record exists in the DIP.HISTORICO_PESSOAS table, and if it doesn’t, it inserts the record. This function assumes that your table has columns ID, NOME, ESTADO_ATUAL, and DATA_SAIDA.

```SQL

CREATE OR REPLACE FUNCTION insert_if_not_exists (
  p_id IN NUMBER, 
  p_nome IN VARCHAR2, 
  p_estado_atual IN VARCHAR2, 
  p_data_saida IN DATE
) RETURN NUMBER AS 
  row_exists NUMBER;
BEGIN
  SELECT COUNT(*) INTO row_exists FROM DIP.HISTORICO_PESSOAS WHERE ID = p_id;

  IF row_exists = 0 THEN
    INSERT INTO DIP.HISTORICO_PESSOAS (ID, NOME, ESTADO_ATUAL, DATA_SAIDA) 
    VALUES (p_id, p_nome, p_estado_atual, p_data_saida);
    COMMIT;
    RETURN 1; -- return 1 if a new row was inserted
  ELSE
    RETURN 0; -- return 0 if the row already existed
  END IF;
EXCEPTION
  WHEN OTHERS THEN
    ROLLBACK;
    RAISE;
END insert_if_not_exists;

```


executando 

```SQL

DECLARE
  row_inserted NUMBER;
BEGIN
  row_inserted := insert_if_not_exists(1, 'Test', 'Active', TO_DATE('2024-01-22', 'YYYY-MM-DD'));
  DBMS_OUTPUT.PUT_LINE('Row inserted: ' || row_inserted);
END;

DECLARE row_inserted NUMBER; BEGIN row_inserted := insert_if_not_exists(1, 'Test', 'Active', TO_DATE('2024-01-22', 'YYYY-MM-DD')); END;


OR 

SELECT f(10) FROM dual;

```