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


#### ADIÇãO ---------------------

Adicione esse comando em todas as 
outras máquinas com os outros IPs

```` shell
docker swarm join --token SWMTKN-1-0qkklpdc4qg79hdieo5n7qfb90u8uo5mckt7rk5mamwo140c1h-d09lcxuod2rxn6iwdie5zq686 192.168.0.6:2377

````


#### REMOVER JUNÇÂO ---------------------

```` shell
docker swarm leave -f

````
#### CRIAR SERVICO ---------------------

```` shell
docker service create --name nginx nginxswarm -p 90:80 nginx

````




