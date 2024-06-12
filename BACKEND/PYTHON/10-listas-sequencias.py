# Listas : Sequências semelhantes a vetores, com diferentes tipos de dados
# Criando uma lista.

# Com tipos diferentes
notas = [1,2,3,'testa']

# Com tipos iguais
n1 = [1,2,3]
n2 = [6,7,9]

# Concatenando listas
valores = n1 + n2 

# Atualizando valores   
valores[0] = 8

# Slicing imprindo apartir do primeiro valor 2 digitos
print(valores[0:2])

# Mostrando os 4 primeiro items
print(valores[:4])

# Penutimo até o final da minha lista
print(valores[-2:])

# Tamanho da lista
print(len(valores))


# Ordenação da lista
print(sorted(valores, reverse=True))

#Somação, minimo e maximo da lista
print(sum(valores))
print(max(valores))
print(min(valores))

# Inserir valores e remover no final da lista
valores.append(10)
print(valores)


valores.pop()
print(valores)

# Inserir valores e remover no inicio da lista
valores.insert(0,10)
print(valores)

valores.pop(3)
print(valores)

# Existe ou não um item na lista
print(17 in valores)

print(valores[0])
print(notas)

# Interação com laço for
# Criar lista de planetas

planetas = ['Mercurio', 'Venus', 'Terra', 'Marte', 'Jupiter', 'Saturno', 'Urano', 'Netuno']

for planeta in planetas:
    print(planeta)