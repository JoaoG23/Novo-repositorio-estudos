const serialGenerator = require('./serialNumber');

// module exports
// console.info(serialGenerator.generateModuleExports())

// This
console.info(serialGenerator.generateThis())

// Somente exports
console.info(serialGenerator.generateOnlyExports())

// Factory Functions
// console.info(serialGenerator.generateFabric())


// Olhar o que tem dentro de um funcao modulo
console.log(arguments);