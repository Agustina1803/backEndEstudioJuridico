import { Router } from "express";
import {crearFacturacion, editarFacturacion, eliminarFacturacion, listaFacturacion, obtenerFacturacionPorId } from "../controllers/facturacion.controllers.js";

const router = Router();

router.route("/").post(crearFacturacion).get(listaFacturacion);
router.route("/:id").get(obtenerFacturacionPorId).delete(eliminarFacturacion).put(editarFacturacion);


export default router;