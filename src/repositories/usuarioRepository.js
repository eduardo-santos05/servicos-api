import Usuario from "../models/Usuario.js";

// Repository: a ÚNICA camada que usa o Model (fala com o banco)

export async function buscarTodos() {
    return await Usuario.find();
}

export async function buscarPorId(id) {
    return await Usuario.findById(id);
}

export async function salvar(dados) {
    return await Usuario.create(dados);
}

export async function atualizarPorId(id, dados) {
    return await Usuario.findByIdAndUpdate(id, dados);
}

export async function removerPorId(id) {
    return await Usuario.findByIdAndDelete(id);
}

export async function buscarAtivos() {
    return await Usuario.find({ ativo: true })
}

export async function buscarPorPerfil(perfil) {
    return await Usuario.find({ perfis: perfil })
}