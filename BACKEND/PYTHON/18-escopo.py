# Escopo local e global


var_global = 10

def escrever():
    # Alter content of variable inside function
    # var_global
    var_global = 20
    print(var_global)
    

if __name__ == '__main__':
    escrever()