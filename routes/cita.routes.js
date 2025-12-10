import { Router } from "express";
import { borrarCitaId, crearCita, editarCitaId, listarCita, listarCitaId } from "../controllers/cita.controllers.js";
import validacionCita from "../middlewares/validarCita.js";
import validarId from "../middlewares/validarIds.js";


const router = Router();

router.route("/").post(validacionCita,crearCita).get(listarCita);
router.route("/:id").get(listarCitaId).delete(validarId, borrarCitaId).put([validarId, validacionCita],editarCitaId);

export default router;