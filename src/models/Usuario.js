import mongoose from 'mongoose'

const usuarioSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: [true, "O nome é obrigatório"],
        trim: true
    },
    
    email: {
        type: String,
        required: [true, "O email é obrigatório"],
        unique: true,
        trim: true,
        lowercase: true
    },

    senhaHash: {
        type: String,
        required: true,
        select: false
    },

    perfis: {
        type: [String],
        enum: ['contratante', 'prestador', 'admin'],
        default: ['contratante']
    },

    contratanteId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contratante',
        default: null
    },

    prestadorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prestador',
        default: null
    },

    ativo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: { createdAt: 'criadoEm', updatedAt: 'atualizadoEm' }
})

const Usuario = mongoose.model("Usuario", usuarioSchema)

export default Usuario
