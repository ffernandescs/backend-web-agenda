"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

const userSchema = new _mongoose2.default.Schema(
    {
        email: {
            type: String,
            required: true,
            index: {
                unique: true,
            }
        },

        sobrenome: {
            type: String
        },
        password: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

exports. default = _mongoose2.default.model('User', userSchema)