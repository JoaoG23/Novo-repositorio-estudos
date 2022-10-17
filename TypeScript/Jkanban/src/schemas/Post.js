"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var PostSchema = new mongoose_1.Schema({
    nome: String,
    descricao: String,
    status: Number,
    dataEntrega: { type: Date, "default": Date.now },
    dataCriacao: { type: Date, "default": Date.now }
});
exports["default"] = (0, mongoose_1.model)('Post', PostSchema);
