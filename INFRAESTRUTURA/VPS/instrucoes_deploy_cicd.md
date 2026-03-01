# 🚀 Deploy APPCon (Esteira CI/CD - GitHub Actions)

Guia para configurar e utilizar a esteira de automação (Pipeline) do APPCon via GitHub Actions, garantindo deploy automático a cada push na branch principal.

---

# 🔐 1. Configurar Secrets no GitHub

Para que a esteira funcione, você deve cadastrar as seguintes variáveis em **Settings > Secrets and variables > Actions** no seu repositório:

### Credenciais Docker Hub

- `DOCKER_USERNAME`: Seu usuário do Docker Hub.
- `DOCKER_PASSWORD`: Sua senha ou Personal Access Token do Docker Hub.

### Variáveis de Ambiente (Frontend)

- `ENV_FRONTEND`: Conteúdo completo do arquivo `.env.prod`. **Importante**: As variáveis devem começar com `VITE_`.
  - Exemplo: `VITE_ENDPOINT_API=https://jgsmallsolutions.com.br/api/v1`

* `SSH_HOST`: IP do seu servidor (ex: `187.77.228.23`).
* `SSH_PORT`: Porta SSH (padrão `22`).
* `SSH_USERNAME`: Usuário de acesso (ex: `root` ou `ubuntu`).
* `SSH_PRIVATE_KEY`: Sua chave privada SSH para acesso sem senha.

---

# ⚙️ 2. Como Funciona a Esteira

O arquivo de configuração está localizado em `.github/workflows/main.yml`. O fluxo segue estes passos:

1. **Trigger**: Disparado automaticamente ao realizar um `push` na branch `main`.
2. **Build & Push (Backend)**: O GitHub Actions constrói a imagem Docker da API e envia para o Docker Hub.
3. **Build (Frontend)**: O GitHub Actions instala as dependências (Node.js) e gera o build estático (`dist`) do React **sem utilizar Docker**.
4. **Transferência (Frontend)**: Os arquivos do `dist` são enviados via SCP diretamente para a pasta `/var/www/appcon` no servidor.
5. **Deploy (Backend)**: O GitHub se conecta via SSH ao servidor e reinicia o container da API com a nova imagem.

---

# 📂 3. Preparação no Servidor

A esteira espera que o ambiente no servidor esteja preparado:

```bash
# Pasta para os arquivos estáticos do Frontend
sudo mkdir -p /var/www/appcon
sudo chown -R $USER:$USER /var/www/appcon

# Pasta para a orquestração do Backend
mkdir -p /home/ubuntu/apps/appcon
cd /home/ubuntu/apps/appcon
touch .env-backend
```

> [!IMPORTANT]
> Os arquivos `.env-backend` devem ser configurados manualmente no servidor, pois contêm dados sensíveis que não devem estar no Git.

---

# 🌐 4. Deploy do Frontend (Automático via CI/CD)

O deploy do frontend agora é automatizado pela esteira, seguindo a lógica:

1. O build é gerado no ambiente do GitHub.
2. Os arquivos são movidos para o servidor.
3. O Nginx do host (conforme o guia de Git) serve os arquivos em `/var/www/appcon`.

---

# 🛠️ 5. Rodar Migrations e Seeds

Após o deploy automático completar, se houver alterações no banco de dados, execute:

```bash
# Acessar a pasta do deploy
cd /home/ubuntu/apps/appcon

# Rodar migrations (Prisma)
docker exec -it api-appcon-container npx prisma db push --schema ./prisma/schema.prisma

# Rodar seeds
docker exec -it api-appcon-container npm run db:seed
```

---

npm run build
sudo cp -r dist/\* /var/www/appcon/

```

---

# ✅ 6. Monitoramento

Você pode acompanhar o status do deploy na aba **Actions** do seu repositório no GitHub.

- **Verde**: Deploy realizado com sucesso.
- **Vermelho**: Erro no build ou na conexão SSH (verifique os logs no GitHub).

---

# 🎉 Pronto

Com a esteira configurada, basta você commitar suas alterações e enviá-las para o GitHub:
`git push origin main`

O sistema será atualizado automaticamente no servidor.
```
