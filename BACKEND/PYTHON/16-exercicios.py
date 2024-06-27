# Exercício Python: Calculadora de Operações Matemáticas com Condições e Laços

# Este programa pede ao usuário para inserir uma expressão matemática simples
# com dois números e um operador (+, -, *, /) e realiza a operação.
# O programa continua pedindo novas expressões até o usuário digitar 'sair'.

# Obter valores
# Selecionar operador
# Operar com operadores
# Realizar loops se usuario quizer


while True:
    primeiro_valor = int(input('Digite primeiro Valor: '))
    operador_selecionado = input('Digite o operador: ')
    segundo_valor = int(input('Digite Segundo Valor: '))
    resultado = 0
    if (operador_selecionado == '+'):
        resultado = primeiro_valor + segundo_valor
    if (operador_selecionado == '-'):
        resultado = primeiro_valor - segundo_valor
    if (operador_selecionado == '/'):
        resultado = primeiro_valor / segundo_valor
    if (operador_selecionado == '*'):
        resultado = primeiro_valor * segundo_valor
        
        
    print(f'O resultado da soma foi: {resultado}')
    
    continuacao = input('Deseja sair? Digite s ou n: [s|n]?')
    
    if(continuacao in 's'):
        break;        