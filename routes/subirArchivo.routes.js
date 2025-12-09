import { Router } from "express";
import { crearSubirArchivo } from "../controllers/subirArchivo.controllers.js";


const router = Router();
router.route("/").post(crearSubirArchivo)

export default router;