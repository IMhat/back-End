const express = require('express');
const app = express();

const frase = 'Frase inicial';
let palabras = fraseInicial.split(' ');

app.use(expres.json());
app.use(express.urlencoded({extended: true}));



app.get('/api/frase', (req, res) =>{
    res.send(palabras.join(' '));
});

app.get('/api/palabra/:pos', (req, res) => {
    const posicion = parseInt(req.params.post);
    res.send(palabras[posicion]);
});


app.post('/api/palabras', (req, res) =>{
    const palabaAgregar = req.body.palabra;
    palabras.push(palabraAgregar);
    res.json({
        agregada: palabraAgregar,
        pos: palabras.length-1,
    });

});

app.put('/api/palabra/:pos', (req, res) => {
    const posicion = parseInt(req.params.post);
    const palabaAgregar=req.body.palabra;
    const anteriorPalabra = palabras[posicion];
    palabras[posicion] = palabraAgregar;
    res.json({
        actualizada: palabraAgregar,
        anterior: anteriorPalabra,

    });


});


app.delete('/api/palabra/:pos', (req, res) => {
    const posicion = parseInt(req.params.post);
    palabras = palabras.filter((valor, indice) => indice != posicion);
    res.send('Palabras borrada correctamente');
});

app.listen(8080, ()=>{
    console.log('Escuchando');

});

