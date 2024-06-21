const express = require("express");
const rotoplasSchema = require("../models/rotoplas");
const rotoplas = require("../models/rotoplas");

const router = express.Router();

// Crear cliente

router.post("/rotoplas", (req, res) => {
  const rotoplas = rotoplasSchema(req.body);
  rotoplas
  .save()
  .then((data) => res.json(data))
  .catch((error) =>res.json({message: error}));
});

//Obtener todos los cliente
router.get("/rotoplas", (req, res) => {
    rotoplasSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
  });

//Obtener solo un cliente
router.get("/rotoplas/:id", (req, res) => {
    const { id } = req.params;
    rotoplasSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
  });

//Actualizar cliente
router.put("/rotoplas/:id", (req, res) => {
    const { id } = req.params;
    const { numeroRotoplas, capacidad, nivel, localidad } = req.body;
    rotoplasSchema
    .updateOne({ _id: id }, { $set: { numeroRotoplas, capacidad, nivel, localidad }})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
  });

//Eliminar cliente
router.delete("/rotoplas/:id", (req, res) => {
    const { id } = req.params;
    rotoplasSchema
    .drop({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});



module.exports = router;