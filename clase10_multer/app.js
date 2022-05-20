const express = require('express');
const multer = require('multer');



const uploaderMiddleware= multer({storage: diskStorage});
const app = express();

app.use(express.urlencoded({ extended: true}));

app.post('/subida', uploaderMiddleware.single('archivo'),(req,res)=>{
    res.send('subido Ok');
})

app.listen(8080, ()=>{
    console.log('servidor escuchando!');
});