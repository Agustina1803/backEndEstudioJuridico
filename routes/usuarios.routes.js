import { Router } from 'express';
import { obtenerUsuarios, crearUsuario, obtenerUsuarioPorId, eliminarUsuario, actualizarUsuario } from '../controllers/usuarios.controllers.js';
import { get } from 'mongoose';

const router = Router();

// Importar los controladores

router.route('/').get(obtenerUsuarios).post(crearUsuario);
router.route('/:id').get(obtenerUsuarioPorId).delete(eliminarUsuario).put(actualizarUsuario);
export default router;
