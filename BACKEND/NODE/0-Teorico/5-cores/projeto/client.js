const net = require('net');

const client = net.connect(3000); // 1- Conecto client a porta aberta pelo server


client.on('connect', () => { // Enviando dado para o cliente
        client.write('Hello, I am Client');
})

client.on('data', (message) => { // Evento on 'data' receber uma messagem por calback
        console.info(message.toString()); // vem buffer e decoficado com toString
})


// Lendo dados do servidor

process.stdin.on('readable', () => {
        let message = process.stdin.read(); // Ler teclado
        if (!message) return; // se for vazio para execucao

        message = message.toString().replace(/(\r\n|\n|\r)/gm, "");

        client.write(message); // Mostra na tela

})