import mongoose, { Schema } from "mongoose";


const subirArchivoSchema = new Schema({
    nombreCliente: { type: String, required: true, maxLength: 50, minLength: 10, },
    tipodearchivo: { type: String, required: true, enum: ['demanda', 'contrato', 'escrito', 'poder', 'notificacion']},
    fecha:{type: Date,required: true,
    validate: {
    validator: function(value) {
      const day = value.getDay(); 
      return day >= 1 && day <= 5;
    },
    message: props => 'El día ${props.value.toDateString()} no es válido para agendar eventos'
  }
},
seleccionarArchivo: {
    type: String, // acá guardás la ruta o el nombre del archivo
    required: [true, "El archivo es obligatorio"],
  },
});

const SubirArchivo = mongoose.model('subirarchivo', subirArchivoSchema);

export default SubirArchivo;