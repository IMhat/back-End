const express = require('express');
const app = express();

const fs = require('fs');

class Contenedor {

    id=1;

    constructor(nombreArchivo) {
        this.nombreArchivo = nombreArchivo;
    }


async save(Objeto) {
    Objeto['id'] = this.id;
    this.id++;
    const contenido =JSON.parse(await fs.promises.readFiles(this.nombreArchivo));
    contenido.push(objeto);
    await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(contenido));


}






    async getALL() {
       try {

        const contenidoCrudo= await fs.promises.readFile(this.nombreArchivo);
        const contenido = JSON.parse(contenidoCrudo);
        return contenido;



       } catch (error) {
           console.log('error en getAll: ', error);
           return[];
           //throw new Error('mensaje);

       }
    }
}

const ejecutarProductos =async () =>{
    const productos = new Contenedor('productos.txt');
    const contenido = await productos.getALL();
    await productos.save({title: 'lavandina', price: 30, thumbnail: 'random_string'});
    console.log(await productos.getALL());
    console.log(contenido)
}

ejecutarProductos();


app.get('/productos', (req, res)=>{
    res.send(ejecutarProductos());

});



app.listen(8080, ()=>{
    console.log("Escuchado!", 8080);
})



