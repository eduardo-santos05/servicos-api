import {
    listar,
    buscarPorId,
    buscarPorCategoriaId,
    buscarPorCategoriaNome,
    buscarPorTag,
    buscarPorModalidadeAtendimento,
    buscarPorStatus,
    criar,
    atualizar,
    remover
} from "../controllers/servicoController.js";

// Recebe o router do app.js e cadastra as rotas de itens
export function servicoRoutes(router) {
    router.get("/servicos", listar);
    router.get("/servicos/:id", buscarPorId);
    router.get("/servicos", buscarPorCategoriaId);
    router.get("/servicos", buscarPorCategoriaNome);
    router.get("/servicos", buscarPorTag);
    router.get("/servicos", buscarPorModalidadeAtendimento);
    router.get("/servicos", buscarPorStatus);
    router.post("/servicos", criar);
    router.put("/servicos/:id", atualizar);
    router.delete("/servicos/:id", remover);
}