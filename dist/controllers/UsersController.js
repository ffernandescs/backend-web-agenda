"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);
var _auth = require('../services/auth');

class UsersController {
    async index(req, res) {
      try {
        const users = await _User2.default.find();
        return res.json(users)

      } catch (error) {
        console.error(err)
        return res.status(500).json({ error: 'Internal Server error.'})
      }
      
    }   

    async show(req, res) {
      try {
        const { id } = req.params
        const user = await _User2.default.findById(id)

        if(!user) {
          return res.status(404).json()
        }

        return res.json(user)
      } catch (error) {
        console.error(err)
        return res.status(500).json({ error: 'Internal Server error.'})
      }
    }

    async create(req, res) {
      try {
        const { email, password } = req.body
        const user = await _User2.default.findOne({ email })
        if(user) {
          return res
            .status(422)
            .json({ message: `User ${email} already exists.`})
        }

        const encryptedPasword = await _bcryptjs2.default.hash(password, 8)
        console.log(encryptedPasword)


        const newUser = await _User2.default.create({ 
          email, 
          password: encryptedPasword
        });

        return res.status(201).json(newUser)
      } catch (err) {
        console.error(err)
        return res.status(500).json({ error: 'Internal Server error.'})
      }
    }

    async update(req, res) {
      try {
        const { id } = req.params
        const { email, password } = req.body

        const user = await _User2.default.findById(id)

        if(!user) {
          return res.status(404).json()
        }
        const encryptedPasword = await _bcryptjs2.default.hash(password, 10)

        await user.updateOne({ email, password: encryptedPasword })
        return res.status(200).json()
      } catch (error) {
        console.error(err)
        return res.status(500).json({ error: 'Internal Server error.'})
      }  
    }

    async destroy(req, res) {
      try {
        const { id } = req.params
        const user = await _User2.default.findById(id)

        if(!user) {
          return res.status(404).json()
        }

        await user.deleteOne()
        return res.status(200).json()
      } catch (error) {
        console.error(err)
        return res.status(500).json({ error: 'Internal Server error.'})
      }
    }
}

exports. default = new UsersController()