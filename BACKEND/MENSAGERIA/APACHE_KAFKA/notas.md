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

#### Config and Start kafka on Windows
1. Install kafka

ATENTION: ALWAYS INSTALLL (Kafka) in the (C:/).

2. You can see to principal files
3. Open configs
You can see the configs properties

```
producer.properties
zookeeper.properties
```

4. Open /bin/windows
5. Run cmd zookeeper 

zookeeper-server-start.bat ../../config/zookeeper.properties

6.After run kafka

kafka-server-start.bat ../../config/server.properties

In the same dir `/bin/windows`

7.Show all topics run cmd

kafka-topics.bat --bootstrap-server localhost:9092 --describe

8.Create one topic

kafka-topics.bat --bootstrap-server localhost:9092 --topic compras.db.cliente --create partitions 1

9.Show all topics run cmd

kafka-topics.bat --bootstrap-server localhost:9092 --describe

#### Implementation in java

1. Install dependencies in pow

Kafka-Clients: Client Java para comunicação com Kafka
SLF4J Simple binding: Sistema de logs para rodar a aplicação
````xml
<dependency>
 <groupId>org.apache.kafka</groupId>
 <artifactId>kafka-clients</artifactId>
 <version>2.4.1</version>
</dependency>
<dependency>
    <groupId>org.slf4j</groupId>
    <artifactId>slf4j-simple</artifactId>
    <version>1.7.30</version>
    <scope>test</scope>
</dependency>
````

2. Create one producer

var producer = new KafkaProducer<String, String>(properties());


create one method 
```java
private static Properties properties() {
    var properties = new Properties();

    properties.setProperty(pro)
} 
```