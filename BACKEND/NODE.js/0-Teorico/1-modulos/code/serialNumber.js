let max = 10000;


const generate = function () {
    return Math.floor(Math.random() * max);
}
// Com exports
module.exports.generateModuleExports = function () {
    return Math.floor(Math.random() * max);
}

// Com o this
this.generateThis = function () {
    return Math.floor(Math.random() * max);
}

// Com OnlyExports
exports.generateOnlyExports = function () {
    return Math.floor(Math.random() * max);
}


// Ou como um objeto
// module.exports = {
//     generate:generate
// }

// Ou poderá exportar também com uma funcao fabrica
//Semelhante as classes O0

// const FactorySerialGenerator = function() {

//     const max = 1000;
//     this.generateFabric = function() {
//         return Math.floor(Math.random() * max)
//     };
// };

// module.exports = new FactorySerialGenerator();

