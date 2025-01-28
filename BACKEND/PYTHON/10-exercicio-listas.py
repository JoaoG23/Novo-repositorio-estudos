# Crie um script que peça para o usuário digitar o nome de 5 bebidas favoritas dele, armazenando esses valores em uma lista.
# Na sequência, exiba na tela os elementos da lista em ordem alfabética, um por linha, usando um laço de repetição for.

bebidas = []

for bebida in range(5):
    bebida_recebida = input('Bebida favorita: ')
    
    if bebida_recebida.lower() == 'x':
        print('Finaliza a quantidade de bebidas favoritas')
        break
    bebidas.append(bebida_recebida)
    
    if bebida_recebida.lower() == 'r':
        a_remover = input('Digite o nome da bebida remover: ')
        
        if bebidas.index(a_remover) > 0:
            removida =bebidas.pop(bebidas.index(a_remover))
            print(f'Bebida removida com sucesso {removida}')
        
bebidas_organizadas = sorted(bebidas)
    
for bebida in bebidas_organizadas:
    print(bebida)


# Se nota estive N = Tem que emiti-lá
# Se não estiver = N , deve ver se email foi enviado se email = N, então envia-lo