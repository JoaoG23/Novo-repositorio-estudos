"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var mongoose_1 = require("mongoose");
var routes_1 = require("./routes");
var App = /** @class */ (function () {
    function App() {
        this.express = (0, express_1["default"])();
        this.middlewares();
        this.database();
        this.routes();
    }
    App.prototype.middlewares = function () {
        this.express.use(express_1["default"].json());
        this.express.use((0, cors_1["default"])());
    };
    App.prototype.database = function () {
        mongoose_1["default"].connect('mongodb://localhost:27017/dbkanban', {
        // useNewUrlParser:true
        });
    };
    App.prototype.routes = function () {
        this.express.use(routes_1["default"]);
        // PARA TESTES 
        // this.express.get('/', (req, res) => {
        //     return res.send('Ola Testando .....')
        // })
    };
    return App;
}());
exports["default"] = new App().express;
