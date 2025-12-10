import Tarea from "../models/tarea.js";

export const crearTarea = async (req, res) => {
  try {
    const crearTareas = new Tarea(req.body);
    await crearTareas.save();
    res.status(201).json({ mensaje: "La tarea fue creada con exito" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Erorr en el servidor al crear el archivo" });
  }
};

export const listarTarea = async (req, res) => {
  try {
    const listaDeTarea = await Tarea.find();
    res.status(200).json(listaDeTarea);
  } catch (error) {
    res.status(500).json({
      message: "Error en el servidor al obtener los usuarios",
    });
  }
};

export const listarTareaPorID = async (req, res) => {
  try {
    const listaDeTareaPorID = await Tarea.findById(req.params.id);
    if (!listaDeTareaPorID) {
      return res.status(404).json({ mensaje: "Tarea no encontrado" });
    }
    res.status(200).json(listaDeTareaPorID);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Error en el servidor al obtener los usuarios "
    });
  }
};

export const borrarTareaPorID = async (req, res) => {
  try {
    const tareaBorrada = await Tarea.findByIdAndDelete(req.params.id);
    if (!tareaBorrada) {
      return res.status(404).json({
        mensaje: "Tarea no encontrada por ese ID",
      });
    }
    res.status(200).json({
      mensaje: "Tarea eliminada con exito",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ mensaje: "Error en el servidor al obtener los usuarios" });
  }
};
