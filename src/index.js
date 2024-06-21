const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const clienteRoutes = require("./routes/cliente")
const empleadoRoutes = require("./routes/empleado")
const rotoplasRoutes = require("./routes/rotoplas")


const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(express.json());
app.use('/api', clienteRoutes);
app.use('/api', empleadoRoutes);
app.use('/api', rotoplasRoutes);


//rutas
app.get('/', (req, res) => {
    res.send('Bienvenido');
});


//Conexion mongodb
mongoose
.connect(process.env.MONGODB_URI,)
.then(() => console.log("Conectado A MongoDB"))
.catch((error) => console.log(error));


app.listen(port, () => console.error('servidor en el puerto', port));
