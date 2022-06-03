const express = require('express');
const app = express();

// /api/sumar/5/6

app.get('/api/sumar/:numUno/:numDos', (req, res) =>{
    const suma = parseInt(req.params.numUno) + parseInt(req.params.numDos);
    res.send({suma});
});


// /api/sumar?num1=4&num2=62

app.get('/api/sumar', (req, res) =>{
    const suma= parseInt(req.query.num1) + parseInt(req.query.num2);
    res.send({suma});
});



// /api/operacion/5+6

app.get('/api/operacion/:operacion', (req, res) =>{
    const numeros = req.params.operacion.split('+');
    const suma = parseInt(numeros[0] + parseInt(numeros[1]));
    res.send({suma});
});

app.post('/api', (req, res) => {
    res.send('ok post');
});

app.put('/api', (req, res) =>{
    res.send('ok put');
});
app.delete('/api', (req, res) =>{
    res.send('ok delete');
});

app.listen(8080, () => {
    console.log('Escuchando!');
});