# Renomeando arquivos de uma pasta
import os

os.chdir('C:\\py_pasta')

print(f'Diretório atual: {os.getcwd()}')

os.getcwd()

padrao_nome = input('Qual e o padrão dos nomes você deseja usar (sem extenção) ? ')

for contagem, arquivo in enumerate(os.listdir()):
    if os.path.isfile(arquivo):
        nome_arquivo, extensao_arquivo = os.path.splitext(arquivo) 

        nome_arquivo = padrao_nome + '-' + str(contagem)
            
        nome_novo = f'{nome_arquivo}{extensao_arquivo}'
            
        os.rename(arquivo, nome_novo)
        
print(f'Quantos arquivos foram renomeados')
    