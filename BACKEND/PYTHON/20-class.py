# Orientação a Objetos (OOP)

class Veiculo:
    def __init__(self, fabricante,modelo):
        self.fabricante = fabricante #Atributos Publicos
        self.__modelo = modelo #Atributos Privados
        self.__num_registro = None # Sem dado inicial
    
    def movimentar(self):
        print('Movimentando')
    
    # Getters
    def get_info(self):
        print(f'fabricante: {self.fabricante}, modelo: {self.__modelo}')
        
    def get_num_registro(self):
        return self.__num_registro
        
    # Setters
    def set_num_registro(self, registro):
        self.__num_registro = registro
    
class Carro(Veiculo):
    def movimentar(self):
        print('Sou carro')

class Aviao(Veiculo):
    def __init__(self, fabricante,modelo, categoria):
        self.__categoria = categoria
        super().__init__(fabricante,modelo) # Herdando dados do construtor da classe Veiculo
        
    def get_categoria(self):
        return self.__categoria
    
    def set_categoria(self, categoria):
        self.__categoria = categoria
    
    def movimentar(self):
        print('Sou um avião')
        

if __name__ == '__main__':
    # meu_veiculo = Veiculo('Ford','Fiesta')
    
    meu_aviao = Aviao('Boeing','747','Turbo')
    meu_aviao.movimentar()
    print(meu_aviao.get_info())
    print(meu_aviao.set_categoria('NOVA'))
    print(meu_aviao.get_categoria())
    
    
    # meu_veiculo.fabricante = 'Fiat'    # print(meu_veiculo.fabricante) # Acesso atributo publico
   # print(meu_veiculo.__modelo) # Erro atributo privado
    # print(meu_veiculo.get_info())
    # meu_veiculo.set_num_registro('1234-3') # Setters
    # print(meu_veiculo.get_num_registro())
    
    # meu_carro = Carro('VW','Polo')
    # meu_carro.set_num_registro('1234-3') # Setters
    # print(meu_carro.get_num_registro())
    # print(meu_carro.movimentar())
