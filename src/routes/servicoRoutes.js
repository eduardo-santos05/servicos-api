import {
    listar,
    buscarPorId,
    buscarPorCategoriaId,
    buscarPorCategoriaNome,
    buscarPorTags,
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
    router.post("/servicos/filtrar-por-id-da-categoria", buscarPorCategoriaId);
    router.post("/servicos/filtrar-por-nome-da-categoria", buscarPorCategoriaNome);
    router.post("/servicos/filtrar-por-tags", buscarPorTags);
    router.post("/servicos/filtrar-por-modalidade-de-atendimento", buscarPorModalidadeAtendimento);
    router.post("/servicos/filtrar-por-status", buscarPorStatus);
    router.post("/servicos", criar);
    router.put("/servicos/:id", atualizar);
    router.delete("/servicos/:id", remover);
}