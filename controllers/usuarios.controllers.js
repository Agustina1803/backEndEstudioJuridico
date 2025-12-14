import Usuario from '../models/usuario.js';
import bycrypt from "bcrypt";

//POST
export const crearUsuario = async (req, res) => {
    try {
        const saltos = bycrypt.genSaltSync(10);
        const passwordEncriptada = bycrypt.hashSync(
            req.body.formBasicPassword,
            saltos
        );
        req.body.formBasicPassword = passwordEncriptada;
        const nuevoUsuario = new Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json({
            message: 'Usuario creado exitosamente',
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error en el servidor al crear el usuario',
        });
    }
}

//GET
export const obtenerUsuarios = async (req, res) => {
    try {
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios)
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error en el servidor al obtener los usuarios',
        });
    }
 
}

//GET by ID
export const obtenerUsuarioPorId = async (req, res) => {
    try {
        const usuariosporID = await Usuario.findById(req.params.id);
        if (!usuariosporID) {
            return res.status(404).json({
                message: 'Usuario no encontrado',
            });
        }
        res.status(200).json(usuariosporID);

    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error en el servidor al obtener el usuario por ID',
        });
    }
}
// DeLETE
export const eliminarUsuario = async (req, res) => {
    try {
const usurioBorrado = await Usuario.findByIdAndDelete(req.params.id);
        if (!usurioBorrado) {
            return res.status(404).json({
                message: 'Usuario no encontrado',
            });
        }
        res.status(200).json({
            message: 'Usuario eliminado exitosamente',
        });
        
    }catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error en el servidor al eliminar el usuario',
        });
    }
}

//UPDATE

export const actualizarUsuario = async (req, res) => {
    try {
        const usuarioActualizado = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!usuarioActualizado) {
            return res.status(404).json({
                message: 'Usuario no encontrado',
            });
                }
        res.status(200).json({
            message: 'Usuario actualizado exitosamente',
       
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'Error en el servidor al actualizar el usuario',
        });
    }
}