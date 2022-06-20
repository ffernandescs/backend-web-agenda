"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Contato = require('../models/Contato'); var _Contato2 = _interopRequireDefault(_Contato);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class RepositoryController {
    async index(req, res) {
      try {
        const { user_id } = req.params
        const user = await _User2.default.findById(user_id);

        if(!user) {
          return res.status(404).json()
        }
        
        const contatos = await _Contato2.default.find({
          userId: user_id
        })
        return res.json(contatos)

      } catch (error) {
        console.error(err)
        return res.status(500).json({ error: 'Internal Server error.'})
      }
    }   

    async create(req, res) {
      try {
        const { user_id } = req.params
        const {name, sobrenome, dateNasc, email, logradouro, fone } = req.body
        
        const user = await _User2.default.findById(user_id)

        if(!user) {
          return res.status(404).json()
        }

        const newContato = await _Contato2.default.create({
          name, 
          sobrenome, 
          dateNasc, 
          email,
          logradouro,
          fone,
          userId: user_id
        })

        return res.status(201).json(newContato)
      } catch (err) {
        console.error(err)
        return res.status(500).json({ error: 'Internal Server error.'})
      }
    }

    async destroy(req, res) {
      try {
        const { user_id, id } = req.params

      const user = await _User2.default.findById(user_id)

      if(!user) {
        return res.status(404).json()
      }

      const contatos = await _Contato2.default.findOne({
        userId: user_id,
        id
      })
      
      if(!contatos) {
        return res.status(404).json()
      }

      await contatos.deleteOne()

      return res.status(200).json()
      } catch (error) {
        console.error(err)
        return res.status(500).json({ error: 'Internal Server error.'})

      }



    }

    
}

exports. default = new RepositoryController()