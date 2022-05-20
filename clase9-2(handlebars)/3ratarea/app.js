const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        defaultLayout: 'index.hbs'
    })

);

app.set('views', './hbs_views');
app.set('view engine', 'hbs');

app.get('/', (req, res) =>{
    res.render('main', {nombre: 'Mateo', apellido:'Mansilla', edad:'20'})

});

app.listen(8080, () =>{
    console.log('escuchando')
})



