import { Router } from "express";
import { crearSubirArchivo,listaSubirArchivo,obtenerSubirArchivoPorId,eliminarSubirArchivo,editarSubirArchivo} from "../controllers/subirArchivo.controllers.js";


const router = Router();
router.route("/").post(crearSubirArchivo).get(listaSubirArchivo);
router.route("/:id").get(obtenerSubirArchivoPorId).delete(eliminarSubirArchivo).put(editarSubirArchivo);



export default router;