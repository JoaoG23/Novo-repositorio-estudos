# Composição

# Observable/Subject 
# Observer
# Interface

from abc import ABC, abstractmethod
from typing import List

# Primeiro criar uma interface observer
class EstacaoMeteorologicaObserver(ABC):
    @abstractmethod
    def atualizar(self, temperatura: float, umidade: float, pressão: float):
        pass

# Segundo criar uma classe observer que implementa a interface (observer)
class PainelSmartphone(EstacaoMeteorologicaObserver):
    def atualizar(self, temperatura: float, umidade: float, pressão: float):
        print(f"Painel Smartphone: Temperatura: {temperatura}°C, Umidade: {umidade}%, Pressão: {pressão} hPa")

class PainelLED(EstacaoMeteorologicaObserver):
    def atualizar(self, temperatura: float, umidade: float, pressão: float):
        print(f"Painel LED: Temperatura: {temperatura}°C, Umidade: {umidade}%, Pressão: {pressão} hPa")

class PainelTV(EstacaoMeteorologicaObserver):
    def atualizar(self, temperatura: float, umidade: float, pressão: float):
        print(f"Painel TV: Temperatura: {temperatura}°C, Umidade: {umidade}%, Pressão: {pressão} hPa")

"""
Terceiro criar uma classe observable/subject ou alterar a classe existente
1- Adicionar array ou lista de observadores 
2- Implementar metodos para adicionar e remover observadores
3- Implementar metodo para notificar observadores
4- Adicionar no metodo principal para notificar os observadores
"""
class EstacaoMeteorologicaObservable:
    def __init__(self):
        self._temperatura = None
        self._umidade = None
        self._pressao = None
        self._observadores: List[EstacaoMeteorologicaObserver] = [] # 1

    def atualizar_meteorologia(self, temperatura, umidade, pressao):
        if self._temperatura != temperatura or self._umidade != umidade or self._pressao != pressao:
            self._temperatura = temperatura
            self._umidade = umidade
            self._pressao = pressao
            self.notificar_observadores() # 4

    def notificar_observadores(self): # 3
        for observador in self._observadores:
            observador.atualizar(self._temperatura, self._umidade, self._pressao)

    def adicionar_observador(self, observador: EstacaoMeteorologicaObserver): # 2
        self._observadores.append(observador)

    def remover_observador(self, observador: EstacaoMeteorologicaObserver): # 2
        self._observadores.remove(observador)

estacao_meteorologica = EstacaoMeteorologicaObservable()

# Adicionar observadores a estacao meteorologica
estacao_meteorologica.adicionar_observador(PainelSmartphone())
estacao_meteorologica.adicionar_observador(PainelLED())
estacao_meteorologica.adicionar_observador(PainelTV())

# Chamar o metodo atualizar meteorologia para notificar os observadores
estacao_meteorologica.atualizar_meteorologia(22, 60, 1013)