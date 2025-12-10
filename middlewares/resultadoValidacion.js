import {validationResult} from "express-validation";

const resultadoValidacion = (req, res, next) =>{
    const errorDeValidacion = validationResult(req);
    if(!errorDeValidacion.isEmpy()){
        return res.status(400).json(errorDeValidacion.array());
    } next();
}

export default resultadoValidacion;