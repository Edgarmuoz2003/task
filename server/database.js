const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const URI =process.env.MONGO_URI;


//conectar a la base de datos
const conexion = async () => {
    try {
        await mongoose.connect(URI)
        console.log('Conectado a la base de datos');
    } catch (error) {
        console.log('Error al conectar a la base de datos'+ error);
    }
}

module.exports = conexion;
