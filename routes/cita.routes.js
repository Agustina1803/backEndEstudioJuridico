import { Router } from "express";
import { crearCita, listarCita, listarCitaId } from "../controllers/cita.controllers.js";


const router = Router();

router.route("/").post(crearCita).get(listarCita);
router.route("/:id").get(listarCitaId);

export default router;