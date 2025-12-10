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
