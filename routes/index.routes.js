import { Router } from "express";
import citaRoutes from "./cita.routes.js";
import clienteRouter from "./cliente.routes.js"
import usuarioRouter from "./usuarios.routes.js"
import subirArchivoRouter from "./subirArchivo.routes.js";
import tareaRouter from "./tarea.routes.js"
import facturacionRouter from "./facturacion.routes.js";
import juicioRouter from "./juicios.routes.js";
import consultasRouter from "./consulta.routes.js";

const router = Router();
router.use("/citas", citaRoutes)
router.use("/clientes", clienteRouter)
router.use("/usuarios", usuarioRouter);
router.use("/subirArchivos", subirArchivoRouter);
router.use("/tarea", tareaRouter);
router.use("/facturacion", facturacionRouter);
router.use("/juicios", juicioRouter);
router.use("/consultas", consultasRouter);

export default router;