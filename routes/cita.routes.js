import { Router } from "express";
import { crearCita, listarCita } from "../controllers/cita.controllers.js";


const router = Router();

router.route("/").post(crearCita).get(listarCita);

export default router;