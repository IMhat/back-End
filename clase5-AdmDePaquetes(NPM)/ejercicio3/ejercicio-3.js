const moment = require('moment');

const fechaDeHoy = moment();
const fechaNacimiento = moment ("2001-11-14");

console.log('hoy es', fechaDeHoy.format("DD/MM/YYYY"));
console.log('Naci el', fechaNacimiento.format("DD/MM/YYYY"));
console.log('Desde mi nacimiento han pasado', fechaDeHoy.diff(fechaNacimiento, 'years'), 'años');
console.log('Desde mi nacimiento han pasado', fechaDeHoy.diff(fechaNacimiento, 'days'), 'dias');