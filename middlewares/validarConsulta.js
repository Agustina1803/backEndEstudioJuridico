import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";


const validacionConsulta = [
  body("nombreConsulta")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .isLength({ min: 5, max: 40 })
    .withMessage("El nombre debe tener entre 5 y 40 caracteres"),
  body("correoConsulta")
    .notEmpty()
    .withMessage("El correo es obligatorio")
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .withMessage("El correo no es válido"),
  body("mensajeConsulta")
    .notEmpty()
    .withMessage("El mensaje es obligatorio")
    .isLength({ min: 10, max: 500 })
    .withMessage("El mensaje debe tener entre 10 y 500 caracteres")
    .trim(),

  (req, res, next) => resultadoValidacion(req, res, next),
];

export default validacionConsulta;