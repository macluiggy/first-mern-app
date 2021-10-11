const express = require('express');
const router = express.Router();

const Task = require('../models/task');

//este nos permite manejar las rutas de las peticiones, en este caso la ruta root
router.get('/', async (req, res) => {
    const tasks = await Task.find()
    //console.log(tasks, tasks.status);
    res.json({
        status: tasks
    });
})

router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save()
    res.json({
        status: 'Tarea guardada'
    })
})

router.put('/:id', async (req, res) => {
    const { title, description } = req.body;
    const newTask = { title, description };
    await Task.findByIdAndUpdate(
        req.params.id,
        newTask
    )
    res.json({
        status: newTask
    })
})

module.exports = router;