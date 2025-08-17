# 🧪 Exercício – Sistema de Notificações
# Implemente um sistema de envio de notificações que pode ser estendido com funcionalidades extras como log, 
# criptografia e reenvio automático, usando o padrão Decorator.

# Requisitos:
# Crie uma interface NotificacaoInterface com o método:
# enviar(mensagem: str) -> None
# Crie uma classe concreta:
# NotificacaoBasica: apenas imprime a mensagem no console:
# print(f"Enviando mensagem: {mensagem}")
# Implemente os seguintes decoradores:
# LogDecorator: antes de enviar, imprime: Log: mensagem a ser enviada
# CriptografiaDecorator: transforma a mensagem em uma forma simples de "criptografia" (ex: inverter o texto) antes de enviar.
# ReenvioDecorator: envia a mensagem duas vezes (como simulação de reenvio automático)


from abc import ABC, abstractmethod
from typing import override

class NotificacaoInterface(ABC):
    @abstractmethod
    def enviar(self, mensagem: str) -> None:
        pass

class NotificacaoBasica(NotificacaoInterface):
    def enviar(self, mensagem: str) -> None:
        return(f"Enviando mensagem: {mensagem}")
        
class LogDecorator(NotificacaoInterface):
    
    def __init__(self, notification: NotificacaoInterface):
        self.notification = notification
        
    def enviar(self, mensagem: str) -> None:
        with open("./log.txt", "a") as log_file:
            log_file.write(f"Log: {mensagem}\n")
        return self.notification.enviar(mensagem=mensagem)
    
class CriptografiaDecorator(NotificacaoInterface):
    
    def __init__(self, notification: NotificacaoInterface):
        self.notification = notification
        
    def enviar(self, mensagem: str) -> None:
        return self._criptografar(self.notification.enviar(mensagem=mensagem))
    
    @staticmethod
    def _criptografar(mensagem: str) -> str:
        return ''.join([chr(ord(c) + 3) for c in mensagem])
    
class ReenvioDecorator(NotificacaoInterface):
    
    def __init__(self, notification: NotificacaoInterface):
        self.notification = notification
        
    def enviar(self, mensagem: str) -> None:
        return self.notification.enviar(mensagem=mensagem)
        
        

notificacao = NotificacaoBasica()
notificacao = ReenvioDecorator(notificacao)
notificacao = CriptografiaDecorator(notificacao)
notificacao = LogDecorator(notificacao)

print(notificacao.enviar("Olá, mundo!"))
