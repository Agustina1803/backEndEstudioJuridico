import multer from 'multer';
import { validationResult } from 'express-validator';
import resultadoValidacion from "./resultadoValidacion.js";

const storage = multer.memoryStorage();

const validarsubirArchivos = multer({
  storage,
  fileFilter: (req, file, cb) => {
       const archivosPermitidos = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!archivosPermitidos.includes(file.mimetype)) {
      return cb(new Error('Tipo de archivo no permitido'), false);
    }
    cb(null, true);
  }
});

const validarArchivo = (req, res, next) => {
  const errors = validationResult(req);

  if (!req.file) {
    return res.status(400).json({ error: 'Debes subir un archivo' });
  }

  if (!errors.isEmpty()) {
    return res.status(400).json({ errores: errors.array() });
  }

  next();
};

export default { validarsubirArchivos, validarArchivo };



