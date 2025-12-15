import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";


const validarFactura = [

    body("fecha")
        .notEmpty()
        .withMessage("La fecha es obligatoria")
        .custom((valor) => {
            const fecha = new Date(valor);
            const day = fecha.getDay();
            if (day < 1 || day > 5) {
                throw new Error(
                    `El dia ${fecha.toDateString()} no es un dia habil`
                );
            }
            return true;
        }),

    body("nombreCliente")
        .notEmpty()
        .withMessage("El nombre del cliente es obligatorio")
        .isLength({ min: 10, max: 30 })
        .withMessage("El nombre del cliente debe tener entre 10 a 30 caracteres "),

    body("concepto")
        .notEmpty()
        .withMessage("El concepto es obligatorio")
        .isLength({ min: 15, max: 50 })
        .withMessage("El concepto debe tener entre 15 a 50 caracteres "),


    body("seleccionarArchivo")
        .notEmpty()
        .withMessage("El archivo es obligatorio"),
]

