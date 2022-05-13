const express = require('express');


const moment = require('moment');
const app = express();



let visitas= 0;

app.get('/', (req, res) =>{
    res.send('<h1>Bienvenido al servidor express</h1>');
});

app.get('/visitas', (req, res) =>{
  visitas++;
  res.send(`La cantidad de visitas es  ${visistas}`);
});

app.get('/fyh', (req, res) =>{
  res.send({fyh: moment().format("DD/MM/YYYY HH:mm:ss")});
});

app.listen(8080, () =>{
    console.log('Comence a escuchar!');
})