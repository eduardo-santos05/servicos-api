import {
    listar,
    buscarPorId,
    buscarAtivos,
    buscarPorPerfil,
    criar,
    atualizar,
    remover
} from "../controllers/usuarioController.js";

// Recebe o router do app.js e cadastra as rotas de itens
export function usuarioRoutes(router) {
    router.get("/usuarios", listar);
    router.get("/usuarios/:id", buscarPorId);
    router.get("/usuarios", buscarAtivos);
    router.get("/usuarios", buscarPorPerfil)
    router.post("/usuarios", criar);
    router.put("/usuarios/:id", atualizar);
    router.delete("/usuarios/:id", remover);
}