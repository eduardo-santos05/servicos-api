import {
    listarServicos,
    buscarServicoPorId,
    buscarServicosPorCategoriaId,
    buscarServicosPorCategoriaNome,
    buscarServicosPorTag,
    buscarServicosPorModalidadeAtendimento,
    buscarServicosPorStatus,
    criarServico,
    atualizarServico,
    removerServico
} from "../services/servicoService.js";

// Controller: recebe req e res, chama o service e responde

// GET: lista todos (200)
// async: necessário para usar o await dentro da função
export async function listar(req, res) {
    let servicos = await listarServicos();
    res.send(servicos);
}

// GET por id: 200, 404 ou 400
export async function buscarPorId(req, res) {
    try {
        let servico = await buscarServicoPorId(req.params.id);

        if (servico === null) {
            return res.status(404).send({ erro: "Serviço não encontrado" });
        }

        res.send(servico);
    } catch (erro) {
        // _id com formato errado
        res.status(400).send({ erro: erro.message });
    }
}

export async function buscarPorCategoriaId(req, res) {
    try {
        let servicos = await buscarServicosPorCategoriaId(req.body?.categoria?.id);

        if (servicos.length === 0) {
            return res.status(404).send({ erro: "Não há serviços cadastrados para o filtro informado" });
        }

        res.send(servicos);
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

export async function buscarPorCategoriaNome(req, res) {
    try {
        let servicos = await buscarServicosPorCategoriaNome(req.body?.categoria?.nome);

        if (servicos.length === 0) {
            return res.status(404).send({ erro: "Não há serviços cadastrados para o filtro informado" });
        }

        res.send(servicos);
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

export async function buscarPorTag(req, res) {
    try {
        let servicos = await buscarServicosPorTag(req.body.tag);

        if (servicos.length === 0) {
            return res.status(404).send({ erro: "Não há serviços cadastrados para o filtro informado" });
        }

        res.send(servicos);
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

export async function buscarPorModalidadeAtendimento(req, res) {
    try {
        let servicos = await buscarServicosPorModalidadeAtendimento(req.body.modalidade);

        if (servicos === null) {
            return res.status(404).send({ erro: "Não há serviços cadastrados para o filtro informado" });
        }

        res.send(servicos);
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

export async function buscarPorStatus(req, res) {
    try {
        let servicos = await buscarServicosPorStatus(req.body.status);

        if (servicos.length === 0) {
            return res.status(404).send({ erro: "Não há serviços cadastrados para o filtro informado" });
        }

        res.send(servicos);
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

// POST: 201 ou 400
export async function criar(req, res) {
    try {
        let servico = await criarServico(req.body);
        res.status(201).send(servico);
    } catch (erro) {
        // Erro de validação do Schema (ou de uma regra do service)
        res.status(400).send({ erro: erro.message });
    }
}

// PUT: 200, 404 ou 400
export async function atualizar(req, res) {
    try {
        let servico = await atualizarServico(req.params.id, req.body);

        if (servico === null) {
            return res.status(404).send({ erro: "Serviço não encontrado" });
        }

        res.send({ mensagem: "Serviço atualizado" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

// DELETE: 200, 404 ou 400
export async function remover(req, res) {
    try {
        let servico = await removerServico(req.params.id);

        if (servico === null) {
            return res.status(404).send({ erro: "Serviço não encontrado" });
        }

        res.send({ mensagem: "Serviço removido" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}