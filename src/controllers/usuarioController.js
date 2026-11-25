import {
    listarUsuarios,
    buscarUsuarioPorId,
    buscarUsuariosAtivos,
    buscarUsuariosPorPerfil,
    criarUsuario,
    atualizarUsuario,
    removerUsuario,
} from "../services/usuarioService.js";

// Controller: recebe req e res, chama o service e responde

// GET: lista todos (200)
// async: necessário para usar o await dentro da função
export async function listar(req, res) {
    let usuarios = await listarUsuarios();
    res.send(usuarios);
}

// GET por id: 200, 404 ou 400
export async function buscarPorId(req, res) {
    try {
        let usuario = await buscarUsuarioPorId(req.params.id);

        if (usuario === null) {
            return res.status(404).send({ erro: "Usuário não encontrado" });
        }

        res.send(usuario);
    } catch (erro) {
        // _id com formato errado
        res.status(400).send({ erro: erro.message });
    }
}

export async function buscarAtivos(req, res) {
    try {
        let usuarios = await buscarUsuariosAtivos();

        if (usuarios.length === 0) {
            return res.status(404).send({ erro: "Não há usuários cadastrados para o filtro informado" });
        }

        res.send(usuarios);
    } catch (erro) {
        // _id com formato errado
        res.status(400).send({ erro: erro.message });
    }
}

export async function buscarPorPerfil(req, res) {
    try {
        let usuarios = await buscarUsuariosPorPerfil(req.body.perfil);

        if (usuarios.length === 0) {
            return res.status(404).send({ erro: "Não há usuários cadastrados para o filtro informado" });
        }

        res.send(usuarios);
    } catch (erro) {
        // _id com formato errado
        res.status(400).send({ erro: erro.message });
    }
}

// POST: 201 ou 400
export async function criar(req, res) {
    try {
        let usuario = await criarUsuario(req.body);
        res.status(201).send(usuario);
    } catch (erro) {
        // Erro de validação do Schema (ou de uma regra do service)
        res.status(400).send({ erro: erro.message });
    }
}

// PUT: 200, 404 ou 400
export async function atualizar(req, res) {
    try {
        let usuario = await atualizarUsuario(req.params.id, req.body);

        if (usuario === null) {
            return res.status(404).send({ erro: "Usuário não encontrado" });
        }

        res.send({ mensagem: "Usuário atualizado" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

// DELETE: 200, 404 ou 400
export async function remover(req, res) {
    try {
        let usuario = await removerUsuario(req.params.id);

        if (usuario === null) {
            return res.status(404).send({ erro: "Usuário não encontrado" });
        }

        res.send({ mensagem: "Usuário removido" });
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}