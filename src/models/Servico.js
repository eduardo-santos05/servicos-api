import mongoose from 'mongoose'

let servicoSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: [true, "O título do serviço é obrigatório"],
        trim: true,
        index: 'text'
    },

    descricao: {
        type: String,
        required: [true, "A descrição do serviço é obrigatória"],
        trim: true
    },

    categoria: {
        id: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Categoria', 
            required: true 
        },
        nome: { 
            type: String, 
            required: [true, "O nome da categoria é obrigatório"]
        },
        subcategoriaId: { type: mongoose.Schema.Types.ObjectId },
        subcategoriaNome: { type: String }
    },

    tipoServico: {
        type: String,
        enum: ['pontual', 'recorrente', 'projeto'],
        default: 'pontual'
    },

    modalidadeAtendimento: {
        type: String,
        enum: ['presencial', 'remoto', 'hibrido'],
        required: [true, "A modalidade de atendimento é obrigatória"]
    },

    precificacao: {
        modelo: { 
            type: String, 
            enum: ['fixo', 'por_hora', 'por_m2', 'sob_orcamento'], 
            required: [true, "O modelo da precificação do serviço é obrigatório"] 
        },
        precoBase: { type: Number, min: 0 }, // Em centavos
        moeda: { type: String, default: 'BRL' },
        duracaoEstimadaMinutos: { type: Number }
    },

    prestadorId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Prestador', 
        required: [true, "O ID do prestador é obrigatório"] 
    },

    tags: [{ type: Array }],
 
    avaliacao: {
        type: Number,
        required: [true, 'A nota é obrigatória'],
        min: [1, 'A nota mínima é 1'],
        max: [5, 'A nota máxima é 5'],
        validate: {
            validator: Number.isInteger,
            message: 'A nota deve ser um número inteiro'
        },
        media: { type: Number, default: 0, min: 0, max: 5 },
        total: { type: Number, default: 0 }
    },

    comentarios: [
        {
            texto: {
                type: String,
                required: [true, "O comentario precisa de um texto"]
            }
        }
    ],

    status: {
        type: String,
        enum: ['rascunho', 'ativo', 'pausado', 'arquivado'],
        default: 'rascunho'
    }
},
{
    timestamps: { createdAt: 'criadoEm', updatedAt: 'atualizadoEm' }
})

servicoSchema.index({ 'categoria.id': 1, status: 1 });
servicoSchema.index({ prestadorId: 1 });

let Servico = mongoose.model("Servico", servicoSchema)

export default Servico