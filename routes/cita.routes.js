import { Router } from "express";
import { borrarCitaId, crearCita, editarCitaId, listarCita, listarCitaId } from "../controllers/cita.controllers.js";


const router = Router();

router.route("/").post(crearCita).get(listarCita);
router.route("/:id").get(listarCitaId).delete(borrarCitaId).put(editarCitaId);

export default router;