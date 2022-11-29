# Aprendendo DOCKER 

esc
#### Conceitos

1. Uma forma de execultar programas sua máquina sem té-lo instalado na nossa maquina.

LISTAR---------------

*docker ps* = lista os containers ativos;
*docker ps -a* = lista os containers que acabei de usar;

*docker stats*= mostra status dos containers

RODAR e CRIAR-------------

*docker run* --name meu-primeiro-containers -p (10) = porta entrada :(80 = porta de redirecionamento -d nginx = ele ira puxa a imagem nginx para dentro do containers
*docker run -d -p 80:80 (nome_image)* = criar rodando app em background e direcionar a porta.

*docker run -d -p 80:80 --name nginx-servidor-web (nome_image)*= Criar a imagem com nome especifico. 

*docker run -d (nome_image)* = para rodar a imagem em background mesmo ela não estando aberta. 

*docker start (CONTAINER)* = Reinicia o container recên criado.


*docker images* = Mostra as imagens existente no container

PARAR-----------


*docker stop (CONTAINER) = ex: docker stop 1887862b35e2* = para o serviço
*docker stop hardcore_pare* = para o container

REMOVER--------------

*docker rm* (4 digitos inicial do container) = remove a imagem sem esta inicializada
EX:
*docker rm -f 4c27* = pra usar em um containe ativo

*docker rmi nginx* = para remover a imagem

LOGS ----------

*docker logs (NAME)* = ver logs da aplicacao que esta rodando.



CRIAR IMAGES -----------

*docker build .* para criar a image 




---------Instando Docker no LINUX ---------
Para instalar de um update
em Seguida digite:
apt-get install docker.io