import Consulta from "../models/consultas.js";

export const crearConsulta = async (req, res) => {
  try {
    const consultaNueva = new Consulta(req.body);
    await consultaNueva.save();
    res.status(201).json({
      mensaje: "Consulta creada exitosamente",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      mensaje: "Error al crear la consulta",
    });
  }
};

export const listarConsulta = async (req, res) => {
  try {
    const { fecha } = req.query;
    const filtro = {};
    if (fecha) {
      const fechaInicio = new Date(`${fecha}T00:00:00-03:00`);
      const fechaFin = new Date(`${fecha}T23:59:59-03:00`);
      filtro.creadoEn = { $gte: fechaInicio, $lte: fechaFin };
    }
    const listaConsulta = await Consulta.find(filtro);
    const consultaTransformada = listaConsulta.map((consulta) => ({
      _id: consulta._id,
      nombreConsulta: consulta.nombreConsulta,
      correoConsulta: consulta.correoConsulta,
      mensajeConsulta: consulta.mensajeConsulta,
      fechaConsulta: consulta.creadoEn
        ? consulta.creadoEn.toLocaleDateString("es-AR")
        : "",
    }));
    res.status(200).json(consultaTransformada);
  } catch (error) {
    console.error("Error en listarConsulta:", error);
    res.status(500).json({ mensaje: "Error al obtener las consultas" });
  }
};

export const listarNoLeidas = async (req, res) => {
  try {
    const listaConsulta = await Consulta.find({ leido: false });
    res.status(200).json(listaConsulta);
  } catch (error) {
    console.error("Error en listarNoLeidas:", error);
    res
      .status(500)
      .json({ mensaje: "Error al obtener las consultas no leídas" });
  }
};

export const marcarConsultasLeidas = async (req, res) => {
  try {
    await Consulta.updateMany({ leido: false }, { $set: { leido: true } });
    res.status(200).json({ mensaje: "Consultas marcadas como leídas" });
  } catch (error) {
    console.error("Error en marcarConsultasLeidas:", error);
    res.status(500).json({ mensaje: "Error al actualizar las consultas" });
  }
};
