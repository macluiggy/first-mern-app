const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({})
})

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares


// Static files

// Starting the server
let port = app.get('port');
app.listen(port, () => {
    console.log('server is listening on port ' + port);
})


module.exports = app