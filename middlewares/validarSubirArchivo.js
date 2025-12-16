import { body } from "express-validator";
import resultadoValidacion from "./resultadoValidacion.js";

const validarSubirArchivos = [ 
    body("nombreCliente")
        .notEmpty()
        .withMessage("El nombre del cliente es obligatorio")
        .isLength({ min: 10, max: 50 })
        .withMessage("El nombre del cliente debe tener entre 10 y 50 caracteres"),

    body("tipodearchivo")
        .notEmpty()
        .withMessage("El tipo de archivo es obligatorio")
        .isIn(['demanda', 'contrato', 'escrito', 'poder', 'notificacion']),
    
    body("seleccionarArchivo")
        .notEmpty()
        .withMessage("El archivo es obligatorio"),

    body("fecha")
            .notEmpty()
                .withMessage("La fecha es obligatoria")
                .custom((valor) => {
                    const fecha = new Date(valor);
                    const day = fecha.getDay();
                    if (day < 1 || day > 5) {
                        throw new Error(
                            `El día ${fecha.toDateString()} no es un día hábil`
                        );
                    }
                    return true;
                }),

        (req, res, next) => resultadoValidacion(req, res, next),
];  

export default validarSubirArchivos;




