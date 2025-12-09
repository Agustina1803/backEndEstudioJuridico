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