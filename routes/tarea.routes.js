import { Router } from "express";
import { crearTarea, listarTarea } from "../controllers/tareas.controllers.js";

const router = Router();

router.route("/").post(crearTarea).get(listarTarea);

export default router;