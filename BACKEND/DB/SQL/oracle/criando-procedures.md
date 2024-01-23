
CREATE OR REPLACE PROCEDURE insert_if_not_exists_proc (
  p_id IN NUMBER, 
  p_nome IN VARCHAR2, 
  p_estado_atual IN VARCHAR2, 
  p_data_saida IN DATE
) AS 
  row_exists NUMBER;
BEGIN
  SELECT COUNT(*) INTO row_exists FROM DIP.HISTORICO_PESSOAS WHERE ID = p_id;

  IF row_exists = 0 THEN
    INSERT INTO DIP.HISTORICO_PESSOAS (ID, NOME, ESTADO_ATUAL, DATA_SAIDA) 
    VALUES (p_id, p_nome, p_estado_atual, p_data_saida);
    COMMIT;
  END IF;
EXCEPTION
  WHEN OTHERS THEN
    ROLLBACK;
    RAISE;
END insert_if_not_exists_proc;


BEGIN
  insert_if_not_exists_proc(1, 'Test', 'Active', TO_DATE('2024-01-22', 'YYYY-MM-DD'));
END;


### Chamando procedure

    CALL DIP.INSERT_IF_NOT_EXISTS_PROC(:1, :2, 'ativo', CURRENT_DATE)