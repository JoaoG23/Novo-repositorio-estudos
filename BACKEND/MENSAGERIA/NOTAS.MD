Kafka = Um motor -> receber essas informações rapidamente
e outros sistema consiguam ler essas informações rapidamente


Kafka Connect -> conectar as partes = Cluster roda tarefas.
Kafka Datasource -> Por onde vai sair o dado
Sinks -> File.txt


* Forma de comunicação entre sistema

- Chamada remotas - REST
- Banco de dados compartilhados - Rede com banco de dados
- Transferencia por arquivo - file.txt

* Problema envolvidos

- Demora na execução
- Falhas na comunicação
- Sobrecarga

Solução:

Message Broker

Produce     ->     Broker                         -> Consumer
Aplicação A -> message broker = armazena em filas -> Aplicação B -> DB


Obs: O que fila
Estrutura de dados onde utilizar = first in first out = FIFO
ou PEPS = Primeiro a entrar => Primeiro a Sair.

Enfileiramento de mensagem: A fila armazena temporariamente
quando o programa de destino está ocupado ou não conectado.
Diferente de Arq REST ou GRPc se a aplicação esta fora.




## MENSAGEM 

São estruturas com informações trocada entre sistemas
Ex:
- Solicitações, respostas, mensagens, erro ou apenas informações

Estruturas:
- Devem ser pequenas!
- Possuem um cabecalho (header)
- Possuem corpo (payload): 
Pode ser JSON, string, bytes = Base64

## QUANDO USAR MENSAGERIA

Em caso de:

- Comunicação assíncrona = Recebe a requisição e continua
procesar outras
- Desacoplamento = Uma aplicação na interrope a outra
- Escalabilidade = Pode adicionar instancia para aguentar
- Resiliência = Forma de reprocessar mensagens em 
caso de falhas.
- Processamento em background = Processar o arquivo
X = assíncronismo.

Fazer exercicios LEMBRAR


## Message Broker 

Servidor de mensagem, responsável por garantir que 
a mensagem seja enfileiradas e armazenadas em disco, 
garantido que ela fique lá enquanto necessário até
que alguém (consumidor) a retire de lá.

Alguns deles:

RabbitMQ
Apache Kafka
Google Cloud Pub/Sub
Amazon SQS
Azure Service Bus
Redis
ActiveMQ
IBM MQ


## AMQP

Protocolo Avançado de Enfileiramento de Mensagens

Protocolo de rede que permite aplicações se
comunicarem com um middleware intermediário
que trocam mensagens de forma assíncrona.


			
Produce  ->  Exchange  -> Routes(Bindings) -> Queue -> Consumer
			Entrada			
			

Exchanges -> Entidade onde as mensagem são enviadas
Com quem os Publishers interagem

Atribuitos Exchange:
Name:
Durability: restart do broker = tipo imagen
auto-delete: quando for desvinculada sera removida
arguments: utilizado em plugins e broker.

Routering key: atributo de mensagem


Tipos de Exchanges

* Direct
Entrega as mensagens ás queues, 
com base na routing key da mensagem

Exchange Default = exchange não prenchido

* Fanout
Mensagem vai para todas as queues vinculadas
= brodcast.

* Topic

Direciona as mensagens para uma ou mais queues com
base em um wildcard match entre a routing key da
mensagem e o routing pattern do binding com as 
queues

Routing key deve ser uma lista de palavras
grupo de mensagens
delimitada por um ponto:

Por exemplo:

notas.compras.filial
notas.compras.matriz
notas.vendas.filial

* Headers

Direciona uma mensagem com base em atributos
que são mais facilmente expressos no 
header da mensagem do que como uma
Routing Key (que é ignorado neste caso).

Uma mensagem é considerado correspondente se
o valor do header for igual ao valor da 
(Binding Key)

Example of bindings:

Mensagem 1
----------
format=pdf
type=report

Mensagem 2
----------
format=pdf
type=log