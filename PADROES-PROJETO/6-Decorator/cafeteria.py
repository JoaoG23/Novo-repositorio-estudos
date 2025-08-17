from abc import ABC, abstractmethod

# Interface da bebida
class BebidaInterface(ABC):
    @abstractmethod
    def descricao(self) -> str:
        pass

    @abstractmethod
    def preco(self) -> int:
        pass

# Classe concreta base
class Cafe(BebidaInterface):
    def descricao(self):
        return "Café"

    def preco(self):
        return 2

# Decoradores concretos (sem classe base opcional)
class LeiteDecorator(BebidaInterface):
    def __init__(self, bebida: BebidaInterface):
        self.bebida = bebida

    def descricao(self):
        return f"{self.bebida.descricao()} + Leite"

    def preco(self):
        return self.bebida.preco() + 1

class ChocolateDecorator(BebidaInterface):
    def __init__(self, bebida: BebidaInterface):
        self.bebida = bebida

    def descricao(self):
        return f"{self.bebida.descricao()} + Chocolate"

    def preco(self):
        return self.bebida.preco() + 3

class OvomaltineDecorator(BebidaInterface):
    def __init__(self, bebida: BebidaInterface):
        self.bebida = bebida

    def descricao(self):
        return f"{self.bebida.descricao()} + Ovomaltine"

    def preco(self):
        return self.bebida.preco() + 10

# Uso prático
def fazer_bebida(nome_cliente: str):
    bebida = Cafe()
    bebida = OvomaltineDecorator(bebida)
    bebida = ChocolateDecorator(bebida)
    bebida = LeiteDecorator(bebida)

    print(f"Bebida de {nome_cliente}: {bebida.descricao()}")
    print(f"Preço total: R$ {bebida.preco()},00")

# Exemplo
fazer_bebida("João")
