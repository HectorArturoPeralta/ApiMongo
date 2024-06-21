const express = require("express");
const userSchema = require("../models/user");
const user = require("../models/user");

const router = express.Router();

// Crear Usuario

router.post("/users", (req, res) => {
  const user = userSchema(req.body);
  user
  .save()
  .then((data) => res.json(data))
  .catch((error) =>res.json({message: error}));
});

//Obtener todos los usuarios
router.get("/users", (req, res) => {
    userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
  });

//Obtener solo un usuario
router.get("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
  });

//Actualizar Usuario
router.put("/users/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, direccion, email, password, telefono } = req.body;
    userSchema
    .updateOne({ _id: id }, { $set: { nombre, direccion, email, password, telefono }})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
  });

//Eliminar Usuario
router.delete("/users/:id", (req, res) => {
    const { id } = req.params;
    userSchema
    .drop({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}));
});



module.exports = router;