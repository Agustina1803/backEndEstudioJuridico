import Cita from "../models/cita.js";


export const crearCita = async (req, res) => {
  try {
    const citaNueva = new Cita(req.body);
    await citaNueva.save();
    res.status(201).json({
      mensaje: "Cita creada exitosamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al crear la cita",
    });
  }
};


export const listarCita = async (req, res) => {
  try {
    const listaCita = await Cita.find();
    res.status(200).json(listaCita);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener los productos" });
  }
};


export const listarCitaId = async (req, res) => {
  try {
    const listarCitaId = await Cita.findById(req.params.id);
    if (!listarCitaId) {
      return res
        .status(404)
        .json({ mensaje: "El producto con ese ID no existe" });
    }
    res.status(200).json(listarCitaId);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener el producto por ID" });
  }
};


