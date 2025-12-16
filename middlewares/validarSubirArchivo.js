import multer from 'multer';
import { validationResult } from 'express-validator';
import resultadoValidacion from "./resultadoValidacion.js";

/* const storage = multer.memoryStorage(); */

const validarsubirArchivos = [ /* multer({
  storage,
  fileFilter: (req, file, cb) => {
       const archivosPermitidos = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!archivosPermitidos.includes(file.mimetype)) {
      return cb(new Error('Tipo de archivo no permitido'), false);
    }
    cb(null, true);
  }
})

.single('seleccionarArchivo'),

 */
    body("nombreCliente")
        .notEmpty()
        .withMessage("El nombre del usuario es obligatorio")
        .isLength({ min: 4, max: 50 })
        .withMessage("El nombre del usuario debe tener entre 4 y 50 caracteres"),

    body("tipoDeArchivo")
        .notEmpty()
        .withMessage("El tipo de archivo es obligatorio")
        .isIn(['demanda', 'contrato', 'escrito', 'poder', 'notificacion']),
    (req, res, next) => resultadoValidacion(req, res, next),

    body("seleccionarArchivo")
        .notEmpty()
        .withMessage("El archivo es obligatorio"),
];  

export default validarSubirArchivos;




