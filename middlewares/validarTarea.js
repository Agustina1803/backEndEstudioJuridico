import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";
import Usuario from "../models/usuario.js";
import Tarea from "../models/tarea.js"
import mongoose from "mongoose";

const validacionTarea = [
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
  body("fecha")
    .notEmpty()
    .withMessage("La fecha de la tarea es obligatoria")
    .custom((valor) => {
      const fecha = new Date(valor);
      const day = fecha.getDay();
      if (day < 1 || day > 5) {
        throw new Error(`El dia ${fecha.toDateString()} no es un dia habil`);
      }
      return true;
    }),
  body("prioridad")
    .notEmpty()
    .withMessage("La prioridad de la tarea es obligatoria")
    .isIn(["alta", "media", "baja"]),
  body("estado")
    .notEmpty()
    .withMessage("El estado de la tarea es obligatoria")
    .isIn(["Pendiente", "Proceso", "Completada", "Cancelada", "Reprogramada"]),
  body("descripcion")
    .notEmpty()
    .withMessage("La descripción de la tarea es obligatoria")
    .isLength({ min: 10, max: 1000 })
    .withMessage(
      "La descipcion de la tarea debe tener como minimo 10 y como maximo 1000 caracteres"
    )
    .custom(async (valor, { req }) => {
      const { abogado, fecha, prioridad, estado } = req.body;
      const tareaExistente = await Tarea.findOne({
        descripcion: valor,
        abogado,
        fecha,
        prioridad,
        estado,
      });
      if (tareaExistente) {
        throw new Error("Ya existe una tarea con los mismos datos");
      }
      return true;
    }),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionTarea;
