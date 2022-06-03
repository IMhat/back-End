const fs = require('fs');

// modo sincrinico


const escribirArchivo = () =>{
    try {
        fs.writeFileSync('fyh.txt', (new Date()).toISOString());
    } catch (error) {
        throw new Error ('Hubo un error en la escritura');
    }
}


const leerArchivo = () =>{
    try {
        const contenido = fs.readFileSync('fyh.txt', 'utf-8');
        console.log(contenido);
    } catch (error) {
        throw new Error ('Hubo un error en la lectura');
    };
};

try {
    escribirArchivo();
    leerArchivo();
} catch (error) {
    console.log(error)
}


// const fs = require("fs");

// try {
//   fs.writeFileSync("fyh.txt", new Date().toLocaleString());
//   const DataLectura = fs.readFileSync("fyh.txt", "utf-8");
//   console.log("Informacion en TXT: ", DataLectura);
// } catch (e) {
//   console.log("Error al ELIMINAR", e);
// }

//modo asyncronico
