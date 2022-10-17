##CREATE USER 'nome_usuario' @ 'HOST' identified by 'senha_acesso'


CREATE USER 'novo_usuário'@'localhost' IDENTIFIED BY '1234';

SHOW GRANTS FOR 'novo_usuário'@'localhost';
GRANT ALL PRIVILEGES ON supermarket TO 'novo_usuário'@'localhost';


Version of System Mysql 
cmd:

show variables like '%version%';
