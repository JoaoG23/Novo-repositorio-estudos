process.argv.forEach(value => {
    console.log(value)
});

// console.log(process.argv);


// Exemplo de exercicios
const help = require('./help')
const options = process.argv.slice(2);

if (options.length < 1) {
    help.showOptions()
    return;
}

switch (options[0]) {
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