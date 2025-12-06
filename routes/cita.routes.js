import { Router } from "express";
import { crearCita } from "../controllers/cita.controllers.js";


const router = Router();

router.route("/").post(crearCita);

export default router;