# 3- Times

Os time são definidos no escopo global;


### Caso queira Deixar a funcão para depois

 quando se tem um computacão muito pesada
quer exercultar as funçoes anteriores antes de tudo


 pode fazer de duas formas 

Ex: 

Ou passar uma criar uma funcão setTimeout(time = 0)

```javascript

// Sem SetImmediate

    console.log('Primeiro exercultar' + new Date());
    setTimeout(() => {
        console.log('Segundo' + new Date()) // Execulta por ultimo na fila
    }, 0);

    console.log('ùtimo' + new Date());
```

Ou com a função SetImmediate
```javascript

//  SetImmediate

    console.log('primeiro ' + new Date());
    setImmediate(() => {
        console.log('Meio ' + new Date())
    })
    console.log('Ultimo ' + new Date());
```


veja no arquivo setTimeoutZero()