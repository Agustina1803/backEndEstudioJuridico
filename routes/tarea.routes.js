import { Router } from "express";
import { actualizarTareaPorID, borrarTareaPorID, crearTarea, listarTarea, listarTareaPorID } from "../controllers/tareas.controllers.js";

const router = Router();

router.route("/").post(crearTarea).get(listarTarea);
router.route("/:id").get(listarTareaPorID).delete(borrarTareaPorID).put(actualizarTareaPorID);

export default router;