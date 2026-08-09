````markdown
# Documentação — Firewall, Docker e WireGuard

## 1. Objetivo

O objetivo desta configuração é ter **controle real sobre o firewall do servidor**, especialmente sobre:

- Portas públicas.
- Portas acessíveis somente pela VPN.
- Portas bloqueadas para a Internet.
- Serviços Docker.
- PostgreSQL, MySQL, Redis e outros serviços internos.
- Acesso administrativo através do WireGuard.
- Regras de entrada e encaminhamento de tráfego.

A decisão tomada foi utilizar o **iptables como camada principal de controle**, sem depender do UFW para controlar as portas publicadas pelo Docker.

---

# 2. Problema encontrado

O servidor possui Docker e UFW/iptables.

Quando uma porta é publicada pelo Docker, por exemplo:

```yaml
ports:
  - "8084:84"
````

o Docker cria regras próprias no iptables para encaminhar o tráfego para o container.

Por isso, uma regra como:

```bash
sudo ufw deny 8084/tcp
```

pode não produzir o comportamento esperado para uma porta publicada pelo Docker.

O tráfego pode passar pelas regras do Docker antes de chegar às regras que normalmente seriam esperadas no UFW.

---

# 3. Decisão sobre o UFW

Foi decidido utilizar o **iptables diretamente como fonte de controle do firewall**.

O UFW não será utilizado como mecanismo principal para controlar as portas dos containers.

A ideia é:

```text
Internet
   |
   v
iptables
   |
   +--> tráfego público
   |
   +--> WireGuard
   |
   +--> Docker
```

O Docker continuará funcionando normalmente.

O controle específico do tráfego destinado aos containers será feito principalmente através da chain:

```text
DOCKER-USER
```

---

# 4. Política geral de firewall

O servidor possui:

```text
INPUT policy  DROP
FORWARD policy DROP
```

Isso significa que o comportamento padrão é bloquear o tráfego que não tiver uma regra permitindo explicitamente.

Exemplo observado:

```text
Chain INPUT (policy DROP)
Chain FORWARD (policy DROP)
```

Isso é importante porque permite trabalhar com uma política de:

> Negar por padrão e liberar somente o necessário.

---

# 5. Interfaces importantes

A interface de Internet do servidor é:

```text
ens3
```

A interface do WireGuard é:

```text
wg0
```

A rede da VPN é:

```text
10.8.0.0/24
```

O servidor WireGuard utiliza:

```text
10.8.0.1
```

O primeiro cliente utiliza:

```text
10.8.0.2
```

A ideia é:

```text
ens3 = Internet
wg0  = VPN
```

---

# 6. Configuração do WireGuard

Configuração utilizada inicialmente:

```ini
[Interface]
Address = 10.8.0.1/24
ListenPort = 51820
PrivateKey = SUA_PRIVATE_KEY

PostUp = iptables -A FORWARD -i wg0 -j ACCEPT; iptables -t nat -A POSTROUTING -o ens3 -j MASQUERADE
PostDown = iptables -D FORWARD -i wg0 -j ACCEPT; iptables -t nat -D POSTROUTING -o ens3 -j MASQUERADE

[Peer]
PublicKey = CLIENT_PUBLIC_KEY
AllowedIPs = 10.8.0.2/32
```

## Importante

A chave privada do servidor foi exposta durante a configuração.

Essa chave deve ser considerada comprometida.

É recomendável gerar uma nova chave privada e substituir a chave do servidor depois que a configuração estiver estabilizada.

Nunca compartilhar:

```text
PrivateKey
```

publicamente.

A chave pública pode ser compartilhada.

---

# 7. Problema inicial do WireGuard

O WireGuard estava recebendo pacotes na porta:

```text
UDP 51820
```

O tcpdump mostrou:

```text
170.79.52.237:18818 -> 10.0.0.7:51820
```

Portanto:

```text
Internet
   |
   | UDP 51820
   v
Servidor
```

O pacote estava chegando ao servidor.

Porém, o WireGuard não estabelecia o handshake.

---

# 8. Diagnóstico

Foi identificado:

```text
Chain INPUT (policy DROP)
```

Não existia uma regra permitindo:

```text
UDP 51820
```

Consequentemente, o iptables estava descartando o tráfego antes que o WireGuard pudesse responder.

Foi adicionada:

```bash
sudo iptables -I INPUT 3 -i ens3 -p udp --dport 51820 -j ACCEPT
```

Depois disso o WireGuard começou a funcionar.

---

# 9. Teste do WireGuard

Após liberar a porta 51820, o cliente conseguiu acessar:

```text
10.8.0.1
```

O teste:

```text
ping 10.8.0.1
```

retornou respostas:

```text
Resposta de 10.8.0.1: bytes=32 tempo=25ms TTL=64
Resposta de 10.8.0.1: bytes=32 tempo=40ms TTL=64
Resposta de 10.8.0.1: bytes=32 tempo=27ms TTL=64
Resposta de 10.8.0.1: bytes=32 tempo=27ms TTL=64
```

Isso confirmou que:

```text
Cliente
   |
   | WireGuard
   v
10.8.0.1
```

está funcionando.

---

# 10. Estratégia para portas somente pela VPN

A ideia principal é permitir determinados serviços somente quando o tráfego vier pela interface:

```text
wg0
```

E bloquear o acesso vindo da interface pública:

```text
ens3
```

Exemplo:

```text
                 SERVIDOR
                    |
          +---------+---------+
          |                   |
        ens3                 wg0
      Internet               VPN
          |                   |
          X                   |
       porta 5432         porta 5432
          |                   |
       BLOQUEADO             OK
```

---

# 11. PostgreSQL — porta 5432

O PostgreSQL não deve ficar exposto diretamente à Internet.

A intenção é:

```text
Internet -> 5432     BLOQUEADO
WireGuard -> 5432    PERMITIDO
```

Como o PostgreSQL está em Docker, o controle deve ser feito na:

```text
DOCKER-USER
```

---

# 12. Regra para permitir PostgreSQL pela VPN

Foi utilizada:

```bash
sudo iptables -I DOCKER-USER -i wg0 -p tcp --dport 5432 -j ACCEPT
```

Essa regra significa:

```text
Se o tráfego vier pela wg0
e for TCP
e for destinado à porta 5432
então permitir.
```

---

# 13. Regra para bloquear PostgreSQL pela Internet

Foi utilizada:

```bash
sudo iptables -I DOCKER-USER -i ens3 -p tcp --dport 5432 -j DROP
```

Isso significa:

```text
Internet / ens3
       |
       v
TCP 5432
       |
       X
     DROP
```

Enquanto:

```text
WireGuard / wg0
       |
       v
TCP 5432
       |
       OK
```

---

# 14. Por que usar DOCKER-USER

O Docker cria suas próprias chains e regras.

Entre elas:

```text
DOCKER
DOCKER-USER
DOCKER-ISOLATION-STAGE-1
DOCKER-ISOLATION-STAGE-2
```

A chain:

```text
DOCKER-USER
```

é apropriada para colocar regras administrativas de filtragem antes das regras específicas de encaminhamento do Docker.

Isso permite controlar o tráfego dos containers sem precisar modificar constantemente a configuração interna do Docker.

---

# 15. Exemplo para outras portas

Se quiser deixar uma porta acessível somente pela VPN:

```bash
sudo iptables -I DOCKER-USER -i wg0 -p tcp --dport PORTA -j ACCEPT
sudo iptables -I DOCKER-USER -i ens3 -p tcp --dport PORTA -j DROP
```

Substitua:

```text
PORTA
```

pela porta desejada.

Exemplo para MySQL:

```bash
sudo iptables -I DOCKER-USER -i wg0 -p tcp --dport 3306 -j ACCEPT
sudo iptables -I DOCKER-USER -i ens3 -p tcp --dport 3306 -j DROP
```

Exemplo para Redis:

```bash
sudo iptables -I DOCKER-USER -i wg0 -p tcp --dport 6379 -j ACCEPT
sudo iptables -I DOCKER-USER -i ens3 -p tcp --dport 6379 -j DROP
```

---

# 16. Regra conceitual

Para qualquer serviço interno:

```text
wg0  -> ALLOW
ens3 -> DROP
```

Exemplo:

```text
PostgreSQL
5432

wg0  -> ACCEPT
ens3 -> DROP
```

Isso cria uma espécie de "rede privada" para os serviços.

---

# 17. Serviços que podem ficar somente na VPN

Exemplos:

```text
PostgreSQL     5432
MySQL          3306
Redis          6379
Grafana        3000
Portainer      9000/9443
Painéis admin  portas específicas
APIs internas  portas específicas
SSH            22
```

A porta específica deve ser liberada somente quando necessário.

---

# 18. Serviços públicos

A arquitetura recomendada é deixar poucas portas abertas para a Internet.

Por exemplo:

```text
80/tcp       HTTP
443/tcp      HTTPS
51820/udp    WireGuard
```

O restante deve ser bloqueado por padrão.

---

# 19. Nginx

O Nginx pode ser o ponto de entrada público:

```text
Internet
   |
   +--> 80
   |
   +--> 443
         |
         v
       Nginx
         |
         +--> frontend
         |
         +--> backend
         |
         +--> outras aplicações
```

As aplicações internas podem ficar somente na rede Docker.

---

# 20. Portas Docker

Evitar publicar serviços internos desnecessariamente.

Exemplo menos desejável:

```yaml
ports:
  - "3000:3000"
```

Isso publica a porta no host.

Quando a aplicação só precisa ser acessada por outro container, é preferível usar a rede Docker interna.

Exemplo:

```yaml
expose:
  - "3000"
```

Ou simplesmente utilizar a rede Docker sem publicar a porta.

---

# 21. Quando publicar uma porta somente no localhost

Se uma aplicação precisa ser acessada somente localmente:

```yaml
ports:
  - "127.0.0.1:8084:84"
```

Isso significa:

```text
Internet -> 8084     BLOQUEADO
localhost -> 8084    PERMITIDO
```

Isso é diferente de:

```yaml
ports:
  - "8084:84"
```

que normalmente publica a porta para as interfaces do host.

---

# 22. Diferença entre acesso público e VPN

A arquitetura final desejada é:

```text
                         INTERNET
                            |
             +--------------+--------------+
             |              |              |
            :80           :443         :51820/UDP
             |              |              |
             +-------+------+              |
                     |                     |
                   NGINX                WireGuard
                                           |
                                        10.8.0.0/24
                                           |
                              +------------+------------+
                              |            |            |
                           PostgreSQL    MySQL        Redis
                             :5432       :3306        :6379
                             
                              SOMENTE VPN
```

---

# 23. Controle do firewall

A intenção é que o iptables seja a fonte de verdade.

Comandos úteis:

Ver regras de INPUT:

```bash
sudo iptables -L INPUT -n -v --line-numbers
```

Ver regras de FORWARD:

```bash
sudo iptables -L FORWARD -n -v --line-numbers
```

Ver regras do Docker:

```bash
sudo iptables -L DOCKER-USER -n -v --line-numbers
```

Ver regras em formato de comando:

```bash
sudo iptables -S
```

Ver regras NAT:

```bash
sudo iptables -t nat -L -n -v
```

---

# 24. Contadores do iptables

Os contadores são úteis para verificar se uma regra realmente está sendo utilizada.

Exemplo:

```bash
sudo iptables -L DOCKER-USER -n -v --line-numbers
```

Uma regra pode aparecer assim:

```text
ACCEPT  tcp  --  wg0  *  ... tcp dpt:5432
```

e outra:

```text
DROP    tcp  --  ens3 *  ... tcp dpt:5432
```

Os campos de pacotes e bytes ajudam a confirmar que o tráfego está passando por aquela regra.

---

# 25. Verificar WireGuard

Comando:

```bash
sudo wg show
```

É importante verificar:

```text
latest handshake
transfer
```

Se aparecer algo como:

```text
latest handshake: 10 seconds ago
```

o cliente está comunicando com o servidor.

---

# 26. Verificar a interface WireGuard

```bash
ip addr show wg0
```

Deve existir algo semelhante a:

```text
inet 10.8.0.1/24
```

---

# 27. Verificar portas abertas

Para descobrir quais serviços estão escutando:

```bash
sudo ss -lntup
```

Isso ajuda a identificar portas que estão realmente expostas no host.

---

# 28. Teste de segurança

Para cada serviço que deve ser somente VPN:

### Teste pela Internet

Tentar:

```text
IP_PUBLICO:5432
```

Resultado esperado:

```text
BLOQUEADO
```

### Teste pela VPN

Conectar o cliente ao WireGuard e testar:

```text
10.8.0.1:5432
```

ou o IP/host correspondente ao serviço.

Resultado esperado:

```text
PERMITIDO
```

---

# 29. Regra mental para novas portas

Sempre que surgir uma nova aplicação, decidir:

### Pública?

Se sim:

```text
Internet -> porta -> serviço
```

### Somente VPN?

Então:

```text
wg0 -> ACCEPT
ens3 -> DROP
```

### Somente entre containers?

Não publicar a porta no host.

---

# 30. Persistência das regras

As regras adicionadas diretamente com:

```bash
iptables -I
```

normalmente não devem ser consideradas permanentes após reboot.

Portanto, depois que todas as regras forem testadas, é necessário configurar a persistência.

**Não fazer isso antes de terminar os testes**, para evitar persistir uma configuração errada.

---

# 31. Segurança operacional

Antes de alterar firewall remotamente:

1. Manter uma sessão SSH aberta.
2. Fazer a alteração.
3. Testar imediatamente.
4. Confirmar que o SSH continua funcionando.
5. Somente depois abrir uma nova sessão.
6. Só então persistir as regras.

Nunca aplicar uma política de firewall inteira de uma vez sem uma sessão de recuperação.

---

# 32. Estado atual

O que já foi confirmado:

* WireGuard está funcionando.
* O servidor usa `10.8.0.1/24`.
* O cliente usa `10.8.0.2/32`.
* A interface VPN é `wg0`.
* A interface pública é `ens3`.
* UDP `51820` precisou ser liberado no `INPUT`.
* O ping para `10.8.0.1` funciona.
* O PostgreSQL `5432` foi configurado para ser acessível pela VPN.
* O acesso externo ao PostgreSQL foi bloqueado através da `DOCKER-USER`.

---

# 33. Próximos passos

A sequência recomendada é:

1. Confirmar todas as regras atuais.
2. Listar todas as portas publicadas pelo Docker.
3. Classificar cada porta:

   * pública;
   * somente VPN;
   * somente rede Docker.
4. Criar regras `DOCKER-USER` para os serviços privados.
5. Testar cada serviço pela VPN.
6. Testar cada serviço pela Internet.
7. Configurar persistência do iptables.
8. Revisar as regras após reboot.
9. Gerar uma nova chave privada do WireGuard, pois a chave anterior foi exposta.
10. Depois disso, configurar os demais clientes WireGuard.

---

# 34. Objetivo final

O servidor deverá seguir esta política:

```text
                    INTERNET
                       |
              +--------+--------+
              |        |        |
             80       443    51820/UDP
              |        |        |
              v        v        v
            NGINX    NGINX   WireGuard
                               |
                            10.8.0.0/24
                               |
                 +-------------+-------------+
                 |             |             |
              PostgreSQL     MySQL         Redis
                5432         3306          6379
                 |             |             |
                 +-------------+-------------+
                         SOMENTE VPN
```

Regra geral:

```text
Público:
80
443
51820/UDP

Privado:
5432
3306
6379
demais serviços administrativos
```

A filosofia da configuração é:

> **Negar por padrão, liberar explicitamente o necessário e usar a WireGuard como rede privada de administração e acesso aos serviços internos.**

```
```
