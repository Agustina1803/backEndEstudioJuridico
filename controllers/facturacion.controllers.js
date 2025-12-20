import Facturacion from "../models/facturacion.js";
import cloudinary from "../config/cloudinary.js";
import fs from "fs";

//POST
export const crearFacturacion = async (req, res) => {
  try {
    const resultado = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "image",
      folder: "factura_pdf",
      pages: true,
    });

    fs.unlinkSync(req.file.path);

    const facturacionNuevo = new Facturacion({
      fecha: req.body.fecha,
      nombreCliente: req.body.nombreCliente,
      concepto: req.body.concepto,
      seleccionarArchivo: {
        url: resultado.secure_url,
        public_id: resultado.public_id,
      },
      monto: req.body.monto,
      estado: req.body.estado,
    });
    
    await facturacionNuevo.save();
    console.info(req.body);
    res.status(201).json({
      mensaje: "Facturacion fue creado con exito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Error en el servidor al crear facturacion",
    });
  }
};

//get
export const listaFacturacion = async (req, res) => {
  try {
    const listaFacturas = await Facturacion.find();
    res.status(200).json(listaFacturas);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Error al obtener las facturas",
    });
  }
};

//get por id
export const obtenerFacturacionPorId = async (req, res) => {
  try {
    const obtenerFacturacionPorId = await Facturacion.findById(req.params.id);
    if (!obtenerFacturacionPorId) {
      return res.status(404).json({
        mensaje: "La facturacion con ese ID no existe",
      });
    }
    res.status(200).json(obtenerFacturacionPorId);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "La facturacion el archivo por ID",
    });
  }
};

//delete
export const eliminarFacturacion = async (req, res) => {
  try {
    const facturacionBorrado = await Facturacion.findByIdAndDelete(
      req.params.id
    );
    if (!facturacionBorrado) {
      return res.status(404).json({
        mensaje: "La factura con ese ID no existe",
      });
    }
     await cloudinary.uploader.destroy(
          ArchivoBorrado.seleccionarArchivo.public_id,
          {
            resource_type: "image",
          }
        );
    res.status(200).json({
      mensaje: "La factura fue eliminada con exito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Error al borrar la factura por ID",
    });
  }
};
// update

export const editarFacturacion = async (req, res) => {
  try {
    const facturacionEditado = await Facturacion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!facturacionEditado) {
      return res.status(400).json({
        mensaje: "La facturacion con ese ID no existe",
      });
    }
    res.status(200).json({
      mensaje: "Facturacion actualizada con exito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Error al actualizar factura por ID",
    });
  }
};
