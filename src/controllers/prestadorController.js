import {
    listarPrestadores,
    buscarPrestadorPorId,
    buscarPrestadoresAtivos,
    buscarPrestadoresPorTipoPessoa,
    buscarPrestadoresPorCategoriaId,
    buscarPrestadoresPorCategoriaNome,
    criarPrestador,
    atualizarPrestador,
    removerPrestador
} from "../services/prestadorService.js";

// Controller: recebe req e res, chama o service e responde

// GET: lista todos (200)
// async: necessário para usar o await dentro da função
export async function listar(req, res) {
    let prestadores = await listarPrestadores();
    res.send(prestadores);
}

// GET por id: 200, 404 ou 400
export async function buscarPorId(req, res) {
    try {
        let prestador = await buscarPrestadorPorId(req.params.id);

        if (prestador === null) {
            return res.status(404).send({ erro: "Prestador não encontrado" });
        }

        res.send(prestador);
    } catch (erro) {
        // _id com formato errado
        res.status(400).send({ erro: erro.message });
    }
}

export async function buscarAtivos(req, res) {
    try {
        let prestadores = await buscarPrestadoresAtivos();

        if (prestadores.length === 0) {
            return res.status(404).send({ erro: "Não há prestadores cadastrados para o filtro informado" });
        }

        res.send(prestadores);
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

export async function buscarPorTipoPessoa(req, res) {
    try {
        let prestadores = await buscarPrestadoresPorTipoPessoa(req.body.tipoPessoa);

        if (prestadores.length === 0) {
            return res.status(404).send({ erro: "Não há prestadores cadastrados para o filtro informado" });
        }

        res.send(prestadores);
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

export async function buscarPorCategoriaId(req, res) {
    try {
        let prestadores = await buscarPrestadoresPorCategoriaId(req.body?.categoria?.id);

        if (prestadores.length === 0) {
            return res.status(404).send({ erro: "Não há prestadores cadastrados para o filtro informado" });
        }

        res.send(prestadores);
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

export async function buscarPorCategoriaNome(req, res) {
    try {
        let prestadores = await buscarPrestadoresPorCategoriaNome(req.body?.categoria?.nome);

        if (prestadores.length === 0) {
            return res.status(404).send({ erro: "Não há prestadores cadastrados para o filtro informado" });
        }

        res.send(prestadores);
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

// POST: 201 ou 400
export async function criar(req, res) {
    try {
        let prestador = await criarPrestador(req.body);
        res.status(201).send(prestador);
    } catch (erro) {
        // Erro de validação do Schema (ou de uma regra do service)
        res.status(400).send({ erro: erro.message });
    }
}

// PUT: 200, 404 ou 400
export async function atualizar(req, res) {
    try {
        let prestador = await atualizarPrestador(req.params.id, req.body);

        if (prestador === null) {
            return res.status(404).send({ erro: "Prestador não encontrado" });
        }

        res.send({ mensagem: "Prestador atualizado" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

// DELETE: 200, 404 ou 400
export async function remover(req, res) {
    try {
        let prestador = await removerPrestador(req.params.id);

        if (prestador === null) {
            return res.status(404).send({ erro: "Prestador não encontrado" });
        }

        res.send({ mensagem: "Prestador removido" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}