# conditional

# primeiro_valor = int(input('Primeiro valor: ')) # Entrada de dados

# segundo_valor = int(input("Segundo valor:"))

# media = (primeiro_valor + segundo_valor) / 2

# if (media >= 7):
#     print('Aprovado')
# else:
#     print('Reeeprovado')

# print("Sua média é {}".format(media))

primeiro_valor = int(input('Primeiro valor: ')) # Entrada de dados

segundo_valor = int(input("Segundo valor:"))

media = (primeiro_valor + segundo_valor) / 2

if (media >= 7):
    print('Aprovado')
elif (media >= 5):
    print("Esta de recuperacao")
else:
    print("Reprovado")

# txt1 = "My name is {fname}, I'm {age}".format(fname="John", age=36)
print("Sua média é {}".format(media))



