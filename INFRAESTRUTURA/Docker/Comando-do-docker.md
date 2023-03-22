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

_docker run_ --name meu-primeiro-containers -p (10) = porta entrada :(80 = porta de redirecionamento -d nginx = ele ira puxa a imagem nginx para dentro do containers
_docker run -d -p 80:80 (nome_image)_ = criar rodando app em background e direcionar a porta.

_docker run -d -p 80:80 --name nginx-servidor-web (nome_image)_= Criar a imagem com nome especifico.

_docker run -d (nome_image)_ = para rodar a imagem em background mesmo ela não estando aberta.

_docker start (CONTAINER)_ = Reinicia o container recên criado.

_docker images_ = Mostra as imagens existente no container

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


------- PARA ENTRA NO CONTAINER ----------------

*docker exec -it meu_container /bin/bash*


Para RODAR COMPOSER arquivo
*docker-compose up -d*