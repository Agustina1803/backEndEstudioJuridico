import { Router } from "express";
import citaRoutes from "./cita.routes.js";
import clienteRouter from "./cliente.routes.js"
import usuarioRouter from "./usuarios.routes.js"
import juicioRouter from "./juicios.routes.js"
const router = Router();

router.use("/citas", citaRoutes )
router.use("/clientes", clienteRouter)
router.use("/usuarios", usuarioRouter);
router.use("/juicios", juicioRouter);

export default router;