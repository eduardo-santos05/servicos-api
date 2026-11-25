import Contratante from "../models/Contratante.js";

// Repository: a ÚNICA camada que usa o Model (fala com o banco)

export async function buscarTodos() {
    return await Contratante.find();
}

export async function buscarPorId(id) {
    return await Contratante.findById(id);
}

export async function buscarAtivos() {
    return await Contratante.find({ ativo: true })
}

export async function buscarPorTipoPessoa(tipoPessoa) {
    return await Contratante.find({ tipoPessoa: tipoPessoa })
}

export async function salvar(dados) {
    return await Contratante.create(dados);
}

export async function atualizarPorId(id, dados) {
    return await Contratante.findByIdAndUpdate(id, dados);
}

export async function removerPorId(id) {
    return await Contratante.findByIdAndDelete(id);
}