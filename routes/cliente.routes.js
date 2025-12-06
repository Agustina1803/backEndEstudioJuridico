import { Router } from "express";
import { crearCliente, obtenerClientePorId, obtenerClientes } from "../controllers/cliente.controllers.js";




const router = Router();

router.route("/").post(crearCliente).get(obtenerClientes);
router.route("/:id").get(obtenerClientePorId);

export default router;