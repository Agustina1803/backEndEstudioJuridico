import { Router } from "express";
import citaRoutes from "./cita.routes.js";
import clienteRouter from "./cliente.routes.js"

const router = Router();

router.use("/citas", citaRoutes )
router.use("/clientes", clienteRouter)

export default router;