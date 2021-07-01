const express = require('express');
const rutas = express.Router();


let hora = new Date();
rutas.use(function timeLog (req, res, next) {
    console.log('Time', hora.toLocaleString())
    next()
  })

rutas.get('/', (req, res) =>{
        res.render('index.html', {title: 'Inicio: Bienvenidos'});
})

rutas.get('/restaurantes', (req, res) =>{
    res.render('restaurantes.html', {title: 'Restaurantes'});
})

rutas.get('/contacto', (req, res) =>{
    res.render('contacto.html', {title: 'Contacto'});
})


module.exports = rutas;