const express = require('express');
const app = express();

const port = 8080;
app.use(express.static(__dirname + "/public"));

app.get('/servicios', (req, res) =>{
    res.sendFile(__dirname + "/public/servicios.html");

});
app.get('/informacion', (req, res) =>{
    res.sendFile(__dirname + "/public/informacion.html");

});

app.listen(port, () =>{
    console.log(`Servidor escuchando en el puerto ${port}`)

});