import { Router } from 'express';
import { obtenerUsuarios, crearUsuario, obtenerUsuarioPorId, eliminarUsuario, actualizarUsuario } from '../controllers/usuarios.controllers.js';
import validacionUsuario from '../middlewares/validarUsuario.js';
import validarIds from "../middlewares/validarIds.js"

const router = Router();

// Importar los controladores

router.route('/').get(obtenerUsuarios).post([validacionUsuario], crearUsuario);
router.route('/:id').get(validarIds ,obtenerUsuarioPorId).delete([validarIds] ,eliminarUsuario).put([validarIds, validacionUsuario] ,actualizarUsuario);
export default router;
