from sum_calc import sum_value

second_valor = int(input('Firstvalue: '))
operator = input('Operator: ')
first_value = int(input('Second value: '))

def calc(first_value, operator, second_valor):
    if operator == '+':
        return sum_value(first_value,second_valor)
    


result = calc(first_value, operator, second_valor)
print('Result: ', result)
