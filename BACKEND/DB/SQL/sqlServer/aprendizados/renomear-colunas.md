
### COMO RENOMAR COLUNAS SQL SERVER
  https://www.techonthenet.com/sql_server/tables/alter_table.php

sp_rename 'table_name.old_column_name', 'new_column_name', 'COLUMN';

EX:

sp_rename '[port01].[clientes].rua', 'endereco', 'COLUMN';


  --- TABELAS


  Rename table

  sp_rename 'old_table_name', 'new_table_name';