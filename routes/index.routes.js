import { Router } from "express";
import clienteRouter from "./cliente.routes.js"
import usuarioRouter from "./usuarios.routes.js"
const router = Router();

router.use("/clientes", clienteRouter);
router.use("/usuarios", usuarioRouter);

export default router;