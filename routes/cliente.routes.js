import { Router } from "express";
import {
  crearCliente,
  editarCliente,
  eliminarCliente,
  obtenerClientePorId,
  obtenerClientes,
} from "../controllers/cliente.controllers.js";
import validacionCliente from "../middlewares/validarCliente.js";
import validarId from "../middlewares/validarIds.js"

const router = Router();

router.route("/").post(validacionCliente, crearCliente).get(obtenerClientes);
router.route("/:id").get(validarId, obtenerClientePorId).delete(validarId, eliminarCliente).put([validarId, validacionCliente],editarCliente);

export default router;
