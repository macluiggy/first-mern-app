const app = require('./src/index.js');

let port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('server is listen on port ' + port);
})