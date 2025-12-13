import {body} from "express-validator"
import resultadoValidacion from "./resultadoValidacion.js"
import Usuario from "../models/usuario.js"


const validacionUsuario = [
    body("nombre")
    .notEmpty()
    .withMessage("El nombre del usuario es obligatorio")
    .isLength({min:4, max:30})
    .withMessage("El nombre del usuario debe tener entre 4 y 30 caracteres"),
    body("apellido")
    .notEmpty()
    .withMessage("El apellido del usuario es obligatorio")
    .isLength({min:4, max:30})
    .withMessage("El apellido del usuario debe tener entre 4 y 30 caracteres"),
    body("email")
    .notEmpty()
    .withMessage("El email del usuario es obligatorio")
    .isEmail()
    .withMessage("El email del usuario debe tener un formato valido")
    .custom(async(valor, {req})=>{
        const existeEmail = await Usuario.findOne({
            email: valor
        })
        if(!existeEmail){
            return true
        }
        if(req.params.id && req.params.is.toString() === existeEmail._id.toString()){
            return true
        }
        throw new Errror ("Ya existe un usuario registrado con ese email, no pueden ser duplicados")
    }),
]