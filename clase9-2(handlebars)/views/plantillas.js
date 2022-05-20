const express = require('express');

const app = express();
const fs = require('fs');

app.engine('coder', (pathArchivo, opciones, callback) =>{
    const contenidoArchivo = String(fs.readFileSync(pathArchivo));
    const {titulo, nomre}=opciones;
    const renderizado = contenidoArchivo.replace('?titulo?', titulo).replace('?nombre?', nombre);
    callback(null, renderizado);
});

app.set('views', '/views');
app.set('view engine', 'coder');

app.get('/', (req, res) =>{
    res.render('index', {titulo:"titulo de mi pagina", nombre:"Mateo Mansilla"})
});

app.listen(8080, () =>{
    console.log('escuchando!');
});
