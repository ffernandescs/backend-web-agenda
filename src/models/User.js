import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
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

export default mongoose.model('User', userSchema)