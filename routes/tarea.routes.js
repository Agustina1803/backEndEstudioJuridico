import { Router } from "express";
import { crearTarea, listarTarea, listarTareaPorID } from "../controllers/tareas.controllers.js";

const router = Router();

router.route("/").post(crearTarea).get(listarTarea);
router.route("/:id").get(listarTareaPorID);

export default router;