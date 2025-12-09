import SubirArchivo from "../models/subirArchivo.js";


//POST
export const crearSubirArchivo = async (req, res) => {
    try {
        const archivoNuevo = new SubirArchivo(req.body);
        await archivoNuevo.save();
        console.log(req.body);
        res.status(201).json({
            mensaje: "El archivo fue subido con exito",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            mensaje: "Error en el servidor al subir el archivo",
        });
    }
};

//get

export const listaSubirArchivo = async (req, res) => {
    try{
        const listaSubirArchivo = await SubirArchivo.find();
        res.status(200).json(listaSubirArchivo);
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "Error al obtener los Archivos"
        })
    }
};

//get por id
export const obtenerSubirArchivoPorId = async (req, res) =>{
    try{
        const obtenerSubirArchivoPorId = await SubirArchivo.findById(req.params.id);
        if(!obtenerSubirArchivoPorId){
            return res.status(404).json({
                mensaje: "El archivo con ese ID no existe"
            });
        }
        res.status(200).json(obtenerSubirArchivoPorId);
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "Error al obtener el archivo por ID"
        })
    }
};