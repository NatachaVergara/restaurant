const express = require('express');
const path = require('path');


const app = express();

//Settings
app.set('port', 8080);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');


//Middleware


//Rutas
app.use(require('./routes/index'));

//Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Esuchando el puerto
app.listen(app.get('port'), ()=>{
 console.log(`Servidor activo en puerto ${app.get('port')}`)
})
