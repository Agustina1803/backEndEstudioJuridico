import { Router } from 'express';
import { obtenerJuicio, crearJuicio, obtenerJuicioPorId, eliminarJuicio, actualizarJuicio } from '../controllers/juicio.controllers.js';
import validacionJuicio from "../middlewares/validarJuicio.js";
import validarId from "../middlewares/validarIds.js";
import verficarJWT from '../middlewares/verificarJWT.js';

const router = Router();

// Importar los controladores

router.route('/').get(obtenerJuicio).post([verficarJWT, validacionJuicio],crearJuicio);
router.route('/:id').get(validarId,obtenerJuicioPorId).delete([verficarJWT, validarId],eliminarJuicio).put([verficarJWT,validarId, validacionJuicio], actualizarJuicio);
export default router;
