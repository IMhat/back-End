const http = require('http');

// requ:request = la peticion que me estan haciendo
// res:responese = lo que voy a responder a esa peticion 
const server = http.createServer((req, res) =>{
    res.end('Programacion backend!');

});

server.listen(8080, () =>{
    console.log('escuchado!');
});

