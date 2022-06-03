

const http = require('http');

const server = http.createServer((req, res) =>{
    const hora = (new Date()).getHours('Buen dia!');

    if (hora >= 6 && hora <=12) res.end('buen dia');
    else if (hora >=13 && hora <= 19) res.end('Buenas tardes');
    else res.end('buenas noches!')
});

server.listen(8080, () =>{
  console.log(`Escuchando en el puerto ${server.address().port}`);
});