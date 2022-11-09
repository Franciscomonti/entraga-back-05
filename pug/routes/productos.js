const { Router } = require('express');

const router = Router();

let productos = [];

router.get('/', (req, res) => {
    res.render('productos', { productos });
})

router.get('/productos', (req, res) => {
    res.render('formulario');
})

router.post('/productos', (req, res) => {
    const { titulo, precio, foto } = req.body;
    productos.push({ titulo, precio, foto });
    res.render('formulario');
})

module.exports = router;