
// const fs = require('fs');




// setTimeOut(() => {
// console.log('mi mensaje')
// }, 1000);




// const intervalId = setInterval(() =>{
//     console.log('Un mensaje intervalado')
// }, 10000);

// setTimeOut(() =>{
    
//     clearInterval(intervalId)
// }, 5000);


// const escrituraConPromesa= (nombreArchivo, contenido) => {

// return new Promise ((resolve, reject)=>{
//     fs.writeFile(nombreArchivo, contenido, (error)=>{
//         if(error) reject(error);
//         else resolve();
//     });
//   });
// });



// function mostrarLetras(a) {
//    return console.log(mostrarLetras[2]);
// }

// mostrarLetras("hola")


const mostrarIntervalado = (mensaje, intervalo, callback) =>{
let posicionActual = 0;
const intervalId = setInterval(() =>{
    console.log(mensaje[posicionActual]);
    posicionActual++;
    if(posicionActual == mensaje.length) {
        clearInterval(intervalId);
        callback();
    }
}, intervalo);
}


mostrarIntervalado('HOLA', 1000, () => {
    console.log('finalizado 250');
});