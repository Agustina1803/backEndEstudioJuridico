import mongoose, { Schema } from "mongoose";


const subirArchivoSchema = new Schema({
    nombreCliente: { type: String, required: true, maxLength: 50, minLength: 10, },
    tipodearchivo: { type: String, required: true, enum: ['demanda', 'contrato', 'escrito', 'poder', 'notificacion'] },
    fecha: {
        type: String, // 👈 ahora se guarda como string
        required: true,
        validate: {
            validator: function (value) {
                // valida formato YYYY-MM-DD
                return /^\d{4}-\d{2}-\d{2}$/.test(value);
            },

        },
    },

    seleccionarArchivo: {
        type: String, // acá guardás la ruta o el nombre del archivo
        required: [true, "El archivo es obligatorio"],
    },
});

const SubirArchivo = mongoose.model('subirarchivo', subirArchivoSchema);

export default SubirArchivo;