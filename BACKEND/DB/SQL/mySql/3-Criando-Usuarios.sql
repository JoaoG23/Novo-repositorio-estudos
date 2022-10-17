DROP USER 'novo_usuário'@'localhost';
CREATE USER 'admin'@'localhost' IDENTIFIED BY 'admin';

##18:30:21	DROP USER 'novo_usuário' @ 'localhost'	Error Code: 1064. You have an error in your SQL syntax; check the manual that corresponds to your MySQL server version for the right syntax to use near ''localhost'' at line 1	0.000 sec
GRANT ALL ON teste_bancos.* TO 'admin'@'localhost';

##----- Criando um novo usuario---
CREATE USER 'maria'@'localhost' IDENTIFIED BY 'maria';

##----Criando todos o previlegio-----
GRANT ALL ON maria.* TO 'maria'@'localhost';
##CREATE USER 'nome_usuario' @ 'HOST' identified by 'senha_acesso'


CREATE USER 'novo_usuário'@'localhost' IDENTIFIED BY '1234';

SHOW GRANTS FOR 'novo_usuário'@'localhost';
GRANT ALL PRIVILEGES ON supermarket TO 'novo_usuário'@'localhost';

##----Removendo todos o previlegio-----
REVOKE ALL, GRANT OPTION
FROM maria@localhost;

##----- Para mostra os previlegios do usuario ------
SHOW GRANTS FOR 'admin'@'localhost';





