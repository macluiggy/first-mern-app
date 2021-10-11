const express = require('express');
const router = express.Router();

//este nos permite manejar las rutas de las peticiones, en este caso la ruta root
router.get('/', (req, res) => {
    res.json({
        status: 'API Works'
    });
})

module.exports = router;