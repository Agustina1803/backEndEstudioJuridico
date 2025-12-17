import { Router } from "express";
import { crearSubirArchivo,listaSubirArchivo,obtenerSubirArchivoPorId,eliminarSubirArchivo,editarSubirArchivo} from "../controllers/subirArchivo.controllers.js";
import validarSubirArchivo from '../middlewares/validarSubirArchivo.js';
import validarIds from "../middlewares/validarIds.js"
import verficarJWT from "../middlewares/verificarJWT.js";
import multer from "multer";

const router = Router();
const upload = multer({dest:"uploads/"});

router.route("/").post([verficarJWT,upload.single("file"),validarSubirArchivo], crearSubirArchivo).get(listaSubirArchivo);
router.route("/:id").get(validarIds, obtenerSubirArchivoPorId).delete([verficarJWT,validarIds], eliminarSubirArchivo).put([verficarJWT,validarIds, validarSubirArchivo], editarSubirArchivo);



export default router;