### criar tabela aparti de outra 'select * from into'

````sql
CREATE TABLE DIP.PRESTADORES_MG AS
SELECT * FROM DIP.PRESTADORES_SERVICO WHERE estado = 'MG';
````