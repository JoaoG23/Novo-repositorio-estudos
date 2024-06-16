# String ela são imutaveis

nome = 'João'
letra = nome[2]

print(letra)
print(len(nome))
print(nome + ' silva')

# Separando uma string

frase = 'Vamos aprender playstation 5'
palavras_separada = frase.split()

print(palavras_separada)

for palavra in palavras_separada:
    print(palavra)
    
    
# Combinacao de slice com find

email = input('Email: ')
arroba = email.find('@')
print(arroba)

usuario = email[0:arroba]
dominio = email[arroba+1:]
print(usuario)
print(dominio)

# Encontrar sequencia de caracteres dentro da string
produtos = 'computador celular e tablet'
print('NOva' in produtos)

# Encontrar uma substring dentro da string
busca = 'celular'
computador = produtos.find(busca)
print(computador)

# Todas letras iniciais maiusculas
nome = 'joão Guilherme'
print(nome.title())

# Substituir uma string por outra
nome = 'joão Guilherme'
print(nome.replace('joão', 'Maria'))

# Frase com espaços 

# Ou
frase = '         Nova frase com espaco!      '
print(frase.lstrip()) # Esquerda
print(frase.rstrip()) # Direita
print(frase.strip()) # Ambos

# Preenchendo espaços
fruta = 'Abacate'

print(fruta)
print(fruta.rjust(20, '-'))
print(fruta.ljust(20, '-'))
print(fruta.center(20))

# Inicia com 
p= 'Python'
print(p.startswith('Py'))  
print(p.endswith('n'))  

# Docstrings
"""
Docstrings é uma especie de
documentação em codigo"""


texto = """
Ola eu sou  joao quilehas
me ajuda
"""

print(texto)