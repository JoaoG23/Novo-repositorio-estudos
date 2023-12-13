## How to init PM2

npm install pm2 -g
npm install pm2-windows-startup -g
pm2-startup install
pm2 start myApp.js --name mySuperApp
pm2 save
reboot
pm2 ls