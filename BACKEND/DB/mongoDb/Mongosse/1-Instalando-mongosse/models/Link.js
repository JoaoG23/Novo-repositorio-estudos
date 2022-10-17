//  Module -------- 
// Onde estará a estrutura do Corpo.
const mongoose = require('mongoose');

const linkSchema = new mongoose.Schema({
    titulo: {type:String  , required:true},
    descricao:String,
    url: {type:String , required:true},
    clique: { type:Number , default: 0 }
});

module.exports = mongoose.model('Link', linkSchema); // Referencia a colecão