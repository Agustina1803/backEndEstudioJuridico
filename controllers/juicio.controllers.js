import Juicio from "../models/juicio.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

//POST
export const crearJuicio = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ mensaje: "Debe subir un archivo" });
    }
    const resultado = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "auto",
      folder: "juicios_pdf",
    });
    fs.unlinkSync(req.file.path);
    const juicioNuevo = new Juicio({
      nombreCliente: req.body.nombreCliente,
      nombreDeJuicio: req.body.nombreDeJuicio,
      numeroExpediente: req.body.numeroExpediente,
      juzgado: req.body.juzgado,
      fecha: req.body.fecha,
      seleccionarArchivo: {
        url: resultado.secure_url,
        public_id: resultado.public_id,
        nombre: req.file.originalname,
      },
    });
    await juicioNuevo.save();
    res.status(201).json({
      mensaje: "Nuevo juicio creado con éxito",
      archivo: juicioNuevo,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error en el servidor al cargar el nuevo caso",
    });
  }
};

//GET
export const obtenerJuicio = async (req, res) => {
  try {
    const { numeroExpediente } = req.query;
    const filtro = {};

    if (numeroExpediente) {
      filtro.numeroExpediente = { $regex: numeroExpediente, $options: "i" };
    }
    const obtenerJuicio = await Juicio.find(filtro);
    const juiciosTransformado = obtenerJuicio.map((juicio) => ({
      _id: juicio._id,
      nombreCliente: juicio.nombreCliente,
      nombreDeJuicio: juicio.nombreDeJuicio,
      numeroExpediente: juicio.numeroExpediente,
      juzgado: juicio.juzgado,
      fecha: juicio.fecha.toISOString().split("T")[0],
      seleccionarArchivo: juicio.seleccionarArchivo,
    }));
    res.status(200).json(juiciosTransformado);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error en el servidor al obtener los juicios",
    });
  }
};

//GET by ID
export const obtenerJuicioPorId = async (req, res) => {
  try {
    const juicioporID = await Juicio.findById(req.params.id);
    if (!juicioporID) {
      return res.status(404).json({
        message: "Caso no encontrado",
      });
    }
    res.status(200).json(juicioporID);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error en el servidor al obtener el Caso por ID",
    });
  }
};
// DeLETE
export const eliminarJuicio = async (req, res) => {
  try {
    const juicioBorrado = await Juicio.findByIdAndDelete(req.params.id);
    if (!juicioBorrado) {
      return res.status(404).json({
        message: "Caso no encontrado",
      });
    }
    await cloudinary.uploader.destroy(
      juicioBorrado.seleccionarArchivo.public_id,
      {
        resource_type: "raw",
      }
    );
    res.status(200).json({
      message: "Caso eliminado exitosamente",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error en el servidor al eliminar el caso",
    });
  }
};

//UPDATE

export const actualizarJuicio = async (req, res) => {
  try {
    const juicioActualizado = await Juicio.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!juicioActualizado) {
      return res.status(404).json({
        message: "Caso no encontrado",
      });
    }
let updateData = { ...req.body };
    if (req.file) {
      const resultado = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "auto",
        folder: "juicios_pdf",
      });
      fs.unlinkSync(req.file.path);
      updateData.seleccionarArchivo = {
        url: resultado.secure_url,
        public_id: resultado.public_id,
        nombre: req.file.originalname,
      };
    }
    const juicioEditado = await juicio.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    res
      .status(200)
      .json({
        mensaje: "juicio actualizado con éxito",
        factura: juicioEditado,
      });
  } catch (error) {
    console.error(
      "Error al actualizar:",);
    res
      .status(400)
      .json({
        mensaje: "Error al actualizar factura",
      });
  }
};


export const descargarJuicio = async (req, res) => {
  try {
    const juicio = await Juicio.findById(req.params.id);
    if (!juicio) {
      return res
        .status(404)
        .json({ mensaje: "el juicio con ese ID no existe" });
    }
    const urlDescarga = juicio.seleccionarArchivo.url + "?fl_attachment";
    res.redirect(urlDescarga);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al descargar el juicio" });
  }
};