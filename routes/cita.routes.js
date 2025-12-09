import { Router } from "express";
import { borrarCitaId, crearCita, listarCita, listarCitaId } from "../controllers/cita.controllers.js";


const router = Router();

router.route("/").post(crearCita).get(listarCita);
router.route("/:id").get(listarCitaId).delete(borrarCitaId);

export default router;