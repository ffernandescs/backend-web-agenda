"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const contactSchema = new _mongoose2.default.Schema(
    {
        name: {
            type: String,
        },
        sobrenome: {
            type: String,
        },
        dateNasc: {
            type: String,
        },
        email: {
            type: String,
        },
        logradouro: {
            type: String,
        },
        fone: {
            type: String,
        },
        userId: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

exports. default = _mongoose2.default.model('Contato', contactSchema)