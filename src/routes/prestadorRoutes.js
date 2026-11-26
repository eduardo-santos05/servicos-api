import {
    listar,
    buscarPorId,
    buscarAtivos,
    buscarPorTipoPessoa,
    buscarPorCategoriaId,
    buscarPorCategoriaNome,
    criar,
    atualizar,
    remover
} from "../controllers/prestadorController.js";

// Recebe o router do app.js e cadastra as rotas de itens
export function prestadorRoutes(router) {
    router.get("/prestadores", listar);
    router.get("/prestadores/:id", buscarPorId);
    router.get("/prestadores", buscarAtivos);
    router.get("/prestadores", buscarPorTipoPessoa);
    router.get("/prestadores", buscarPorCategoriaId);
    router.get("/prestadores", buscarPorCategoriaNome);
    router.post("/prestadores", criar);
    router.put("/prestadores/:id", atualizar);
    router.delete("/prestadores/:id", remover);
}