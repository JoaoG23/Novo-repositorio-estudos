# **Tuplas** são **imutáveis** e não podem ser alteradas após a criação. Elas são definidas com parênteses `()`.
# As tuplas são usadas para valores que não devem mudar, enquanto as listas são usadas para itens que podem precisar ser alterados.
# Ex: semana,datas,calendário
# Na ciência da computação, a tupla é uma estrutura de dados que representa uma coleção de
# elementos que são ordenados e imutáveis. 
# As tuplas são usadas em várias estruturas de dados como listas ligadas
# , pilhas, filas, árvores, e grafos.

halogenios = ('F', 'Cl','Br','I')
gases_nobres = ('He', 'Ne', 'Ar', 'Kr')

# Conctenando Tuplas
elementos = halogenios + gases_nobres;
t1= (5,5,5,2,4,3, 1)
print(elementos)

# Contando items 
print(t1.count(2)) # 1

# Slicing Do inicio até o elemento 4 
print(t1[0:4]) # (5, 5, 5, 2)

# Slicing Do penutilmo até o final da lista
print(elementos[-2:]) # ('Ar', 'Kr')

# Find
print(t1.index(5)) # 0

# Exists item
print(5 in t1) # True

# Sum, max and min
print(sum(t1))
print(max(t1))
print(min(t1))

# Operations no avaliable
# print(t1.sort())
# print(t1.append())
# print(t1.reversed())
# print(t1.pop())

# List from tuple
grupo_novo = list(halogenios)
grupo_novo[0] = 'POPO'

print(grupo_novo)

# Create tuple from list
tuple_from_list = tuple(grupo_novo)
print(type(tuple_from_list))

# Tuple order
print(tuple(sorted(tuple_from_list)))