import jwt from "jsonwebtoken"

const generarJWT = (email,formBasicPassword, role) =>{
try{
const payload = {email,formBasicPassword, role}
const token = jwt.sign(payload, process.env.SECRET_JWT, {
    expiresIn: "3h"
});
return token;
}catch(error){
console.error(error);
throw new Error ("Error al general el token")
}
}

export default generarJWT;