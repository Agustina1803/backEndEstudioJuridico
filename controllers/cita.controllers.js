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
    const listaCita = await Cita.find().populate(
      "abogado",
      "nombre apellido role"
    );
    const citaTransformada = listaCita.map((cita) => ({
      ...cita._doc,
      fecha: cita.fecha.toISOString().split("T")[0],
    }));
    res.status(200).json(citaTransformada);
  }catch(error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener las citas" });
  }
};

export const listarCitaId = async (req, res) => {
  try {
    const listarCitaId = await Cita.findById(req.params.id).populate(
      "abogado",
      "nombre apellido role"
    );
    if (!listarCitaId) {
      return res.status(404).json({ mensaje: "La cita con ese ID no existe" });
    }
    res.status(200).json(listarCitaId);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al obtener la cita por ID" });
  }
};

export const borrarCitaId = async (req, res) => {
  try {
    const citaBorrada = await Cita.findByIdAndDelete(req.params.id);
    if (!citaBorrada) {
      return res.status(404).json({ mensaje: "La cita con ese ID no existe" });
    }
    res.status(200).json({ mensaje: "La cita fue borrada con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al borrar la cita por ID " });
  }
};

export const editarCitaId = async (req, res) => {
  try {
    const citaEditada = await Cita.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!citaEditada) {
      return res.status(404).json({ mensaje: "La cita con ese ID no existe" });
    }
    res.status(200).json({ mensaje: "Cita editada con éxito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Erorr al actualizar la cita por ID" });
  }
};
