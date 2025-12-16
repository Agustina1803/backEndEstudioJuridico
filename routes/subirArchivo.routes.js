import { Router } from "express";
import { crearSubirArchivo,listaSubirArchivo,obtenerSubirArchivoPorId,eliminarSubirArchivo,editarSubirArchivo} from "../controllers/subirArchivo.controllers.js";
import validarSubirArchivo from '../middlewares/validarSubirArchivo.js';
import validarIds from "../middlewares/validarIds.js"

const router = Router();
router.route("/").post(validarSubirArchivo, crearSubirArchivo).get(listaSubirArchivo);
router.route("/:id").get(validarIds, obtenerSubirArchivoPorId).delete(validarIds, eliminarSubirArchivo).put([validarIds, validarSubirArchivo], editarSubirArchivo);



export default router;