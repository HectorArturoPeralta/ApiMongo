const express = require("express");
const empleadoSchema = require("../models/empleado");
const empleado = require("../models/empleado");

const router = express.Router();

// Crear cliente

router.post("/empleado", (req, res) => {
  const empleado = empleadoSchema(req.body);
  empleado
  .save()
  .then((data) => res.json(data))
  .catch((error) =>res.json({message: error}));
});

//Obtener todos los cliente
router.get("/empleado", (req, res) => {
    empleadoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
  });

//Obtener solo un cliente
router.get("/empleado/:id", (req, res) => {
    const { id } = req.params;
    empleadoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
  });

//Actualizar cliente
router.put("/empleado/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, email, password, telefono } = req.body;
    empleadoSchema
    .updateOne({ _id: id }, { $set: { nombre, email, password, telefono }})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
  });

//Eliminar cliente
router.delete("/empleado/:id", (req, res) => {
    const { id } = req.params;
    empleadoSchema
    .drop({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});



module.exports = router;