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


//get

export const obtenerClientes = async (req, res) => {
    try{
        const listaClientes = await Cliente.find();
        res.status(200).json(listaClientes);
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "Error al obtener los clientes"
        })
    }
};
