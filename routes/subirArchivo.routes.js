import { Router } from "express";
import { crearSubirArchivo,listaSubirArchivo,obtenerSubirArchivoPorId,eliminarSubirArchivo,editarSubirArchivo} from "../controllers/subirArchivo.controllers.js";
/* import validarSubirArchivo from '../middlewares/validarSubirArchivo.js';
import validarIds from "../middlewares/validarIds.js" */

const router = Router();
router.route("/").post(crearSubirArchivo).get(listaSubirArchivo);
router.route("/:id").get(obtenerSubirArchivoPorId).delete(eliminarSubirArchivo).put(editarSubirArchivo);



export default router;