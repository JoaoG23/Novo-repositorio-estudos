# Criando REGEX


Em js tudo que é colocado
em // poderá ser procurado por
uma regex

Ex:

/luiz/

### 1- Ponto .

Veja o exemplo abaixo:

buscará luiz mais o que tiver para 
frente do ponto

    /luiz./

     luzia
     luzio

### 2 - ^

buscar tudo que tive o começo de linha

    /^luiz./

     luiz
     luzi


### 3 - ^

buscar tudo fim de linha

    /luiz.$/

     luiz

### 4 - ?

torna tudo opicional

    /luiz.?$/

     luiz


### 5 - *

poder existir varios depois do luiz

    /luiz.*$/

### 6 - + 

obrigatorio um ou mais
depois de luiz

    /luiz.+$/


### 7 - [] 

somente permite os caracteres
l - u -i -z

    /[luiz]/

lembre-se . dentro de lista
e caractere literal


### 8 - ()

conjuto de regras

   /^(luiz | daniel)$/

somente permitido luiz ou daniel


### 9 - {}

quero que a palavra 
tenha no minimo 
2 As e maximo 4 As

   /a{2,4}/

pode também conter listas;
/[abc]{2,4}/
