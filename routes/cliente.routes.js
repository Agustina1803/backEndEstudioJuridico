import { Router } from "express";
import { crearCliente, obtenerClientes } from "../controllers/cliente.controllers.js";




const router = Router();

router.route("/").post(crearCliente).get(obtenerClientes);

export default router;