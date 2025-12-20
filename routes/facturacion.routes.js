import { Router } from "express";
import {crearFacturacion, editarFacturacion, eliminarFacturacion, listaFacturacion, obtenerFacturacionPorId } from "../controllers/facturacion.controllers.js";
import validarFactura from "../middlewares/validarFactura.js";
import validarId from "../middlewares/validarIds.js";
import verficarJWT from "../middlewares/verificarJWT.js";
import multer from "multer";

const router = Router();
const upload = multer({dest:"uploads/"});

router.route("/").post([verficarJWT,upload.single("file"),validarFactura],crearFacturacion).get(listaFacturacion);
router.route("/:id").get(validarId,obtenerFacturacionPorId).delete([verficarJWT,validarId],eliminarFacturacion).put([verficarJWT,validarId,validarFactura],editarFacturacion);


export default router;