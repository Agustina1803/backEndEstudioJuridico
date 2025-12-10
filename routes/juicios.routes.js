import { Router } from 'express';
import { obtenerJuicio, crearJuicio, obtenerJuicioPorId, eliminarJuicio, actualizarJuicio } from '../controllers/juicio.controllers.js';
import { get } from 'mongoose';

const router = Router();

// Importar los controladores

router.route('/').get(obtenerJuicio).post(crearJuicio);
router.route('/:id').get(obtenerJuicioPorId).delete(eliminarJuicio).put(actualizarJuicio);
export default router;
