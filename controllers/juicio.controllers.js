import Juicio from '../models/juicio.js';

//POST
export const crearJuicio = async (req, res) => {
    try {
        const nuevoJuicio = new Juicio(req.body);
        await nuevoJuicio.save();
        res.status(201).json({
            message: 'El Nuevo caso fue creado exitosamente',
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error en el servidor al cargar el nuevo caso',
        });
    }
}

//GET
export const obtenerJuicio = async (req, res) => {
    try {
        const juicios = await Juicio.find();
        res.status(200).json(juicios)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error en el servidor al obtener los juicios',
        });
    }
 
}

//GET by ID
export const obtenerJuicioPorId = async (req, res) => {
    try {
        const juicioporID = await Juicio.findById(req.params.id);
        if (!juicioporID) {
            return res.status(404).json({
                message: 'Caso no encontrado',
            });
        }
        res.status(200).json(juicioporID);

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error en el servidor al obtener el Caso por ID',
        });
    }
}
// DeLETE
export const eliminarJuicio = async (req, res) => {
    try {
const juicioBorrado = await Juicio.findByIdAndDelete(req.params.id);
        if (!juicioBorrado) {
            return res.status(404).json({
                message: 'Caso no encontrado',
            });
        }
        res.status(200).json({
            message: 'Caso eliminado exitosamente',
        });
        
    }catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error en el servidor al eliminar el caso',
        });
    }
}

//UPDATE

export const actualizarJuicio = async (req, res) => {
    try {
        const juicioActualizado = await Juicio.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!juicioActualizado) {
            return res.status(404).json({
                message: 'Caso no encontrado',
            });
                }
        res.status(200).json({
            message: 'Caso actualizado exitosamente',
       
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error en el servidor al actualizar el Caso',
        });
    }
}