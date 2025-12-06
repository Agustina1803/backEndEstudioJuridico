import Cita from "../models/cita.js";

// FUNCION PARA CREAR UNA CITA
export const crearCita = async (req, res) =>{
try{
    const citaNueva = new Cita(req.body);
    await citaNueva.save();
    res.status(201).json({
        mensaje: "Cita creada exitosamente"
    });
}catch(error){
    console.error(error);
    res.status(500).json({
        mensaje: "Error al crear la cita"
    });
}
}