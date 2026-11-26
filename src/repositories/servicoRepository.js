import Servico from "../models/Servico.js";

// Repository: a ÚNICA camada que usa o Model (fala com o banco)

export async function buscarTodos() {
    return await Servico.find();
}

export async function buscarPorId(id) {
    return await Servico.findById(id);
}

export async function buscarPorCategoriaId(id) {
    return await Servico.find({ 'categoria.id': id });
}

export async function buscarPorCategoriaNome(nome) {
    return await Servico.find({ 'categoria.nome': nome });
}

export async function buscarPorTags(tags) {
    return await Servico.find({ tags: [tags] })
}

export async function buscarPorTipo(tipo) {
    return await Servico.find({ tipoServico: tipo })
}

export async function buscarPorModalidadeAtendimento(modalidade) {
    return await Servico.find({ modalidadeAtendimento: modalidade })
}

export async function buscarPorStatus(status) {
    return await Servico.find({ status: status })
}

export async function salvar(dados) {
    return await Servico.create(dados);
}

export async function atualizarPorId(id, dados) {
    return await Servico.findByIdAndUpdate(id, dados);
}

export async function removerPorId(id) {
    return await Servico.findByIdAndDelete(id);
}