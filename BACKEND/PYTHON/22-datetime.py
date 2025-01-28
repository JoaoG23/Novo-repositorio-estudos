from datetime import datetime, timedelta
import zoneinfo

# Datetime Agora
hoje = datetime.now()

# Extrair dia, mes e ano
print(hoje) # 2024-10-18 16:56:03.189377
print(hoje.day) # 18
print(hoje.month) # 10
print(hoje.year) # 2024

# Extrair hora, minuto e segundo
print(hoje.hour) # 16
print(hoje.minute) # 56
print(hoje.second) # 3
print(hoje.microsecond) # 189377

# Somar ou Subtrair datas
amanha = hoje + timedelta(days=1)
print(amanha) # 2024-10-19 16:56:03.189377

# Criar datas
data_criada = datetime(year=2024, month=10, day=12, hour=16, minute=56, second=3)
print('data criada: ', data_criada) # data criada:  2024-10-12 16:56:03

atraso = hoje - data_criada # data_criada deve ser primeiro que a (data atual)
print('Atraso: ', atraso) # Atraso:  6 days, 0:17:06.150083
print('em days: ', atraso.days) # em days:  6

# Extrair datas em outro formato
# (strptime): Converte formato em string para DATETIME 
data_em_formato_br = '01/01/2022'
data_em_formato_br = datetime.strptime(data_em_formato_br, '%d/%m/%Y')  
print('data_em_formato_br: ', data_em_formato_br) # data_em_formato_br:  2022-01-01 00:00:00

# (strftime): Converte formato em string para outro (formato qualquer) 
hoje_em_formato_br = hoje.strftime('%d/%m/%Y')
print('hoje_em_formato_br: ', hoje_em_formato_br) # hoje_em_formato_br:  18/10/2024

# Mudar fuso horário
hoje = hoje - timedelta(hours=3)
print(hoje) # 2024-10-18 14:21:16.12 menos 3 horas
# Ou Zone info

zona = zoneinfo.ZoneInfo('Singapore')
agora_singapura = hoje.astimezone(zona)    


print('Singapura:',agora_singapura) # Singapura 2024-10-19 01:32:20.028692+08:00