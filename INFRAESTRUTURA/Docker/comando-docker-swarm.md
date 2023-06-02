# Docker Swarm ------------------------

Aqui estão os comando para orquestração
de container chamado de docker.

#### Iniciar docker ---------------------

```` shell
docker swarm init --advertise-addr 192.168.0.6

````


#### LISTAR ---------------------

```` shell
docker node ls

````
Listar serviços

```` shell
docker service ls

````


#### ADIÇãO ---------------------

Adicione esse comando em todas as 
outras máquinas com os outros IPs

```` shell
docker swarm join --token SWMTKN-1-0qkklpdc4qg79hdieo5n7qfb90u8uo5mckt7rk5mamwo140c1h-d09lcxuod2rxn6iwdie5zq686 192.168.0.6:2377
````

###### CONSULTAR TOKEN ----------------

Consultar o token para replicar em outras máquinas

```` shell
docker swarm join-token manager
````
#### REMOVER JUNÇÂO ---------------------

```` shell
docker swarm leave -f

docker swarm leave

````
Remover serviços 


```` shell
docker service rm <nome>

````

#### CRIAR SERVICO ---------------------

Criar serviços

```` shell
docker service create --name nginxswarm -p 90:80 nginx

````
Aumentar o número de replicas dos serviços

OBS: Caso container for removido em algum
dos node com docker container rm (id)
automaticamente o serviço será 
subido novamente.

```` shell
docker service create --name nginxreplicas --replicas 3 -p 90:80 nginx

````




