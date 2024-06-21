const express = require("express");
const clienteSchema = require("../models/cliente");
const cliente = require("../models/cliente");

const router = express.Router();

// Crear cliente

router.post("/cliente", (req, res) => {
  const cliente = clienteSchema(req.body);
  cliente
  .save()
  .then((data) => res.json(data))
  .catch((error) =>res.json({message: error}));
});

//Obtener todos los cliente
router.get("/cliente", (req, res) => {
  clienteSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
  });

//Obtener solo un cliente
router.get("/cliente/:id", (req, res) => {
    const { id } = req.params;
    clienteSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
  });

//Actualizar cliente
router.put("/cliente/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, email, password, telefono } = req.body;
    clienteSchema
    .updateOne({ _id: id }, { $set: { nombre, direccion, email, password, telefono }})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
  });

//Eliminar cliente
router.delete("/cliente/:id", (req, res) => {
    const { id } = req.params;
    clienteSchema
    .drop({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});



module.exports = router;