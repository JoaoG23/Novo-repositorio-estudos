# 🚀 Deploy APPCon (Backend + Frontend + Nginx + SSL)

Guia rápido para subir o sistema APPCon em VPS com Nginx e HTTPS.

---

# 🔐 1. Conectar no servidor

```bash
ssh root@187.77.228.23
```

---

# 🗄️ 2. Backend (Nest + Banco)

## Upload do backend via SFTP

Envie a pasta do backend para o servidor.

Exemplo destino:

```
/tmp/appcon/backend
```

---

## Subir banco via Docker

```bash
cd /appcon
docker-compose up -d db
```

---

## Configurar variáveis de ambiente

Edite o `.env` do backend com:

* credenciais do banco
* porta da API
* secrets JWT
* URLs do frontend

---

## Iniciar backend

```bash
docker-compose up -d backend
```

---

## Rodar migrations

Siga instruções do arquivo:

```
instrucoes_deploy_db_migrate.md
```

---

## Rodar seeds

```bash
docker exec -it api-appcon-container npm run db:seed
```

Backend estará rodando em:

```
http://localhost:3000
```

---

# 🌐 3. Frontend (React)

## Build do frontend

No servidor ou local:

```bash
cd frontend
npm install
npm run build
```

---

## Enviar build para o servidor

```bash
scp -r dist/* root@187.77.228.23:/var/www/appcon/
```
ou

```bash
sudo mv -f frontend/dist/* /var/www/appcon/
```

---

# ⚙️ 4. Configurar Nginx

Arquivo:

```
/etc/nginx/sites-enabled/default
```

Configuração:

```nginx
server {

    server_name jgsmallsolutions.com.br www.jgsmallsolutions.com.br;

    # Frontend React
    location / {
        root /var/www/appcon;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # Backend Nest API
    location /api/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_cache_bypass $http_upgrade;
    }

    # Certbot challenge
    location ~ /.well-known/acme-challenge {
        allow all;
        root /var/www/html;
    }

    listen 443 ssl;
    ssl_certificate /etc/letsencrypt/live/jgsmallsolutions.com.br/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/jgsmallsolutions.com.br/privkey.pem;
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
}

server {
    listen 80;
    server_name jgsmallsolutions.com.br www.jgsmallsolutions.com.br;
    return 301 https://$host$request_uri;
}
```

---

# 🔄 5. Reiniciar Nginx

```bash
nginx -t
systemctl reload nginx
```

---

# ✅ 6. Testar sistema

Frontend:

```
https://jgsmallsolutions.com.br
```

API:

```
https://jgsmallsolutions.com.br/api/v1
```

---

# 🎉 Pronto

Sistema rodando com:

* SSL ativo
* Frontend estático rápido
* Backend via proxy reverso
* Banco via Docker

Deploy concluído.
