import { Router } from 'express';
import { obtenerUsuarios, crearUsuario } from '../controllers/usuario.controllers.js';

const router = Router();

// Importar los controladores

router.route('/').get(obtenerUsuarios).post(crearUsuario);
export default router;
