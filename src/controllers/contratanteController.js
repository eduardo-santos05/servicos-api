import {
    listarContratantes,
    buscarContratantePorId,
    buscarContratantesAtivos,
    buscarContratantesPorTipoPessoa,
    criarContratante,
    atualizarContratante,
    removerContratante
} from "../services/contratanteService.js";

// Controller: recebe req e res, chama o service e responde

// GET: lista todos (200)
// async: necessário para usar o await dentro da função
export async function listar(req, res) {
    let contratante = await listarContratantes();
    res.send(contratante);
}

// GET por id: 200, 404 ou 400
export async function buscarPorId(req, res) {
    try {
        let contratante = await buscarContratantePorId(req.params.id);

        if (contratante === null) {
            return res.status(404).send({ erro: "Contratante não encontrado" });
        }

        res.send(contratante);
    } catch (erro) {
        // _id com formato errado
        res.status(400).send({ erro: erro.message });
    }
}

export async function buscarAtivos(req, res) {
    try {
        let contratantes = await buscarContratantesAtivos();

        if (contratantes.length === 0) {
            return res.status(404).send({ erro: "Não há contratantes cadastrados para o filtro informado" });
        }

        res.send(contratantes);
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

export async function buscarPorTipoPessoa(req, res) {
    try {
        let contratantes = await buscarContratantesPorTipoPessoa(req.body.tipoPessoa);

        if (contratantes.length === 0) {
            return res.status(404).send({ erro: "Não há contratantes cadastrados para o filtro informado" });
        }

        res.send(contratantes);
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

// POST: 201 ou 400
export async function criar(req, res) {
    try {
        let contratante = await criarContratante(req.body);
        res.status(201).send(contratante);
    } catch (erro) {
        // Erro de validação do Schema (ou de uma regra do service)
        res.status(400).send({ erro: erro.message });
    }
}

// PUT: 200, 404 ou 400
export async function atualizar(req, res) {
    try {
        let contratante = await atualizarContratante(req.params.id, req.body);

        if (contratante === null) {
            return res.status(404).send({ erro: "Contratante não encontrado" });
        }

        res.send({ mensagem: "Contratante atualizado" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

// DELETE: 200, 404 ou 400
export async function remover(req, res) {
    try {
        let contratante = await removerContratante(req.params.id);

        if (contratante === null) {
            return res.status(404).send({ erro: "Contratante não encontrado" });
        }

        res.send({ mensagem: "Contratante removido" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}