const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({})
})

// Settings


// Middlewares..


// Static files
app.listen(3000, () => {
    console.log('server is listen on port 3000');
})