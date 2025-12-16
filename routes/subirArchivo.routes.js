import { Router } from "express";
import { crearSubirArchivo,listaSubirArchivo,obtenerSubirArchivoPorId,eliminarSubirArchivo,editarSubirArchivo} from "../controllers/subirArchivo.controllers.js";
import validarSubirArchivo from '../middlewares/validarSubirArchivo.js';
import validarIds from "../middlewares/validarIds.js"
import verficarJWT from "../middlewares/verificarJWT.js";

const router = Router();
router.route("/").post([verficarJWT,validarSubirArchivo], crearSubirArchivo).get(listaSubirArchivo);
router.route("/:id").get(validarIds, obtenerSubirArchivoPorId).delete([verficarJWT,validarIds], eliminarSubirArchivo).put([verficarJWT,validarIds, validarSubirArchivo], editarSubirArchivo);



export default router;