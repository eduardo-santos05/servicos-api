import mongoose from 'mongoose'

let contratanteSchema = new mongoose.Schema({
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
        unique: true
    },

    tipoPessoa: {
        type: String,
        enum: ['PF', 'PJ'],
        required: [true, "O tipo de pessoa é obrigatório"]
    },

    nomeExibicao: {
        type: String,
        required: [true, "O nome de exibição é obrigatório"],
        trim: true
    },

    razaoSocialOuNomeCompleto: {
        type: String,
        required: [true, "O nome completo ou razão social é obrigatório"],
        trim: true
    },

    documento: {
        type: String,
        required: [true, "O documento de CPF ou CNPJ é obrigatório"],
        unique: true
    },
    
    inscricaoEstadualOuMunicipal: {
        type: String,
        trim: true
    },

    fotoPerfilUrl: {
        type: String
    },

    contato: {
        telefone: { type: String, required: true },
        whatsapp: { type: String },
        emailFaturamento: { type: String, lowercase: true, trim: true }
    },

    // Endereços para atendimento
    enderecos: [{
        apelido: { type: String, default: 'Principal' }, // Ex: "Casa", "Escritório"
        principal: { type: Boolean, default: false },
        cep: { type: String, required: true },
        logradouro: { type: String, required: true },
        numero: { type: String, required: true },
        complemento: { type: String },
        bairro: { type: String, required: true },
        cidade: { type: String, required: true },
        estado: { type: String, required: true, maxlength: 2 },
        pontoReferencia: { type: String },
    }],

    dadosPagamento: {
        idClienteGateway: { type: String },
        cartoesSalvos: [{
            idCartaoGateway: String,
            bandeira: String,
            ultimosDigitos: String
        }]
    },

    prestadoresFavoritos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Prestador'
    }],

    servicosFavoritos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Servico'
    }],

    metricas: {
        avaliacaoMediaRecebida: { type: Number, default: 0, min: 0, max: 5 },
        totalAvaliacoes: { type: Number, default: 0 },
        contratacoesConcluidas: { type: Number, default: 0 },
        cancelamentos: { type: Number, default: 0 }
    },

    ativo: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: { createdAt: 'criadoEm', updatedAt: 'atualizadoEm' }
})

contratanteSchema.index({ 'enderecos.cidade': 1, 'enderecos.estado': 1 })

let Contratante = mongoose.model("Contratante", contratanteSchema)

export default Contratante
