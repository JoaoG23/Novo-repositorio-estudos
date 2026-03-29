# 🌐 Guia Completo — VPS, Domínio e SSL (Apache ou Nginx)

Este guia cobre o fluxo completo:
**Compra → VPS → DNS → Web Server → HTTPS**

---

# 1️⃣ Comprar infraestrutura

### ✔ Comprar VPS

Escolha um provedor (Hostinger, DigitalOcean, AWS, etc.)

Requisitos mínimos:

* 1 vCPU
* 1GB RAM
* Linux (AlmaLinux, Rocky, Ubuntu ou Debian)

---

### ✔ Comprar domínio

Exemplos:

* Registro.br
* Hostinger
* GoDaddy
* Cloudflare

---

# 2️⃣ Iniciar VPS

Acesse via SSH:

```bash
ssh root@IP_DA_VPS
```

Atualize o sistema:

```bash
yum update -y
```

(ou `apt update && apt upgrade -y` no Ubuntu/Debian)

---

# 3️⃣ Descobrir IP público da VPS

```bash
curl -4 ifconfig.me
```

Guarde o IP retornado.

---

# 4️⃣ Configurar DNS do domínio

No painel DNS do domínio, criar:

![1772882104276](image/como-configurar-uma-vps/1772882104276.png)

```
A     @      IP_DA_VPS
A     www    IP_DA_VPS
```

Aguardar propagação (5–30 min).

Testar:

```bash
ping seudominio.com
```

Se retornar o IP da VPS, está correto.

---

# 5️⃣ Instalar servidor web

## 🔹 Opção A — Nginx (recomendado)

```bash
sudo apt update
sudo apt install nginx -y
sudo ufw allow 'Nginx Full'
systemctl status nginx

--- Caso não funcione

systemctl enable nginx
systemctl start nginx
```

Liberar firewall (opcional):

```bash
firewall-cmd --permanent --add-service=http
firewall-cmd --permanent --add-service=https
firewall-cmd --reload
```

Criar site:

```bash
mkdir -p /var/www/site
echo "Servidor funcionando" > /var/www/site/index.html
```

Configurar virtual host:

```bash
nano /etc/nginx/conf.d/site.conf
```

Conteúdo:

```
server {
    listen 80;
    server_name seudominio.com www.seudominio.com;

    root /var/www/site;
    index index.html;
}
```


Recarregar:

```bash
nginx -t
systemctl reload nginx
```

Abrir no navegador → deve aparecer a página.

---

## 🔹 Opção B — Apache

```bash
yum install httpd -y
systemctl enable httpd
systemctl start httpd
```

Criar site:

```bash
mkdir -p /var/www/site
echo "Servidor funcionando" > /var/www/site/index.html
```

Criar VirtualHost:

```bash
nano /etc/httpd/conf.d/site.conf
```

Conteúdo:

```
<VirtualHost *:80>
    ServerName seudominio.com
    ServerAlias www.seudominio.com
    DocumentRoot /var/www/site
</VirtualHost>
```

Reiniciar:

```bash
systemctl restart httpd
```

---

# 6️⃣ Instalar Certbot (SSL)

```bash
yum install certbot -y
```

### Para Nginx

```bash
yum install python3-certbot-nginx -y
certbot --nginx
```

### Para Apache

```bash
yum install python2-certbot-apache -y
certbot --apache
```

Escolha o domínio quando solicitado.

Certbot irá:

* gerar certificado
* configurar HTTPS automático
* redirecionar HTTP → HTTPS

---

Coloque o dominio:

    seudominio.com www.seudominio.com

    

# 7️⃣ Renovação automática do SSL

Adicionar no cron:

```bash
echo "0 0,12 * * * root python -c 'import random, time; time.sleep(random.random()*3600)' && certbot renew" | sudo tee -a /etc/crontab > /dev/null
```

Testar renovação:

```bash
certbot renew --dry-run
```

---

# 8️⃣ Verificações finais

### Checar DNS

```bash
dig seudominio.com
```

### Checar HTTPS

Abrir no navegador:

```
https://seudominio.com
```
Se aparecer 🔒 cadeado → SSL ativo.
# 9️⃣ Configurar proxy reverso

```nginx

server {

    server_name seudominio.com www.seudominio.com;

    # ================================
    # FRONTEND REACT
    # ================================
    location / {
        root /var/www/appcon;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # ================================
    # BACKEND NEST API
    # ================================
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_cache_bypass $http_upgrade;
    }

    # Certbot challenge (mantém)
    location ~ /.well-known/acme-challenge {
        allow all;
        root /var/www/html;
    }

    # SSL (mantém tudo isso)
    listen [::]:443 ssl ipv6only=on;
    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/seudominio.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/seudominio.com/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    if ($host = www.seudominio.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = seudominio.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    listen 80;
    listen [::]:80;
  
    server_name seudominio.com www.seudominio.com;
    return 404; # managed by Certbot
}

```
Recarregar:

```bash
nginx -t
systemctl reload nginx
```

### Obs: Caso queira um configuração sem SSL

Basta remover as linhas que começam com `ssl_` e `listen [::]:443 ssl ipv6only=on; listen 443 ssl;` 
e também o bloco `server` que começa com `if ($host = www.seudominio.com)`. 

```nginx

server {
    listen 80;
    server_name 192.168.0.100;

    # ================================
    # FRONTEND REACT
    # ================================
    location / {
        root /var/www/appcon;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # ================================
    # BACKEND NEST API
    # ================================
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_cache_bypass $http_upgrade;
    }

    # Sem SSL, sem certificação, tudo HTTP
}

```

# ✅ Resultado

Servidor online
Domínio apontando corretamente
HTTPS automático com renovação

Infraestrutura pronta para deploy 🚀
