

Como Gerenciar e Listar Serviços no Linux
Gerenciar um servidor VPS Brasil é um pouco delicado e, às vezes, pode ser uma tarefa difícil se você não tem acesso às ferramentas certas. Frequentemente, a dificuldade está em ter que configurar e manter muitos recursos e serviços ao mesmo tempo.

Em um servidor, a maioria dos recursos são softwares, o que os torna um pouco mais fáceis de monitorar. Neste tutorial, você vai aprender o básicos dos serviços Linux, incluindo como gerenciar, controle e listar serviços Linux.


Serviços Linux
Um serviço é um programa que roda em segundo plano fora do controle interativo dos usuários do sistema, por falta de uma interface. Isso é feito para garantir ainda mais segurança, pois alguns desses serviços são cruciais para o funcionamento do sistema operacional.

Por outro lado, em sistemas como Unix ou Linux, os serviços também são conhecidos como daemons. Às vezes, o nome desses serviços ou daemons terminam com a letra d. Por exemplo, o sshd é o nome de um serviço que controla o SSH.

Assim, vamos começar a aprender a como listar serviços no Linux.

Como Listar Serviços Linux
Considere o cenário potencial a seguir. Enquanto você está executando o seu sistema Linux, você não tem mais acesso ao seu localhost. É bem possível também que o serviço HTT também foi desativado, causando algum problema.

Para resolver contratempos como esse e muitos outros, é útil conhecer como listar todos os serviços no Linux.  

Felizmente, o CentOS e o Ubuntu, dois dos sistemas operacionais mais populares nas suas áreas, compartilham o systemd. Isso significa que os comandos que vamos apresentar são compatíveis com ambos os sistemas.

Primeiro de tudo, você precisa se conectar a sua VPS através do SSH. Se quiser uma ajuda extra em como fazer isso, siga nosso tutorial PuTTy.

Uma vez logado, precisamos ser o usuário root para listar serviços Linux.

su
Agora podemos listar todos os serviços no Linux. É só usar o comando:

sudo systemctl list-unit-files --type service --all
Quando o comando é executado, vamos poder ver todos os serviços que estão operando no sistema. Porém, também veremos alguns que têm um status já definido. Vamos aprender o que todos esses status significam.

Enabled (Ativado) – São os serviços que estão atualmente sendo executados. Geralmente, eles não têm problema algum.
Disabled (Desativado) – São os serviços que não estão em execução. Mas podem ser ativados a qualquer momento sem qualquer problema.
Masked (Mascarado) – São os serviços que não vão ser executado a menos essa propriedade sejam retirados deles.
Static (Estático) – São os serviços que só serão usados
Finalmente, existem serviços gerados por um initscript SysV ou LSB com um gerador systemd.    
Caso você queira saber apenas os serviços que estão ativos naquele momento, basta usar o comando junto com o grep. Assim:

sudo systemctl | grep running
Gerenciar Serviços Linux
Chegou a hora de aprender a como gerenciar serviços específicos no Linux. Atente-se que cada serviço representa um software que funciona diferentemente.

Neste tutorial, vamos mostrar apenas como começar, verificar e parar estes serviços específicos. Ou seja, os comandos básicos.

Para começar um serviço no Linux, use o comando abaixo:

    sudo systemctl start [service_name]
Se o serviço estiver configurado corretamente, ele vai iniciar logo em seguida. Agora, queremos pará-lo. Para isso, é só usar o comando:

    sudo systemctl stop [service_name]
Enquanto isso, para verificar serviços Linux, ou seja, seu status de funcionamento, podemos usar:

    sudo systemctl status [service_name]
Também é possível ter um serviço em execução enquanto o sistema operacional está sendo carregado. Use:

    sudo systemctl enable [service_name]
Ou remova-o do carregamento inicial usando:

    sudo systemctl disable [service_name]
Finalmente, é possível verificar qual porta está sendo usada por um serviço. Para isso, use o netstat.

Para instalá-lo no Ubuntu, execute:

sudo apt install netstat-nat
Caso esteja usando o CentOS 7, use:

yum install net-tools
Então, execute o seguinte comando:

sudo netstat -plnt
O resultado vai dar a você todas as informações sobre a rede de internet que estiver conectado.