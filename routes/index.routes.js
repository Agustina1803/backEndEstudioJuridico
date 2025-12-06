import { Router } from "express";
import clienteRouter from "./cliente.routes.js"

const router = Router();

router.use("/clientes", clienteRouter)

export default router;