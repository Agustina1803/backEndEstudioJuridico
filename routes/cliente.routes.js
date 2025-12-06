import { Router } from "express";
import { crearCliente, editarCliente, eliminarCliente, obtenerClientePorId, obtenerClientes } from "../controllers/cliente.controllers.js";




const router = Router();

router.route("/").post(crearCliente).get(obtenerClientes);
router.route("/:id").get(obtenerClientePorId).delete(eliminarCliente).put(editarCliente);

export default router;