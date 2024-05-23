const net = require('net');

net.createServer(connection => {
    connection.write('Hello, Im the Server JIOAO') // Enviando dado paro cliente
    connection.on('data', (message) => { // Escultando dado do cliente
        console.log(message.toString());
    })
}).listen(3000);