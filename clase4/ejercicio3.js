const fs = require('fs');

fs.stat('package.json', (error, stats) =>{
    const tamano = stats.size; //tamañop en bite del archivo
    fs.readFile('package.json', 'utf-8', (error, contenido) =>{
        const info = {
            contenidoStr: contenido,
            contenidoObj: JSON.parse(contenido),
            size: tamano
        };
        fs.writeFile('info.txt', JSON.stringify(info), (error) => {
            console.log('Operacion terminada');
        });
    });
});


fs.promises.stat('package.json').then((stats) => stats.size);