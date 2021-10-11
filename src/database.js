require('dotenv').config()
const mongoose = require('mongoose');
const URI = 'mongodb+srv://macluiggy:'+process.env.URI+'@cluster0.td542.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(URI)
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));

module.exports = mongoose;