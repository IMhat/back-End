const express = require('express');
const app = express();

const frase = 'Hola mundo como estan';
const palabras =frase.split(' ');

// app.get('/api/frase', (req, res) =>{
//   res.json({frase: frase});  
// });

app.get('/api/palabras/:num', (req, res) =>{
    const numero = parseInt( req.params.num);
   

    
    if(isNaN(numero)) return res.status(400).send({error: 'El parametro no es un numero'});
    if(numero > palabras.length) res.status(404).send({error:"La palabra no existe"});
    else res.send(palabras[numero-1]);

});
app.get('/api/frase/:num', (req, res) =>{
    const numero = parseInt( req.params.num);
 
    if(isNaN(numero)) return res.status(400).send({error: 'El parametro no es un numero'});
    if(numero > frase.length) res.status(404).send({error:"La palabra no existe"});
    else res.send(frase[numero-1]);

});

app.listen(9090,() =>{
    console.log('escuchando!');
})

