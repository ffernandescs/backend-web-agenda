import Contato from '../models/Contato'
import User from '../models/User';

class RepositoryController {
    async index(req, res) {
      try {
        const { user_id} = req.params
        const user = await User.findById(user_id);
        const { q } = req.query
        if(!user) {
          return res.status(404).json()
        }

        let query = {}

        if(q) {
          query = { url: {$regex: q} }
        }

        
        const contatos = await Contato.find({
          userId: user_id,
          ...query
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
        
        const user = await User.findById(user_id)

        if(!user) {
          return res.status(404).json()
        }

        const newContato = await Contato.create({
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

      const user = await User.findById(user_id)

      if(!user) {
        return res.status(404).json()
      }

      const contatos = await Contato.findOne({
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

    async update(req, res) {
     
     try {
      const { id } = req.params
      const { name, email, sobrenome, dateNasc, logradouro, fone } = req.body

      const user = await Contato.findById(id)

      if(!user) {
        return res.status(404).json()
      }
      await user.update({ name, email, sobrenome, dateNasc, logradouro, fone })
      return res.status(200).json()
    } catch (error) {
      console.error(error)
      return res.status(500).json({ error: 'Internal Server error.'})
    } 

    }

    
}

export default new RepositoryController()