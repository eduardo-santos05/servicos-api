// Middleware de log: mostra o método e o caminho de cada requisição
export function registrarLog(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}