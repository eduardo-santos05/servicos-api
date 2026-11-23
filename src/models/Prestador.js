import mongoose from 'mongoose'

let prestadorSchema = new mongoose.Schema({
    usuarioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true,
        unique: true
    },

    tipoPessoa: {
        type: String,
        enum: ['PF', 'PJ'],
        required: [true, "O tipo da pessoa é obrigatório"]
    },

    nomeExibicao: { // Nome comercial ou Nome Fantasia
        type: String,
        required: [true, "O nome de exibição é obrigatório"],
        trim: true,
        index: 'text'
    },

    razaoSocialOuNomeCompleto: {
        type: String,
        required: true,
        trim: true
    },

    documento: {
        type: String,
        required: [true, "O documento de CPF ou CNPJ é obrigatório"],
        unique: true
    },

    biografia: {
        type: String,
        maxlength: 1000
    },

    fotoPerfilUrl: {
        type: String
    },

    contato: {
        telefone: { type: String, required: [true, "O telefone de contato é obrigatório"] },
        whatsapp: { type: String },
        emailComercial: { type: String, lowercase: true, trim: true }
    },

    endereco: {
        cep: { String, required: [true, "O CEP é obrigatório"] },
        logradouro: { String, required: [true, "O logradouro é obrigatório"] },
        numero: String,
        complemento: String,
        bairro: { String, required: [true, "O bairro é obrigatório"] },
        cidade: { type: String, required: [true, "A cidade é obrigatória"] },
        estado: { type: String, required: [true, "O estado é obrigatório"], maxlength: 2 },
    },

    categorias: [{
        id: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria' },
        nome: String
    }],

    especialidades: [{ type: String }],

    certificacoes: [{
        nome: String,
        codigoRegistro: String,
        documentoUrl: String,
        verificado: { type: Boolean, default: false }
    }],

    portfolio: [{
        titulo: String,
        descricao: String,
        imagemUrl: String
    }],

    disponibilidade: {
        aceitaUrgencia: { type: Boolean, default: false },
        diasTrabalho: [{
            diaSemana: { type: Number, min: 0, max: 6 }, // 0 = Domingo, 6 = Sábado
            horaInicio: String,
            horaFim: String
        }]
    },

    dadosRecebimento: {
        chavePix: String,
        codigoBanco: String,
        agencia: String,
        conta: String,
        idSubcontaGateway: String
    },

    statusVerificacao: {
        type: String,
        enum: ['pendente', 'em_analise', 'verificado', 'rejeitado'],
        default: 'pendente'
    },

    metricas: {
        mediaAvaliacoes: { type: Number, default: 0, min: 0, max: 5 },
        totalAvaliacoes: { type: Number, default: 0 },
        servicosConcluidos: { type: Number, default: 0 },
        tempoMedioRespostaMinutos: { type: Number }
    },

    ativo: {
        type: Boolean,
        default: true
    },

    avaliacao: {
        type: Number,
        required: [true, 'A nota é obrigatória'],
        min: [1, 'A nota mínima é 1'],
        max: [5, 'A nota máxima é 5'],
        validar: {
            validator: Number.isInteger,
            message: 'A nota deve ser um número inteiro'
        }
    },

    comentarios: [
        {
            texto: {
                type: String,
                required: [true, "O comentario precisa de um texto"]
            }
        }
    ],
},
{
    timestamps: { createdAt: 'criadoEm', updatedAt: 'atualizadoEm' }
})

prestadorSchema.index({ 'categorias.id': 1, statusVerificacao: 1, ativo: 1 })
prestadorSchema.index({ 'metricas.mediaAvaliacoes': -1 })

let Prestador = mongoose.model("Prestador", prestadorSchema)

export default Prestador