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
yum install nginx -y
systemctl enable nginx
systemctl start nginx
```

Liberar firewall:

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

---

# ✅ Resultado

Servidor online
Domínio apontando corretamente
HTTPS automático com renovação

Infraestrutura pronta para deploy 🚀
