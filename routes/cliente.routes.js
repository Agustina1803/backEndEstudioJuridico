import { Router } from "express";
import { crearCliente } from "../controllers/cliente.controllers.js";




const router = Router();

router.route("/").post(crearCliente);

export default router;