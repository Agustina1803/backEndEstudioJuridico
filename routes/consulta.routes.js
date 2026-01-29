import {Router} from 'express';
import { crearConsulta, listarConsulta, listarNoLeidas,marcarConsultasLeidas  } from '../controllers/consulta.controllers.js';
import validacionConsulta from '../middlewares/validarConsulta.js'; 


const router = Router();

router.route("/").post(validacionConsulta, crearConsulta).get(listarConsulta);
router.get("/no-leidas", listarNoLeidas); router.put("/marcar-leidas", marcarConsultasLeidas);

export default router;