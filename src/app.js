import express from "express";
import { registrarLog } from "./middlewares/registrarLog.js";
import { usuarioRoutes } from "./routes/usuarioRoutes.js";
import { servicoRoutes } from "./routes/servicoRoutes.js";
import { prestadorRoutes } from "./routes/prestadorRoutes.js";
import { contratanteRoutes } from "./routes/contratanteRoutes.js"

let router = express();

router.use(express.json());

// router.use aplica o middleware em TODAS as rotas
router.use(registrarLog);

// Rotas: cada recurso cadastra as suas
usuarioRoutes(router);
servicoRoutes(router);
prestadorRoutes(router);
contratanteRoutes(router);

export default router;