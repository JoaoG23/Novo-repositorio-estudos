# Exception: Classe base para todas as exceções.
# ArithmeticError: Classe base para todos os erros que ocorrem em cálculos numéricos.
# OverflowError: Um cálculo excedeu o limite máximo de um tipo numérico.
# ZeroDivisionError: Lançada quando uma divisão ou módulo por zero é executada em tipos numéricos.
# ImportError: Lançada quando uma declaração de importação falha.
# NameError: Um identificador (nome) não foi encontrado no namespace local ou global.
# IOError: Ocorre quando uma operação de E/S, como ler ou escrever em um arquivo, falha.
# IndentationError: A indentação não foi aplicada corretamente.
# RecursionError: O interpretador detectou que a profundidade máxima de recursão foi excedida.
# TypeError: Lançada quando uma função ou operação é inválida para o tipo de dados especificado.

# Bloco try
# Bloco except
# Bloco finally
class NegativoError(Exception):
    def __init__(self):
        pass

n1 = int(input('Primeiro valor 1: '))
n2 = int(input('Primeiro valor 2: '))

try:
    if n2 < 0:
        raise NegativoError() # fOLLOW EXCPETION
    r = round(n1 / n2, 2)
except ZeroDivisionError:
    print(f'Erro, divisão por zero.')
else:
    print(f'Divisão: {r}')
finally:
    print(f'Divisão: resultado')
    
# Creating one exception