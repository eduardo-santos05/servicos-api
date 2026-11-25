import {
    buscarTodos,
    buscarPorId,
    buscarAtivos,
    buscarPorTipoPessoa,
    salvar,
    atualizarPorId,
    removerPorId,
} from "../repositories/contratanteRepository.js"

export async function listarContratantes() {
    return await buscarTodos()
}

export async function buscarContratantePorId(id) {
    return await buscarPorId(id)
}

export async function buscarContratantesAtivos() {
    return await buscarAtivos()
}

export async function buscarContratantesPorTipoPessoa(tipoPessoa) {
    return await buscarPorTipoPessoa(tipoPessoa)
}

export async function criarContratante(dados) {
    return await salvar(dados)
}

export async function atualizarContratante(id, dados) {
    return await atualizarPorId(id, dados)
}

export async function removerContratante(id) {
    return await removerPorId(id)
}