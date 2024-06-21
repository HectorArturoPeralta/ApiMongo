const mongoose = require("mongoose");

const empleadoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('empleado', empleadoSchema);