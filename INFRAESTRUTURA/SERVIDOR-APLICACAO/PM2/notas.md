## How to init PM2

npm install pm2 -g
npm install pm2-windows-startup -g
pm2-startup install
pm2 start myApp.js --name mySuperApp
pm2 save
reboot
pm2 ls


## Como instalar com permissao de administrador
escreva um lista enumerada das etapas subir o projeto no pm2

1. entrar como terminal via cmd como administrador; 
2. executar o comando para iniciar o projeto;

## LINUX 

npm install pm2 -g
sudo pm2 startup

