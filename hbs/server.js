const express = require('express');
const { engine } =  require('express-handlebars');
const router = require('./routes/productos')

const port = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', engine());
app.set('views', './views');
app.set('view engine', 'handlebars');

app.use('/', router);

const server = app.listen(port, () => {
    console.log(`corriendo en el servidor http://localhost:${port}`);
})
server.on('error', ()=> { console.log('error: ' + error)});