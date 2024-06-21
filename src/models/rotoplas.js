const mongoose = require("mongoose");

const rotoplasSchema = mongoose.Schema({
    numeroRotoplas: {
        type: Number,
        required: true,
        unique: true
    },
    capacidad: {
        type: String,
        required: true
    },
    nivel: {
        type: String,
        required: true
    },
    localidad: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('rotoplas', rotoplasSchema);