## Criando usuario
Como criar um sem banco

````sql

CREATE LOGIN teste   
    WITH PASSWORD = '$s.@$$noVf';

 ````

Como selecionar todos usuarios

```` sql

    select * from master.sys.server_principals

````