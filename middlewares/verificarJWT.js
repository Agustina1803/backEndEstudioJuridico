import jwt from "jsonwebtoken"

const verficarJWT = (req, res, next) =>{
    try{
        const token = req.headers["x-token"];
        if(!token){
            return res.status(401).json({mensaje:"No se envio un token"})
        }
        const payload = jwt.verify(token, process.env.SECRET_JWT);
        req.email = payload.email;
       // req.formBasicPassword = payload.formBasicPassword;
        req.role = payload.role;
        
        next();
    }catch(error){
        console.error(error.mensaje);
        res.status(401).json({mensaje:"Error al verificar el token"})
    }
}

export default verficarJWT;