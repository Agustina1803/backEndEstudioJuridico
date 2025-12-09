import { Router } from "express";
import clienteRouter from "./cliente.routes.js"
import subirArchivoRouter from "./subirArchivo.routes.js";

const router = Router();

router.use("/clientes", clienteRouter);

router.use("/subirArchivos", subirArchivoRouter);


export default router;