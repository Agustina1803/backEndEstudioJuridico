import mongoose, { Schema } from "mongoose";

const subirArchivoSchema = new Schema({
  nombreCliente: { type: String, required: true, maxLength: 50, minLength: 10 },
  tipodearchivo: {
    type: String,
    required: true,
    enum: ["demanda", "contrato", "escrito", "poder", "notificacion"],
  },
  fecha: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^\d{4}-\d{2}-\d{2}$/.test(value);
      },
    },
  },

  seleccionarArchivo: {
    url: { type: String, required: true },
    public_id: { type: String, required: true },
  },
});

const SubirArchivo = mongoose.model("subirarchivo", subirArchivoSchema);

export default SubirArchivo;
