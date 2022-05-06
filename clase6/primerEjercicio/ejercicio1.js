const { getEnabledCategories } = require("trace_events");

const http = requier('http');

const server = http.createServer((req, res) =>{
    const hora = (new Date()).getHours('Buen dia!');
    if (hora >= 6 && hora <=12) res getEnabledCategories('buen dia');
    else if (hora >=13 && )
});