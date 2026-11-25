import Prestador from "../models/Prestador.js";

// Repository: a ÚNICA camada que usa o Model (fala com o banco)

export async function buscarTodos() {
    return await Prestador.find();
}

export async function buscarPorId(id) {
    return await Prestador.findById(id);
}

export async function buscarAtivos() {
    return await Prestador.find({ ativo: true })
}

export async function buscarPorTipoPessoa(tipoPessoa) {
    return await Prestador.find({ tipoPessoa: tipoPessoa })
}

export async function buscarPorCategoriaId(id) {
    return await Prestador.find({ 'categorias.id': id });
}

export async function buscarPorCategoriaNome(nome) {
    return await Prestador.find({ 'categorias.nome': nome });
}

export async function salvar(dados) {
    return await Prestador.create(dados);
}

export async function atualizarPorId(id, dados) {
    return await Prestador.findByIdAndUpdate(id, dados);
}

export async function removerPorId(id) {
    return await Prestador.findByIdAndDelete(id);
}