const konsole = {
    log:function (msg) {
        process.stdout.write(msg + '\n'); // para sair algo
    },
    error: function (msg) {
        process.stderr.write(msg + '\n');
    }
}


konsole.log('Saida de Dados comum'); // Console de log criado 
konsole.error('Gerando um pequeno errinho'); // Console de erro criado


konsole.log('PRIMEIRO TTY: ' + !!process.stdout.isTTY); // Vendo para onde esta sendo a saida
konsole.log('SEGUNDO TTY: ' + !!process.stderr.isTTY);// onde esta sendo a saida