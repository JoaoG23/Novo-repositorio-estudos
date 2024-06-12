numero = 1
nome = None

while( numero <= 1 ):
    print(numero)
    numero += 1
    
# Laco infinito

novo_nome = None

while True: 
    print('Digite o seu nome, ou x ou X para parar')
    novo_nome = input()
    if novo_nome == 'x' or novo_nome == 'X':
        break # Finaliza o laço imediatamente
    print(f'Bem vindo , {novo_nome}')
print('Até logo!')


lista = [1,2,4]

for item in lista: 
    print(f'item {item}')
    

# range(valor_inicial, valor_final, incremento ex: 2 ou decremento -2)
for numero in range(1, 11): 
    print(f'numero {numero}')
    
    
pedras = ('Rubi', 'Esmeralda', "Quartzo")

for pedra in pedras:
    if pedra == 'Quartzo':
        continue # Somente tira a interação atual ou pula 
    print(pedra) 
    # Rubi
    # Esmeralda