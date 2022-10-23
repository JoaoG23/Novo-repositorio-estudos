const help = require('./help');
const keyboard = require('./keyboard');


keyboard.noReadable(option => {

    switch (option) {
        case 'a':
            console.info('pid of process: ' + process.pid)
            break;
        case 'b':
            console.info('title : ' + process.title)
            break;
        case 'c':
            console.info('arch : ' + process.arch)
            break;
        case 'd':
            console.info('platform: ' + process.platform)
            break;
        case 'e':
            console.log(process.env) 
            break;
        case 'v':
            console.dir('versions: ' + process.version) 
            break;
        case 'm':
            console.log(process.memoryUsage()) // memoria usada do v8
            break;
        case 'u':
            console.log('Uptime: ' + process.uptime()) // o tempo que processo fica exercultando na maquina
            break;
        case 'q':
            process.exit();
            break;
        default:
            help.showOptions();
    }   
});

process.on('exit', () => {
    console.info('Tchazinnn')
});

process.on('uncaughtException', () => {
    console.error('Error de qualquer coisas');
})
as.b();