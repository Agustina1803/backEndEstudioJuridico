import { Router } from "express";
import { crearSubirArchivo,listaSubirArchivo,obtenerSubirArchivoPorId} from "../controllers/subirArchivo.controllers.js";


const router = Router();
router.route("/").post(crearSubirArchivo).get(listaSubirArchivo);
router.route("/:id").get(obtenerSubirArchivoPorId);


export default router;