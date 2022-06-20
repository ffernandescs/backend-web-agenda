import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
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

export default mongoose.model('Contato', contactSchema)