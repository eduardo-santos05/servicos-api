import {
    buscarTodos,
    buscarPorId,
    buscarPorCategoriaId,
    buscarPorCategoriaNome,
    buscarPorTags,
    buscarPorTipo,
    buscarPorModalidadeAtendimento,
    buscarPorStatus,
    salvar,
    atualizarPorId,
    removerPorId
} from "../repositories/servicoRepository.js"

export async function listarServicos() {
    return await buscarTodos()
}

export async function buscarServicoPorId(id) {
    return await buscarPorId(id)
}

export async function buscarServicosPorCategoriaId(id) {
    return await buscarPorCategoriaId(id)
}

export async function buscarServicosPorCategoriaNome(nome) {
    return await buscarPorCategoriaNome(nome)
}

export async function buscarServicosPorTags(tags) {
    return await buscarPorTags(tags)
}

export async function buscarServicosPorModalidadeAtendimento(modalidade) {
    return await buscarPorModalidadeAtendimento(modalidade)
}

export async function buscarServicosPorStatus(status) {
    return await buscarPorStatus(status)
}

export async function criarServico(dados) {
    return await salvar(dados)
}

export async function atualizarServico(id, dados) {
    return await atualizarPorId(id, dados)
}

export async function removerServico(id) {
    return await removerPorId(id)
}