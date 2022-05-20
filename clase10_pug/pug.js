const express = require('express');
const app = express();

app.set('views', '/pug_views');
app.set('views engine', 'pug');

app.get('/hello', (req, res)=>{
    res.render('bienvenida', {mensaje, title})
});

app.listen(8080, ()=>{
    console.log('escuchando!')
});