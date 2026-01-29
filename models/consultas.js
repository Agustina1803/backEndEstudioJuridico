import mongoose, { Schema } from "mongoose";

const consultaSchema = new Schema({
  nombreConsulta: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 40,
  },
  correoConsulta: {
    type: String,
    required: true,
    match: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  mensajeConsulta: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 500,
  },
  creadoEn: {
    type: Date,
    default: Date.now,
  },
  leido: {
    type: Boolean,
    default: false,
  },
});

const Consulta = mongoose.model("consulta", consultaSchema);
export default Consulta;
