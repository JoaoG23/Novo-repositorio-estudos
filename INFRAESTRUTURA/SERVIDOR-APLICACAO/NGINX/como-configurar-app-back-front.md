---

## 🔀 Múltiplas APIs (Proxy por rota)

```nginx
# API 1
location /api1/ {
    proxy_pass http://localhost:3001;
}

# API 2
location /api2/ {
    proxy_pass http://localhost:3002;
}

# API 3
location /api3/ {
    proxy_pass http://localhost:3003;
}
```

---

## ⚡ Rate Limit (Controle de requisições)

### Criar zona de limite (global - dentro do http {})

```nginx
limit_req_zone $binary_remote_addr zone=api_limit:10m rate=5r/s;
```

* `5r/s` = 5 requisições por segundo por IP
* `10m` = memória para armazenar estados

---

### Aplicar limite na rota

```nginx
location /api/ {
    limit_req zone=api_limit burst=10 nodelay;
    proxy_pass http://localhost:3000;
}
```

### Parâmetros importantes:

* `burst=10` → permite até 10 requisições extras temporárias
* `nodelay` → não cria fila, bloqueia direto quando estoura

---

## ⏱️ Comportamento após estourar limite

* Nginx retorna:
  * `503 Service Unavailable` (padrão)
  * ou `429 Too Many Requests` (configurável)
* O desbloqueio acontece automaticamente com o tempo
  (baseado na taxa configurada, ex: 5r/s)

---

## 🔐 Limitando conexões simultâneas (anti-abuso)

### Criar zona

```nginx
limit_conn_zone $binary_remote_addr zone=conn_limit:10m;
```

### Aplicar

```nginx
location /api/ {
    limit_conn conn_limit 2;
    proxy_pass http://localhost:3000;
}
```

* `2` = máximo de conexões simultâneas por IP

---

## 🛡️ Proteção básica contra DDoS

Combinação recomendada:

```nginx
location /api/ {
    limit_req zone=api_limit burst=10 nodelay;
    limit_conn conn_limit 2;

    proxy_pass http://localhost:3000;
}
```

---

## 🧠 Boas práticas

* Combine:
  * `limit_req` (taxa)
  * `limit_conn` (conexões)
* Use firewall junto (ex: iptables, fail2ban)
* Configure CORS no backend (você já fez 👍)
* Use CDN/Proxy externo (Cloudflare) para proteção mais forte

---

## ✅ Resumo

| Controle   | Função                         |
| ---------- | -------------------------------- |
| limit_req  | Limita requisições por segundo |
| burst      | Permite picos temporários       |
| limit_conn | Limita conexões simultâneas    |
| proxy_pass | Redireciona para backend         |

---

🔥 Esse setup já te coloca num nível bem profissional de infra com Nginx.

```

Se quiser, posso te fazer uma versão **nível produção (com logs, gzip, cache e segurança)** — isso aí já vira padrão de empresa grande.
```
