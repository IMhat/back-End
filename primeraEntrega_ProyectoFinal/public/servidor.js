const express = require("express");
const { productRouter } = require ("./routers/productRouter.js");
const { cartRouter } = require (".routers/cartRouter");
const moment = require('moment');
const path= require ('path');
const { rawListeners } = require("process");
const app = express();


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use("/api/productos", productRouter);
app.use("/api/carrito", cartRouter);
app.use(function(req, res) {
    res.json({
        error: '404',
        description: `ruta ${req.originalUrl} no implementada`
    });
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('server ON!')
})





// const express = require('express');

// const app = express();
// const port = 8080;
// const router = express.Router();

// const Contenedor = require('../contenedor.js');

// app.use(express.json());
// app.use(express.urlencoded( {extended: true}));
// app.use('/', express.static('public'));


// app.use('/productos', router);

// const server = app.listen(port, () => {
//     console.log("Server ON");
// });

// server.on("error", (error) => console.log(`Error en el servidor ${error}`));

// router.get('/productos', (req, res) =>{
//     const Contenedor = new Contenedor();
//     const productos = contendor.getAll();
//     res.render('main', {productos: productos});

// });

// //

// router.get('/carrito', (req, res) =>{
//     const Contenedor = new Contenedor();
//     const productos = contendor.getAll();
//     res.render('main', {carrito: productos});

// });

// router.post('/', (req, res) =>{
//     const Contenedor = new Contenedor();
//     const producto = req.body;

//     if(producto.tittle === "" || producto.price === "" || producto.thumbnail === "") {

//             res
//             .status(400)
//             .send({error: "El producto no se pudo cargar"})
//         } else {
//             contenedor.add(product);
//             res.redirect('/')
//         }
    
// });

// router.put('/:id', (req, res) =>{
//     res.send('actualizando producto')

// })
// router.delete('/:id', (req, res) =>{
//     res.send('borrando producto')

// })
