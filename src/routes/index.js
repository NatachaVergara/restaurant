const express = require('express');
const rutas = express.Router();

rutas.get('/', (req, res) =>{
    res.render('index.html', {title: 'Primera Website'});
})

rutas.get('/restaurantes', (req, res) =>{
    res.render('restaurantes.html', {title: 'Restaurantes'});
})


module.exports = rutas;