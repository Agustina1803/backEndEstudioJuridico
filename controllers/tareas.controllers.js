import Tarea from "../models/tarea";

export const crearTarea = async (req, res) =>{
    try{
        const crearTareas = new Tarea(req.body);
        await crearTareas.save();
        res.status(201).json({mensaje:"La tarea fue creada con exito"});
    }catch(error){
        console.error(error);
        res.status(500).json({mensaje:"Erorr en el servidor al crear el archivo"})

    }
} 