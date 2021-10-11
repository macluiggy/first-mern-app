const express = require('express');
const router = express.Router();

const Task = require('../models/task');

//este nos permite manejar las rutas de las peticiones, en este caso la ruta root
router.get('/', (req, res) => {
    Task.find(function (err, tasks) {
        console.log(tasks);
    })
    res.json({
        status: 'API Works'
    });
})

module.exports = router;