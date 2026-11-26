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
    router.post("/prestadores/ativos", buscarAtivos);
    router.post("/prestadores/filtrar-por-tipo-pessoa", buscarPorTipoPessoa);
    router.post("/prestadores/filtrar-por-id-da-categoria", buscarPorCategoriaId);
    router.post("/prestadores/filtrar-por-nome-da-categoria", buscarPorCategoriaNome);
    router.post("/prestadores", criar);
    router.put("/prestadores/:id", atualizar);
    router.delete("/prestadores/:id", remover);
}