import { Router } from "express";
import {crearFacturacion } from "../controllers/facturacion.controllers.js";

const router = Router();

router.route("/").post(crearFacturacion);

export default router;