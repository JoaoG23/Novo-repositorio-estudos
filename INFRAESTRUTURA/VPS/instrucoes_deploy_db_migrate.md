

ATENCAO ISSO é somente se quiser subir frontend com docker

Como migrar em /frontend

docker run -d --name frontend-nginx -p 80:80 -v "$(pwd)/dist:/usr/share/nginx/html" -v "$(pwd)/nginx/nginx.config:/etc/nginx/conf.d/default.conf" nginx:alpine

Inicie o api-appcon-container em modo -d

SO USE O ESSE COMANDO

em seguida.

docker exec -it api-appcon-container npx prisma db push --schema ./prisma/schema.prisma
