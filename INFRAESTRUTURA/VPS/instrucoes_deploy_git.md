# 🚀 Deploy APPCon (Git + Docker Compose)

Guia rápido para realizar o deploy do sistema APPCon carregando os arquivos via Git, utilizando Docker para o backend/banco e servindo o frontend de forma estática pelo Nginx do host.

---

# 🔐 1. Conectar no servidor

```bash
ssh root@187.77.228.23
```

---

# 📂 2. Baixar a aplicação via Git

Em vez de enviar os arquivos via FTP, utilize o Git para clonar o repositório diretamente no servidor.

```bash
# Navegue até a pasta de destino
mkdir -p /appcon
cd /appcon

# Clone o repositório (substitua pelos seus dados)
git clone https://github.com/usuario/repositorio.git .

# Configurar o token de acesso (se necessário)
git remote set-url origin https://SEU_TOKEN@github.com/usuario/repositorio.git

# Atualizar para a versão mais recente
git pull origin main
```

---

# 🗄️ 3. Backend (Nest + Banco)

## Configurar variáveis de ambiente

Edite o `.env` do backend e do banco:

- `./db/.env`: Credenciais do Postgres.
- `./backend/.env`: Credenciais do banco, secrets JWT e URLs.

---

## Subir serviços via Docker

Iniciaremos apenas o banco de dados e a API via Docker.

```bash
cd /appcon
docker-compose up -d db backend
```

---

## Rodar Migrations e Seeds

```bash
# Sincronizar schema do banco
docker exec -it api-appcon-container npx prisma db push --schema ./prisma/schema.prisma

# Rodar seeds
docker exec -it api-appcon-container npm run db:seed
```

---

# 🌐 4. Frontend (React)

## Build do frontend

Diferente da API, o frontend será compilado e servido diretamente pelo Nginx do servidor para melhor performance.

```bash
cd /appcon/frontend
npm install
npm run build
```

---

## Mover build para pasta do servidor

```bash
# Garanta que a pasta existe
sudo mkdir -p /var/www/appcon

# Copie os arquivos gerados
sudo cp -r dist/* /var/www/appcon/
```

---

# ⚙️ 5. Configurar Nginx

Arquivo: `/etc/nginx/sites-enabled/default`

Configuração para servir o frontend estático e fazer proxy para a API Docker:

```nginx
server {

    server_name jgsmallsolutions.com.br www.jgsmallsolutions.com.br;

    # Frontend React (Arquivos Estáticos)
    location / {
        root /var/www/appcon;
        index index.html;
        try_files $uri $uri/ /index.html;
    }

    # Backend Nest API (Proxy para Docker na porta 3000)
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

# 🔄 6. Reiniciar Nginx

```bash
nginx -t
systemctl reload nginx
```

---

# ✅ 7. Testar sistema

- **Frontend**: `https://jgsmallsolutions.com.br`
- **API**: `https://jgsmallsolutions.com.br/api/v1`

---

# 🎉 Pronto

Sistema rodando com:

- Código sincronizado via Git
- Banco e API em containers Docker
- Frontend servido de forma estática (alta performance)
- SSL ativo

Deploy concluído.
