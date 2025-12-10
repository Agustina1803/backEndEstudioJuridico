import { Router } from "express";
import citaRoutes from "./cita.routes.js";
import clienteRouter from "./cliente.routes.js"
import usuarioRouter from "./usuarios.routes.js"
import subirArchivoRouter from "./subirArchivo.routes.js";
import facturacionRouter from "./facturacion.routes.js";


const router = Router();

router.use("/citas", citaRoutes)
router.use("/clientes", clienteRouter)
router.use("/usuarios", usuarioRouter);
router.use("/subirArchivos", subirArchivoRouter);

router.use("/facturacion", facturacionRouter);


export default router;