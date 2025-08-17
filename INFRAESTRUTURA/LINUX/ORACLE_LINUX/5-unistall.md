Para desinstalar o Apache no Ubuntu 18.04, você pode usar o comando sudo apt remove --purge apache2 e, em seguida, sudo apt autoremove para remover pacotes órfãos. 
Passos detalhados:
Pare o serviço Apache:
Código

   sudo systemctl stop apache2
Este comando interrompe o serviço Apache, encerrando todas as conexões ativas e processos. 
Desinstale o pacote Apache:
Código

   sudo apt remove --purge apache2
O comando apt remove desinstala o pacote Apache. A opção --purge remove também os arquivos de configuração associados, garantindo uma remoção completa. 
Remova pacotes órfãos:
Código

   sudo apt autoremove
Este comando remove quaisquer pacotes que foram instalados como dependências do Apache e não são mais necessários. 
Verifique se o Apache foi removido:
Código

   sudo systemctl status apache2
Se o Apache foi removido com sucesso, o comando acima deverá retornar que o serviço não está em execução ou que não existe. 
Opcional:
Remova diretórios de configuração manualmente:
Se desejar, você pode remover manualmente diretórios de configuração específicos, como /etc/apache2, usando o comando sudo rm -rf /etc/apache2. No entanto, o uso do --purge na desinstalação com apt geralmente cuida disso.
Desative o serviço Apache:
Se você não pretende reinstalar o Apache, também pode desativar o serviço para que ele não seja iniciado automaticamente no boot: 
Código

   sudo systemctl disable apache2
Isso pode ser útil se você planeja usar outro servidor web no futuro. 