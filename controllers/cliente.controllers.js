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

//get por id
export const obtenerClientePorId = async (req, res) =>{
    try{
        const listarClientePorId = await Cliente.findById(req.params.id);
        if(!listarClientePorId){
            return res.status(404).json({
                mensaje: "El cliente con ese ID no existe"
            });
        }
        res.status(200).json(listarClientePorId);
    }catch(error){
        console.log(error);
        res.status(500).json({
            mensaje: "Error al obtener el cliente por ID"
        })
    }
};
