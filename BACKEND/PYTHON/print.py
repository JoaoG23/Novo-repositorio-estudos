# Sintaxe:
# print(objetos, argumentos)

mensagem = "Função print()"
print(mensagem)
print('Aula de python')


# Argumentos Possicionais

nome = 'Teste'
print('Teste -', nome)
print('Concat'+ nome)
print('Print sem quebra de linha', end='')
print('Novo')


# Intepolação
nome2 = 'Maria'
idade = 39

msg_formatada = 'O nome dela é {0} e ela tem {1} anos'.format(nome, idade)
msg_formatada2 = f'O nome dela é {nome2} e ela tem {idade} anos'
print(msg_formatada2)

# Float

valor = 102.201
print(f'Valor é \'{valor:.1f}\'')