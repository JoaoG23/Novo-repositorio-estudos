# Dicionários / Hashmaps
# Chave e valor 


# Criando um dicionário

elementos = {
    'Z': 23,
    'nome': 'Lítio',
    'grupo':'Metais Alcalinos',
    'densidade': 3.34
}

print(f"elementos: {elementos['nome']}")
print(elementos.get('densidade'))

# Tamanho do elemento
print(f"tamanho : {len(elementos)}")

# Atualizar um elemento
elementos['nome'] = 'Alcalinos'
print(elementos)

# Adicionar um novo elemento
elementos['massa'] = 55.8
print(elementos)

# Remover um elemento
del elementos['massa']
print(elementos)

# Limpar o dicionário
# elementos.clear()
print(elementos)

# Apagar o dicionário
# del elementos
# print(elementos)

# Iterar um dicionário

elementos.items() # Retorna uma lista de tuplas
print(elementos.items())


# for chave, valor in elementos.items():
#     print(chave, valor)

for i in elementos.items():
    print(i)


# Intera com chaves
for i in elementos.keys():
    print(i)
    
# Intera com valores
for i in elementos.values():
    print(i)