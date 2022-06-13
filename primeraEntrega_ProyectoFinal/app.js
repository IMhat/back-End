const express = require('express');

const app = express();

const port = 8080;

//motor de plantillas

app.set('view engine', 'ejs');
app.set('views', '/views');

app.use(express.static(__dirname + ("/public")));


app.get('/', (req, res) =>{
    res.render('index');

});


app.listen(port, () =>{
    console.log(`Escuchando el puerto ${port}`)

});