import { Router } from "express";
import { actualizarTareaPorID, borrarTareaPorID, crearTarea, listarTarea, listarTareaPorID } from "../controllers/tareas.controllers.js";
import validacionTarea from "../middlewares/validarTarea.js";
import validarId from "../middlewares/validarIds.js";

const router = Router();

router.route("/").post(validacionTarea ,crearTarea).get(listarTarea);
router.route("/:id").get(validarId ,listarTareaPorID).delete(validarId, borrarTareaPorID).put([validarId, validacionTarea], actualizarTareaPorID);

export default router;