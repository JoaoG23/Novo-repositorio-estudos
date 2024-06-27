## APACHE KAFKA
Ele não é message broken e sim,
Sistema de stream de dados:


- Quando temos uma evento de sistema para
outro e no fim isso é descartado
estamos falando de **Mensagens**
Ex: Event Notification

Event-Carried State Transfer
Envio da coisa que mudou. como um (todo)
Ex: Dados Inteiros = (Sistema de Stream de dados)

Apache Kafka = e um banco de dados mais 
simples que guarda LOG = Com periodo de retenção: 60 Dias, 1 ano, Infinito

Imutável
1 2 3 4

Dados em forma em fila
1 registro após o outro 1

TOPICO = Pub and Sub

Producer --> Tópico <-- Consumidor A
                |-------Consumidor B
                |-------Consumidor C
                |-Ler do inicio--Fastão


## How to use:

1. Install kafka

2. You can see to principal files

```
producer.properties
zookeeper.properties
```