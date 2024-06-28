A **Amazon Virtual Private Cloud (Amazon VPC)** permite que você crie uma rede virtual isolada na nuvem. Essa rede é semelhante a uma rede tradicional que você operaria em seu próprio datacenter, mas com os benefícios da infraestrutura escalável da AWS¹. Com a VPC, você tem controle total sobre o ambiente de rede virtual, incluindo posicionamento de recursos, conectividade e segurança³. Basicamente, é uma maneira de definir sua própria rede privada na nuvem da Amazon, onde você pode implantar recursos como instâncias do **Amazon EC2** e **Amazon RDS**². 😊

* Subnets : Subrede da vpc 

#### 1. Crie um vpc = PAi de todas as redes
![alt text](image.png)
![alt text](image-1.png)

#### 2. Criar subnet ou subrede: São as zonas com faixa ips que cada um ira utilizar
![alt text](image-2.png)
![alt text](image-3.png)
![alt text](image-4.png)

#### 3. Ao criar 2 ou mais subnets em varios datacenter diferente
- Distribui suas maquinas em datacenter diferentes.
- Não tendo problema se um datacenter desse inteiro caia ou fica fora do ar.


#### 4. Da acesso a VPC a internet. Pois ela estar interna ainda;
Abra internet Gateway

1. Abra o internet Gateway
2. Coloque o nome para ela
3. Anexe sua nova vpc a ela


#### 5. Maquina precisam se encontrar tirando os ips dinamicos

    1. Volte na suas vpcs
    2. Vá em configurações Editar configurações da VPC!
    [alt text](image-5.png)

    3. Habilite resolução de DNS e nomes de host DNS
    ![alt text](image-6.png)
    ![alt text](image-7.png)

#### 6. Regra de segurança da VPC

![alt text](image-8.png)

1. Coloque toda requisição entrar ira para rede local
Sem redirecionamento nenhuma da maquinas consiguirá     acesso externo
2. Edite rota local e adicione mais uma rota

![alt text](image-9.png)


#### 7. Grupos de Seguranças

* Configuração permite saber que maquina 
tem acesso a que maquina
* quais maquinas ficaram acessiveis para 
usuario externos

* Google,nem bing indexe elas 

1. Acesse grupo de segurança
![alt text](image-10.png)
2. Crie uma novo grupo
3. Selecione a vpc

Libere somente as portas necessárias

Inbound = Se alguém estive tentando acessar ele
Outbound = Ele tentando acessar algo para fora

![alt text](image-11.png)

2. Adicionando HTTPS

![alt text](image-12.png)

3. Permitindo somente a grupo de segurança do banco possa aceita somente a conexão da API

![alt text](image-13.png)