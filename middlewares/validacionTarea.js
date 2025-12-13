import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Usuario from "../models/usuario.js";

const validacionTarea = [
  body("descripcion")
    .notEmpty()
    .withMessage("La descripción de la tarea es obligatoria")
    .isLength({ min: 10, max: 1000 }),
  body("abogado")
    .notEmpty()
    .withMessage("El responsable es obligatorio")
    .custom(async (valor, { req }) => {
      if (!mongoose.Types.ObjectId.isValid(valor)) {
        throw new Error("El ID del abogado no es valido");
      }
      const abogado = await Usuario.findById(valor).select("role");
      if (!abogado) {
        throw new Error("El abogado no existe en la base de datos");
      }

      if (abogado.role !== "abog") {
        throw new Error("El usuario seleccionado no tiene rol de abogado");
      }
      req.abogNombre = abogado.nombre;
      return true;
    }),
];
