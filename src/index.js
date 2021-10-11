const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const { mongoose } = require('./database');

// Settings
//app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'));
//esto verifica que lo que se pide esté en formato json
//esto reemplaza a bodyParser que hace la misma comprobacion
app.use(express.json())

// Routes
//indica donde quires usar el modulo exportado (primer argumento), y el modulo en si (2do arg)
app.use('/api/tasks', require('./routes/task.routes'));
// Static files
app.use(express.static(path.join(__dirname, 'public')));
// Starting the server
let port = process.env.PORT;
app.listen(port, () => {
    console.log('server is listening on port ' + port);
})


module.exports = app