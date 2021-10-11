const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({})
})

// Settings


// Middlewares

let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('server is listen on port ' + port);
})
// Static files
//module.exports = app