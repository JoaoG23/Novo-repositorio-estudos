# 1- Modulos

1. São funcões
1. Os modulos não podem ser vázios
2. Tudo que é definido dentro de um modulo e privado.

O que é um modulo:
    para ver mais sobre 

```javascript

console.info(arguments);
    
```
    Todo modulo tem:
```javascript

// Dentro no modulo
    function NativeModule(id){
        this.filename = id + '.js';
        this.id = id;
        this.exports = {}; // quando faço um require ele retorna .exports
        this.loaded = false;
    }
    
```



Para exportar modulos:

Uso: Ou **module.exports** ou **this** ou somente **exports**
Porém somente module.exports = e retornavél (Visto que ele e uma função fabrica) 
então que for usar exportação de objetos somente e o module exports


Ex:

```javascript

// Arquivo exportado
        module.exports.generateModuleExports = function () {
            return Math.floor(Math.random() * max);
        }
```

## 0.1 - Como ele é localizado

O algoritmo tenta sempre busca o module **core**. Eles são

como: **net, http, url, fs, zlib, crypto, events, stream,os, vm, utilentre outros**

<img src='./assets/como-encontrar-modulos.png'>