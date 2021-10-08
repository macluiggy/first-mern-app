const express = require('express');
const { json } = require('stream/consumers');
const app = express();

app.get('/', (req, res) => {
    json.send('aprendiendo mern stack')
})
app.listen(3000, () => {
    console.log('server is listen on port 3000');
})