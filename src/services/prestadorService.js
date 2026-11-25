import {
    buscarTodos,
    buscarPorId,
    buscarAtivos,
    buscarPorTipoPessoa,
    buscarPorCategoriaId,
    buscarPorCategoriaNome,
    salvar,
    atualizarPorId,
    removerPorId
} from "../repositories/prestadorRepository.js"

export async function listarPrestadores() {
    return await buscarTodos()
}

export async function buscarPrestadorPorId(id) {
    return await buscarPorId(id)
}

export async function buscarPrestadoresAtivos() {
    return await buscarAtivos()
}

export async function buscarPrestadoresPorTipoPessoa(tipoPessoa) {
    return await buscarPorTipoPessoa(tipoPessoa)
}

export async function buscarPrestadoresPorCategoriaId(id) {
    return await buscarPorCategoriaId(id)
}

export async function buscarPrestadoresPorCategoriaNome(nome) {
    return await buscarPorCategoriaNome(nome)
}

export async function criarPrestador(dados) {
    return await salvar(dados)
}

export async function atualizarPrestador(id, dados) {
    return await atualizarPorId(id, dados)
}

export async function removerPrestador(id) {
    return await removerPorId(id)
}