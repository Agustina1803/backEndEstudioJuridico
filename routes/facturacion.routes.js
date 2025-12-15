import { Router } from "express";
import {crearFacturacion, editarFacturacion, eliminarFacturacion, listaFacturacion, obtenerFacturacionPorId } from "../controllers/facturacion.controllers.js";
import validarFactura from "../middlewares/validarFactura.js";
import validarId from "../middlewares/validarIds.js";


const router = Router();

router.route("/").post(validarFactura,crearFacturacion).get(listaFacturacion);
router.route("/:id").get(validarId,obtenerFacturacionPorId).delete(validarId,eliminarFacturacion).put([validarId,validarFactura],editarFacturacion);


export default router;