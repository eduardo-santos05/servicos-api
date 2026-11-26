import {
    listar,
    buscarPorId,
    buscarAtivos,
    buscarPorTipoPessoa,
    criar,
    atualizar,
    remover
} from "../controllers/contratanteController.js";

// Recebe o router do app.js e cadastra as rotas de itens
export function contratanteRoutes(router) {
    router.get("/contratantes", listar);
    router.get("/contratantes/:id", buscarPorId);
    router.get("/contratantes", buscarAtivos);
    router.get("/contratantes", buscarPorTipoPessoa);
    router.post("/contratantes", criar);
    router.put("/contratantes/:id", atualizar);
    router.delete("/contratantes/:id", remover);
}