Entendi, você quer o mesmo CRUD mas pra regras **fora do Docker** — ou seja, pra serviços que rodam direto no host (não em container). Nesse caso você não mexe em `iptables`/`DOCKER-USER` nem em `after.rules`, usa o **UFW normal**, que é bem mais simples de gerenciar no dia a dia.

## CREATE — Adicionar regra

```bash
# Libera uma porta pra qualquer IP
sudo ufw allow 8080/tcp

# Libera uma porta só pra um IP específico
sudo ufw allow from SEU_IP to any port 8080 proto tcp

# Libera uma porta só pra uma rede
sudo ufw allow from 192.168.0.0/16 to any port 8080 proto tcp

# Bloqueia explicitamente uma porta
sudo ufw deny 8080/tcp
```

## READ — Listar regras

```bash
# Lista simples
sudo ufw status

# Lista numerada (importante pra deletar depois)
sudo ufw status numbered

# Lista detalhada
sudo ufw status verbose
```

## UPDATE — Atualizar regra

Assim como no `iptables`, o UFW não tem "editar" — você **remove e recria**:

```bash
sudo ufw status numbered      # acha o número da regra
sudo ufw delete 3             # remove
sudo ufw allow from NOVO_IP to any port 8080 proto tcp   # recria com o novo valor
```

## DELETE — Remover regra

```bash
# Remove pelo número (veja com status numbered antes)
sudo ufw delete 3

# Remove pela regra exata
sudo ufw delete allow 8080/tcp
sudo ufw delete allow from SEU_IP to any port 8080 proto tcp
```

## Diferença importante pro seu caso

| | UFW normal | iptables DOCKER-USER |
|---|---|---|
| Para que serve | Serviços no host (SSH, Nginx direto, etc.) | Containers Docker publicados via `-p` |
| Persiste no reboot? | **Sim, automaticamente** | Não, precisa `iptables-persistent` |
| Sintaxe | Mais simples (`ufw allow`) | Mais verbosa (`iptables -A`) |
| Onde fica salvo | `/etc/ufw/user.rules` (gerenciado sozinho) | Você tem que salvar manualmente |

Essa é a grande vantagem do UFW normal: você não precisa se preocupar em salvar nada, ele já persiste sozinho. É só pros containers Docker que a dor de cabeça do `iptables-persistent`/`after.rules` existe, por causa de como o Docker manipula as chains.
