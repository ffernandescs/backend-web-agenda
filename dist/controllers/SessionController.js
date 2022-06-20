"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);
var _auth = require('../config/auth'); var _auth2 = _interopRequireDefault(_auth);

class SessionController {
    async create(req, res) {
        const { email, password } = req.body
        const user = await _User2.default.findOne({ email })
        if(!user) {
            return res.status(401).json({ error: 'User / password Invalid.'})
        }

        if(!(await _bcryptjs2.default.compare(password, user.password))) {
            return res.status(401).json({ error: 'Senha Invalida'})
        }

        const { id } = user
        return res.json({
            user: {
                id,
                email
            },
            token: _jsonwebtoken2.default.sign({ id }, _auth2.default.secret, {
                expiresIn: _auth2.default.expiresIn,
            })
        })
    }
}

exports. default = new SessionController()