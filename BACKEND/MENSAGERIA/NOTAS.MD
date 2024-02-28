Kafka = Um motor -> receber essas informações rapidamente
e outros sistema consiguam ler essas informações rapidamente

Kafka Connect -> conectar as partes = Cluster roda tarefas.
Kafka Datasource -> Por onde vai sair o dado
Sinks -> File.txt

- Forma de comunicação entre sistema

* Chamada remotas - REST
* Banco de dados compartilhados - Rede com banco de dados
* Transferencia por arquivo - file.txt

- Problema envolvidos

* Demora na execução
* Falhas na comunicação
* Sobrecarga

Solução:

Message Broker

Produce -> Broker -> Consumer
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

Produce -> Exchange -> Routes(Bindings) -> Queue -> Consumer
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

- Direct
  Entrega as mensagens ás queues,
  com base na routing key da mensagem

Exchange Default = exchange não prenchido

- Fanout
  Mensagem vai para todas as queues vinculadas
  = brodcast.

- Topic

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

- Headers

Direciona uma mensagem com base em atributos
que são mais facilmente expressos no
header da mensagem do que como uma
Routing Key (que é ignorado neste caso).

Uma mensagem é considerado correspondente se
o valor do header for igual ao valor da
(Binding Key)

Example of bindings:

## Mensagem 1

format=pdf
type=report

## Mensagem 2

format=pdf
type=log

## AMQP - Queues

Entidades onde as mensagens são armazenadas até serem consumidas

É com quem os Consumers interagem

São definidos atributos dentre eles:

- Name
- Durable (indica se a queue se mantem com um restart do broker)
- Exclusive (indica se a queue será removida quando a connection for encerrada)
- Auto-delete (indica se a queue é removida quando o último consumer é desvinculado)
- Arguments (utilizado por plugins e brokers)

Quando uma mensagem é removida da queue?

- automatic ack
- explicit ack
- reject

O ack pode indicar que a mensagem foi recebida ou em outros casos precisa indicar que a mensagem foi processada

A imagem contém o seguinte texto:

## AMQP - Messages

São definidos atributos dentre eles:

- Content type
- Content encoding
- Routing key
- Delivery mode (persistente ou não - independe da exchange ou queue ser durable)
- Message priority
- Message publishing timestamp
- Expiration period

Também possuem um payload que são enviados como um array de bytes, o qual não é alterado pelo broker

A mensagem pode ter apenas atributos e nenhum payload

## conhecendo as Connections e Channels

Algumas aplicações precisam de várias conexões com o broker. No entanto, não é desejável manter muitas conexões TCP abertas ao mesmo tempo porque isso consome recursos

Como resolver isso dentro de uma única aplicação com vários consumers por exemplo?

A imagem contém o seguinte texto:

AMQP - Channels

As conexões AMQP são multiplexadas com channels que podem ser considerados pequenas conexões que compartilham uma única conexão TCP
Cada operação realizada por um client acontece em um channel
A comunicação em um determinado channel é completamente separada da comunicação de outros

Um channel existe apenas no contexto de uma connection e nunca por conta própria. Quando uma connection é fechada, todos os channels dela também são
Para aplicações que usam vários threads ou processos para processamento,
 é muito comum abrir um novo channel por thread/processo e não compartilhar channels entre eles, todavia, todos usam a mesma
