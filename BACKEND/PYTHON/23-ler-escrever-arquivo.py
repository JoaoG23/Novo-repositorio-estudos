"""
'r'   -> Usado somente para ler algo  
'w'  -> Usado somente para escrever algo  
'r+' -> Usado para ler e escrever algo  
'a'   -> Usado para acrescentar algo

"t" - Text - Default value. Text mode

"b" - Binary - Binary mode (e.g. images)
"""
with open('valores_celulares.txt', 'r+') as arquivo:
    for valor in arquivo:
        print(valor)
    arquivo.write('9000')