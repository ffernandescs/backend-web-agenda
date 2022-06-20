"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);


class Database {
    constructor() {
        this.connection = _mongoose2.default.connect(
            _database2.default.url, 
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        )
    }
}

exports. default = new Database()