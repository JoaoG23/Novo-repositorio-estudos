
# Variables 
# How to create

name_user = 'Josh' # Type inference

n1 = n2 = n3 = n4 = 0.01 ## 4 memory space for one value;

state = True;
## 2 Variable with values different

name, age = 'Josh', 29

# HOW TO SEE type of var
## Function type()

## type of variables

# <class 'str'>
# <class 'float'>
# <class 'int'>
# <class 'bool'>

print(type(name_user))
print(type(n1))
print(type(age))
print(type(state))
print(type(1+2j))

## Function IsInstance()
print(isinstance(name_user, int)) # verify if same type return true or false
print(isinstance(n1, (int, float))) # verify if is number

