## Standard Streams 

São canais de comunicação, utilizados para realizar operações de 
entrada e saída, entre o programa e o ambiente
onde ele está sendo executado.


Eles são 3 | **Input** | **Output** | **Error** |


```javascript
// Recriando um console.log personalizado
 /// strout = 
    const konsole = {
        log:function (msg) {
            process.stdout.write(msg + '\n'); // para sair algo
        }
    }
// error console.error()
    const konsole = {
        error: function (msg) {
            process.stderr.write(msg + '\n');
        }
    }

```

#### Gerando File Saida OUTPUT

Para gerar um script de saida digite 1> representa output
Para gerar um script de error digite 2> representa outerror


##### Quem esta do outro lado

Podemos ainda verificar **com quem estamos interagindo**,
se é um **TTY**, ou teletype, o terminal ou o teclado, ou PTY
ou pseudo-teletype, que se refere a algum tipo de software como 
telnet, ssh ou xterm

```javascript
// Pegue o mesmo console criado 

konsole.log('PRIMEIRO TTY: ' + !!process.stdout.isTTY); // true tudo foi para o console
konsole.log('SEGUNDO TTY: ' + !!process.stderr.isTTY);

```


#### INPUT

Os dados de entrada do sistema.

Utilizando stdin para ler o teclado

        veja no arquivo keyboard.js