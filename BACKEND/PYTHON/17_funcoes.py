# Funções em Python
# Modularização, Reútilização, Legibilidade

# def <nome_funcao>([argumentos]):
#     <instrucoes>

def mensagem():
    print('Função mensagem()')
    print('Aula de python')
    
mensagem()

# # Função com argumentos
# def somar(n1, n2):
#     return n1 + n2

# soma = somar(1,2)
# print(soma)

def divisao(n1, n2):
    if n2 != 0:
        return n1 / n2
    else:
        return 'Erro'
    

## Quando um outro arquivo importa-lo a função deve ser chamada
if __name__ == '__main__':
    divisao(6,0)