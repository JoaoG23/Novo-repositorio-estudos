module.exports.noReadable = (callback) => {

    process.stdin.on('readable',() => {
        let chunk = process.stdin.read();
        if (chunk) return callback(chunk.toString().replace(/(\r\n|\n|\r)/gm, ""));
    });
};
// process.stdin.on('readable', () => {
//     const chunk = process.stdin.read();
//     // if(chunk) console.log(chunk); // <Buffer 61 0d 0a>
//     if(chunk) console.log(chunk.toString()); // Pega pedaços
// })

// ao exercultar irá
// aparece um <Buffer 61 0d 0a>
// isso é um conjuto de bits representado
// por todos os caracteres escritos