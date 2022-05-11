const express = require('express');
const app = express();

const frase = 'Frase inicial';
const palabras = fraseInicial.split(' ');

app.get('/api/frase', (req, res) =>{
    res.send(palabras.join(' '));
});

