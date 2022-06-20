import jwt from "jsonwebtoken"
import bcrypt from 'bcryptjs';

import User from "../models/User"
import authConfig from "../config/auth"

class SessionController {
    async create(req, res) {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if(!user) {
            return res.status(401).json({ error: 'User / password Invalid.'})
        }

        if(!(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ error: 'Senha Invalida'})
        }

        const { id } = user
        return res.json({
            user: {
                id,
                email
            },
            token: jwt.sign({ id }, authConfig.secret, {
                expiresIn: authConfig.expiresIn,
            })
        })
    }
}

export default new SessionController()