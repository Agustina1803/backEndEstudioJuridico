import Cliente from "../models/cliente.js";

//POST 
export const crearCliente = async (req, res) => {
  try {
    const clienteNuevo = new Cliente(req.body);
    await clienteNuevo.save();
    console.log(req.body);
    res.status(201).json({
      mensaje: "El cliente fue creado con exito",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      mensaje: "Error en el servidor al crear el cliente",
    });
  }
};

