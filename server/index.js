const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const conexion = require('./database');
require('dotenv').config();

//inicializar express
const app = express();
conexion();

//puerto
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', require('./routes/Task.routes.jsx'));

//puerto
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto: ', app.get('port'));
});


