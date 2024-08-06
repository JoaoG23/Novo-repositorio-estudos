# How to make a lambda function

# lambda arguments: expression
# lambda x, y: x + y

# quadrado = lambda x: x**x

# for i in range(1, 11):
#     print(quadrado(i))

# par = lambda x: x % 2 == 0
# print(par(9))

# Função MAP()

# map(funcao, iteravél)

num = [1,2,3,4,5,6,7,8,9,10]
num_par = list(map(lambda x: x * 2, num))
# print(num_par) # Adicione o list para mostra no print os dados sem buffer

# Função FILTER()
# filter(funcao, iteravél)

numeros_impares = [1,2,3,4,5,6,7,8,9,10]
num_impar = list(filter(lambda x: x % 2 != 0, numeros_impares))
print(num_impar)

# Função REDUCE()

from functools import reduce

numeros = [1,2,3,4,5,6,7,8,9,10]
soma = reduce(lambda x, y: x + y, numeros)
print(soma)