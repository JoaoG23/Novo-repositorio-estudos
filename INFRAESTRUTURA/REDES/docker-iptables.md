Isso confirma 100% o diagnóstico. Repara: as regras 3, 4 e 5 (as que filtram porta 84) estão **zeradas o tempo todo** — `0 pkts` nas três, em todas as capturas. Enquanto isso, a regra 2 (conexões estabelecidas) e a regra 6 (RETURN geral) continuam subindo a cada teste que você faz. Ou seja, todo o seu tráfego de teste está passando batido pela regra 6, sem nunca ser avaliado pelas regras de filtro — exatamente porque, como expliquei, quando o pacote chega nessa chain ele já foi traduzido de porta 84 para porta **80** pelo DNAT do Docker.

Você ainda não rodou a correção que te passei. Vamos aplicar agora:

````bash
ago    Up 13 days   0.0.0.0:84->80/tcp, :::84->80/tcp           meu-nginx
````
## 1. Confirme o IP interno do container

```bash
docker inspect meu-nginx | grep IPAddress
```

Deve confirmar `172.17.0.2` (ou te dar o IP atual, caso tenha mudado).

## 2. Aplique a correção (filtrando pela porta 80 traduzida, não pela 84)

```bash
sudo iptables -F DOCKER-USER
sudo iptables -A DOCKER-USER -i lo -j RETURN
sudo iptables -A DOCKER-USER -m state --state ESTABLISHED,RELATED -j RETURN
sudo iptables -A DOCKER-USER -d 172.17.0.2 -p tcp --dport 80 -s 45.172.80.31 -j RETURN
sudo iptables -A DOCKER-USER -d 172.17.0.2 -p tcp --dport 80 -s 192.168.0.0/16 -j RETURN
sudo iptables -A DOCKER-USER -d 172.17.0.2 -p tcp --dport 80 -j DROP
sudo iptables -A DOCKER-USER -j RETURN
```

(troque o IP `172.17.0.2` se o `docker inspect` te der outro)

## 3. Confirme que a chain ficou assim

```bash
sudo iptables -L DOCKER-USER -n -v --line-numbers
```

## 4. Teste de novo

- Do seu IP liberado (`45.172.80.31`): deve continuar acessando `:84` normalmente.
- Do celular no 4G (IP diferente): deve dar timeout / conexão recusada agora.

Roda esses passos e me manda o resultado do `iptables -L DOCKER-USER` de novo — dessa vez eu espero ver os contadores das regras 3/4/5 subindo em vez da regra 6.

Remover regras:
Depende se você quer remover **só a regra da porta 84** (mantendo outras regras que já existam na chain, tipo a da porta 87) ou se quer limpar tudo. Vou te mostrar as duas formas.

## Opção 1: Remover regra específica por número de linha (mais seguro)

### Primeiro veja a lista numerada:

```bash
sudo iptables -L DOCKER-USER -n -v --line-numbers
```

Digamos que apareça algo assim:
```
num   pkts bytes target     prot opt in     out     source               destination
1        0     0 RETURN     all  --  lo     *       0.0.0.0/0            0.0.0.0/0
2      142 28724 RETURN     all  --  *      *       0.0.0.0/0            0.0.0.0/0            state RELATED,ESTABLISHED
3        0     0 RETURN     tcp  --  *      *       45.172.80.31         172.17.0.2           tcp dpt:80
4        0     0 RETURN     tcp  --  *      *       192.168.0.0/16       172.17.0.2           tcp dpt:80
5        0     0 DROP       tcp  --  *      *       0.0.0.0/0            172.17.0.2           tcp dpt:80
6        0     0 RETURN     tcp  --  *      *       SEU_IP               172.17.0.3           tcp dpt:3000
...
```

Remova da regra de **maior número para o menor** (importante: se remover a de cima primeiro, os números das de baixo mudam e você erra o alvo):

```bash
sudo iptables -D DOCKER-USER 5
sudo iptables -D DOCKER-USER 4
sudo iptables -D DOCKER-USER 3
```

(ajuste os números conforme o que aparecer no seu `-L --line-numbers`, já que pode ter mudado com a regra da porta 87 que você adicionou)

## Opção 2: Recriar a chain inteira sem a porta 84

Se preferir simplesmente reescrever tudo do zero, sem a porta 84, faz como antes com `-F` e só não inclui as linhas da 84:

```bash
sudo iptables -F DOCKER-USER
sudo iptables -A DOCKER-USER -i lo -j RETURN
sudo iptables -A DOCKER-USER -m state --state ESTABLISHED,RELATED -j RETURN

# só a porta 87 fica
sudo iptables -A DOCKER-USER -d 172.17.0.2 -p tcp --dport 3000 -s SEU_IP -j RETURN
sudo iptables -A DOCKER-USER -d 172.17.0.2 -p tcp --dport 3000 -s 192.168.0.0/16 -j RETURN
sudo iptables -A DOCKER-USER -d 172.17.0.2 -p tcp --dport 3000 -j DROP

sudo iptables -A DOCKER-USER -j RETURN
```

## Confirme

```bash
sudo iptables -L DOCKER-USER -n -v --line-numbers
```

Boa, faz sentido pensar assim — CRUD é uma boa forma de organizar isso na cabeça. Aqui vai o mapa completo das operações no `iptables`, especificamente pra chain `DOCKER-USER` que você está usando:

## CREATE — Adicionar regra

```bash
# Adiciona no final da chain
sudo iptables -A DOCKER-USER -d 172.17.0.2 -p tcp --dport 80 -s SEU_IP -j RETURN

# Insere em posição específica (ex: na posição 3, empurrando as demais pra baixo)
sudo iptables -I DOCKER-USER 3 -d 172.17.0.2 -p tcp --dport 80 -s SEU_IP -j RETURN
```

## READ — Listar regras

```bash
# Lista com números de linha, contadores de pacotes/bytes
sudo iptables -L DOCKER-USER -n -v --line-numbers

# Lista no formato de comando (útil pra copiar/reusar)
sudo iptables -S DOCKER-USER
```

## UPDATE — Atualizar regra existente

O `iptables` não tem um "editar" de verdade — você **substitui** a regra pela nova, na mesma posição:

```bash
# Substitui a regra na posição 3 por uma nova
sudo iptables -R DOCKER-USER 3 -d 172.17.0.2 -p tcp --dport 80 -s NOVO_IP -j RETURN
```

Na prática, pro seu caso de IP dinâmico, é mais simples fazer delete + create (ou o F + recriar tudo, como fizemos antes) do que usar o `-R`.

## DELETE — Remover regra

```bash
# Remove pelo número da linha (veja com -L --line-numbers antes)
sudo iptables -D DOCKER-USER 3

# Remove pela regra exata (precisa digitar igual ao que foi criado)
sudo iptables -D DOCKER-USER -d 172.17.0.2 -p tcp --dport 80 -s SEU_IP -j RETURN

# Limpa a chain inteira
sudo iptables -F DOCKER-USER
```

## Resumo rápido

| Operação | Comando |
|---|---|
| Create | `-A` (append) ou `-I` (insert em posição) |
| Read | `-L` (listar) ou `-S` (formato comando) |
| Update | `-R` (replace, precisa saber a posição) |
| Delete | `-D` (por número ou por regra exata) |

## Um lembrete importante

Tudo isso que fizemos até agora é **temporário** — some no reboot. Já que você vai gerenciar essas regras ativamente (adicionar porta 87, trocar IPs, remover a 84, etc.), depois de cada mudança que você quiser manter permanente, rode:

```bash
sudo apt install iptables-persistent   # só na primeira vez
sudo netfilter-persistent save
```
