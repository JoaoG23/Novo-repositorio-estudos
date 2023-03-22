## 1- Como criar uma aplicação com docker

baixe a image do banco de dados digite o comando

_docker build -t mysql-image -f api/db/Dockerfile ._

2-Criar container

_docker run -d --rm --name mysql-container mysql-image_

3- Crie um script do banco no db

4-Execulte o docker na sua maquina
_docker exec -i mysql-container mysql -url -uroot -padmin < api/db/script.sql_

5-Entrar no container

_docker exec -it mysql-container /bin/bash_

para o seu container em seguida
adicione mais um flag

6-Adicionando volume

adicione a tag -v no na criação do container

_docker run -d -v C:\github\joaoG23\pessoal\Novo-repositorio-estudos\INFRAESTRUTURA\Docker\introducao-poc\api\db\data:/var/lib/mysql --rm --name mysql-container mysql-image_

7-Faça um restore do script sql novamenta

_docker exec -i mysql-container mysql -url -uroot -padmin < api/db/script.sql_

8-Entre no banco

_mysql -uroot -padmin_

9-Rode o nodejs


10-Veja o IP do container do mysql com inspect

*docker inspect mysql-container*

11- Crie um dockerfile para o backend node em seguida digite o comando
para rodar a image

*docker build -t node-image -f api/Dockerfile .*

12- Cria um container para nodejs

ERROR De 145492
<!-- https://cursos.alura.com.br/forum/topico-code-er_not_supported_auth_mode-145492 -->

*docker run -d -v C:\github\joaoG23\pessoal\Novo-repositorio-estudos\INFRAESTRUTURA\Docker\introducao-poc/api:/home/node/app -p 9001:9001 --link mysql-container --rm --name node-container node-image*

13- crie os aquivos da pasta website os arquivos

14-Baixe o arquivo criar imagem PHP image-php e apache
*docker build -t node-image -f website/Dockerfile .* 


14- execulte o comando docker para iniciar o servico de frontend php

*docker run -d -v "C:\github\joaoG23\pessoal\Novo-repositorio-estudos\INFRAESTRUTURA\Docker\introducao-poc/website":/var/www/html -p 8888:80 --link node-container --rm --name php-container php-image*