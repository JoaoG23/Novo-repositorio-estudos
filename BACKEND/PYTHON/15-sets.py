# Sets = Conjuntos
# O que são Sets?
# Ordem aleatória | não aparece em ordem correta.
# São conjuntos de valores unicos, ou seja, não aceitam repetição de valores

# Set somente os valores
# Criando um set
planeta_anao = {'Plutão', 'Ceres','Eris','Haumea', 'Ceres'}
print(planeta_anao)

# Tamanho do set
print(len(planeta_anao))

# Verificando se um item existe
print('Lua' not in planeta_anao)

# Interando
for astro in planeta_anao:
    print(astro.upper())
    
    
# Transformando lista em SET

astros = ['Lua', 'Venus', 'Lua']

print(astros )

astros_set = set(astros)
print(astros_set)


# Uniao e interseccao (valores unicos)
astros1 = {'Lua', 'Venus', 'Sirius', 'Marte', 'Io'}
astros2 = {'Lua', 'Venus', 'Sirius', 'Marte', 'Cometa de Salomão'}

print(astros1 | astros2)
print(astros1.union(astros2))


# Interseccao (ambos os valores que estão em ambos os conjuntos só)
print(astros1 & astros2)
print(astros1.intersection(astros2))

# Diferença Simetrica do conjunto (somente elementos que não estão em ambos os conjuntos)
print(astros1 ^ astros2)
print(astros1.symmetric_difference(astros2))

# Adicionar um item
# Ordem aleatória
astros1.add('Jupiter')
astros1.add('Sol')
print(astros1)

# Remover um elemento | caso o elemento esteja no conjuto
astros1.remove('Jupiter')
print(astros1)

# Remover elemento se não sabe se existe
astros1.discard('Jupiter')

# Remove aleatoriamente
astros1.pop()

# Limpar conjunto
astros1.clear()