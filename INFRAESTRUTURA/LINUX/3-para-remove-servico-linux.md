Execute a lista de comando abaixo

1. systemctl stop [servicename]
2. chkconfig [servicename] off OR for newer systems systemctl disable [servicename]
2. sudo rm /etc/systemd/system/teste.service
3. systemctl daemon-reload
<!-- 4.systemctl reset-failed -->