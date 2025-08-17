# Aprendendo DOCKER

esc

#### Conceitos

1. Uma forma de execultar programas sua máquina sem té-lo instalado na nossa maquina.

LISTAR---------------

_docker ps_ = lista os containers ativos;
_docker ps -a_ = lista os containers que acabei de usar;

_docker stats_= mostra status dos containers

_docker info_= informações sobre o docker

_docker help_= informações sobre os comandos
_docker <sub-comando> <opcoes>_= informações sobre os comandos

RODAR e CRIAR-------------

_docker run_ --name meu-primeiro-containers -p (10) = porta entrada :(80) = porta de redirecionamento -d nginx = ele ira puxa a imagem nginx para dentro do containers
_docker run -d -p 80:80 (nome_image)_ = criar rodando app em background e direcionar a porta.

_docker run -d -p 80:80 --name nginx-servidor-web (nome_image)_= Criar a imagem com nome especifico.

_docker run -d (nome_image)_ = para rodar a imagem em background mesmo ela não estando aberta.

_docker start (CONTAINER)_ = Reinicia o container recên criado.


-----IMAGEM _______________
_docker images_ = Mostra as imagens existente no container


_docker build . -t nome da imagem_ = Criar uma imagem no docker

PARAR-----------

_docker stop (CONTAINER) = ex: docker stop 1887862b35e2_ = para o serviço
_docker stop hardcore_pare_ = para o container

REMOVER--------------

_docker rm_ (4 digitos inicial do container) = remove a imagem sem esta inicializada
EX:
_docker rm -f 4c27_ = pra usar em um containe ativo

_docker rmi nginx_ = para remover a imagem

LOGS ----------

_docker logs (NAME)_ = ver logs da aplicacao que esta rodando.

CRIAR IMAGES -----------

_docker build ._ para criar a image

---------Instando Docker no LINUX ---------
Para instalar de um update
em Seguida digite:
apt-get install docker.io


VERIFICAR DATA do container

*docker exec <container_name_or_id> date*


------- PARA ENTRA NO CONTAINER ----------------

*docker exec -it meu_container /bin/bash*


Para RODAR COMPOSER arquivo e background
*docker-compose up -d*

Para desfazer images e containers COMPOSER arquivo
*docker-compose down --rmi all --volumes --remove-orphans*

Para desfazer composer somente containers
*docker-compose down*

parar container e docker compose
*docker-compose stop*

lista todos compose existentes
*docker compose ls -a*

lista todos compose existente rodando
*docker compose ls*

rebuild of the images 
*docker-compose up --build*


------- LOGIN ----------------
Como logar no docker 
*docker login*
Deslogar
*docker logout*





------- CRIAR IMAGEM NO DOCKER HUB ----------------

1- Crie a image no docker hub 
2- Com o nome da imagem criada no docker buildar
com os seus arquivos:
*docker build -t joaog545/node-joao-image ./web*

----- ATUALIZAR IMAGEM do DOCKER HUB -------------------
1- Em seguir jogue a image atualizada com docker 
push para nuvem
*docker push joaog545/node-joao-image*

2- Para atualizar image no docker hub basta buildar
imagem com nova tag

*docker build -t joaog545/node-joao-image .*

3- Para Subir a image atualizada no docker hub 

*docker push joaog545/node-joao-image:novavesaoteste*

----- COMO buscar image do docker  ------------------- 

*docker pull joaog545/node-joao-image:novavesaoteste*

------- STATS ----------------
Ver status  
*docker stats*


VOLUME --------------------------------

3 Tipos de volume 
Anonimos  = aleatorio flag -v 
Nomeadors  = pode ser reaproveitados
Bind mounts  = Salvamos dados na maquina
local


1- Lista todos volumes

*docker volume ls*

2- Rodar contaier com volume anonimos -v /data

docker run -d -p 80:80 --name nome_container (nome_image) --rm -v /data phpmsg

3 - Rodar docker volume nomeado 

-v nomeVolume : (caminho workdir)
3- *docker run -d -p 81:80 --name phpcontainer2 -v phpvolume:/var/www/html/messages --rm phpmsg*


4- Como criar bind mount 

Quando o container o 
primeiro caminho será onde estará salvará os arquivos pelo PC 
segundo caminho para o container saber onde será salvo
:/var


Exemplo de comando :
*docker run -d -p 80:80 --name phpcontainer -v C:\github\joaoG23\pessoal\curso_docker\2_volumes\messages:/var/www/html/messages --rm phpmsg*



5- Como atualização da api com bind mount 

Retire a pasta final (\messages) dos dois caminhos
Exemplo de comando :

*docker run -d -p 80:80 --name phpcontainer -v C:\github\joaoG23\pessoal\curso_docker\2_volumes\:/var/www/html --rm phpmsg*


CRIAR VOLUME ---------------------
6- Como criar um volume nomeado individual 

Exemplo de comando :

*docker volume create testecriacaovolume*


para utilizar-lo volume!

*docker run -d -p 80:80 --name phpcontainer -v (nome_volume_criado):/var/www/html/ --rm phpmsg* 

para utilizar-lo no volume!
*docker run -d -p 80:80 --name phpcontainer -v (testecriacaovolume):/var/www/html/ --rm phpmsg*  


7- INSPECIONAR VOLUMES -------------------

exemplo: 
*docker volume inspect (nome volume)*
*docker volume inspect testecriacaovolume*

8- REMOVER VOLUME -------------------

como o container desligado
exemplo: 
*docker volume rm (nome volume)*
*docker volume rm testecriacaovolume*

Como remover volume não utilizados
exemplo: 
*docker volume prume*


DOCKER NETWORK ------------------------------------

LISTA ------------------

Como listar redes:
exemplo: 
*docker network ls*


CRIAR ------------------
Cria redes :
exemplo: 
*docker network create (nome_rede)*


Criar rede com drive diferente:
exemplo: 
*docker network create -d macvlan (nome_rede)*


REMOVER ------------------
Remover redes :
exemplo: 
*docker network rm (nome_rede)*

Para remover redes em massa 
exemplo:
*docker network prune*

COMO LIGAR DOIS CONTAINER E BANCO DE DADOS MESMA REDE __INTERNA__ ________________

1- Build o banco de dados
exemplo:*docker build -t (nome_image) .*

2- Criar um network para os dois container 

exemplo:
*docker run -d -p 3306:3306 --name (nome-container) --rm --network (nome_rede) -e MYSQL_ALLOW_EMPTY_PASSWORD=true (nome_image)*

3- Buildar a image do container API

mesmo comando de sempre 

4- Suba o container com a mesma network
exemplo:
*docker run -d -p 5000:5000 --name flask-api-container --rm --network flask-network api-flask-image*


COMO CONECTAR UM CONTAINER __CRIADO__ APÒS _______________
exemplo:


*docker network connect flask-network (eccd9d45ebeb = id container)*

COMO DESCONECTAR UM CONTAINER __CRIADO__ APÒS _______________
exemplo:

*docker network disconnect flask-network mysql-api-container*

INSPECIONAR REDE 

*docker network inspect (nome_rede)*



*YAML--------------------------------------*
*DOCKER COMPOSE----------------------------*

Para subir serviços do docker
*docker-compose up (-d modo de sem terminal aberto)*


REMOVER E PARA CONTAINER
*docker-compose down*

REMOVE CONTAINER - IMAGE - VOLUME

*docker-compose down --rmi all --volumes --remove-orphans*

UTILIZANDO VARIAVEIS DE AMBIENTE NO COMPOSE


