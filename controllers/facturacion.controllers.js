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

//get
export const listaFacturacion = async (req, res) => {
    try{
        const listaFacturas = await listaFacturas.find();
        res.status(200).json(listaFacturas);
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "Error al obtener las facturas"
        })
    }
};

//get por id
export const obtenerFacturacionPorId = async (req, res) =>{
    try{
        const obtenerFacturacionPorId = await Facturacion.findById(req.params.id);
        if(!obtenerFacturacionPorId){
            return res.status(404).json({
                mensaje: "La facturacion con ese ID no existe"
            });
        }
        res.status(200).json(obtenerFacturacionPorId);
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "La facturacion el archivo por ID"
        })
    }
};