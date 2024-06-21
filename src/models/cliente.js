const mongoose = require("mongoose");

const clienteSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    direccion: {
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

module.exports = mongoose.model('Cliente', clienteSchema);