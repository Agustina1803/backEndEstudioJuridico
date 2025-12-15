import multer from 'multer';
import { validationResult } from 'express-validator';
import resultadoValidacion from "./resultadoValidacion.js";

// Configuración de Multer (almacenamiento en memoria o disco)
const storage = multer.memoryStorage();

const validarsubirArchivos = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // límite de 5 MB
  fileFilter: (req, file, cb) => {
    // Validar tipo de archivo
    const archivosPermitidos = ['image/jpeg', 'image/png', 'application/pdf'];
    if (!archivosPermitidos.includes(file.mimetype)) {
      return cb(new Error('Tipo de archivo no permitido'), false);
    }
    cb(null, true);
  }
});

// Middleware para validar errores de Multer y express-validator
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

export { validarsubirArchivos, validarArchivo };



