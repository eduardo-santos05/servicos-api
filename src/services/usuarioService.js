import {
    buscarTodos,
    buscarPorId,
    buscarAtivos,
    buscarPorPerfil,
    salvar,
    atualizarPorId,
    removerPorId
} from "../repositories/usuarioRepository.js"

export async function listarUsuarios() {
    return await buscarTodos()
}

export async function buscarUsuarioPorId(id) {
    return await buscarPorId(id)
}

export async function buscarUsuariosAtivos() {
    return await buscarAtivos()
}

export async function buscarUsuariosPorPerfil(perfil) {
    return await buscarPorPerfil(perfil)
}

export async function criarUsuario(dados) {
    return await salvar(dados)
}

export async function atualizarUsuario(id, dados) {
    return await atualizarPorId(id, dados)
}

export async function removerUsuario(id) {
    return await removerPorId(id)
}