import Facturacion from "../models/facturacion.js";

//POST 
export const crearFacturacion = async (req, res) => {
  try {
    const facturacionNuevo = new Facturacion(req.body);
    await facturacionNuevo.save();
    console.log(req.body);
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

