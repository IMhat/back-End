const productos = [
    {id:1, nombre: 'calculadora', precio:20.50},
    {id:1, nombre: 'lapicera', precio:10.50},
    {id:1, nombre: 'hoja', precio:5.50}
];

const obtenerNombresString = (arrProductos) => {
    const nuevoArrayNombres = arrProductos.map(producto =>{
        return producto.nombre;
    });
    return nuevoArrayNombres.join(',');
};


const obtenerTotal = (arrProductos) =>{
    //reduce pasa elemento por elemento y devuelve
    const total = arrProductos.reduce((valorAnterior, producto) => {

        return valorAnterior+producto.precio;
    }, 0);
    return total;
}


const obtenerMenorPrecio = (arrProductos) => {
    const menorPrecio = arrProductos.reduce((valorInicial, producto) =>{
        if (!valorInicial) return producto.precio;
        else {
            if (valorInicial < producto.precio) return valorInicial;
            return producto.precio
        }
    })
    return menorPrecio;
}
const obtenerMayorPrecio = (arrProductos) => {
    const mayorPrecio = arrProductos.reduce((valorInicial, producto) =>{
        if (!valorInicial) return producto.precio;
        else {
            if (valorInicial < producto.precio) return valorInicial;
            return producto.precio
        }
    })
    return mayorPrecio;
}

const obtenerPromedio = (arrProductos) =>{
const total = obtenerTotal(arrProductos);
return (total/arrProductos.length).toFixed(2);
}



console.log(obtenerNombresString(productos));
console.log(obtenerTotal(productos));
console.log(obtenerPromedio(productos))
console.log(obtenerMenorPrecio(productos))
console.log(obtenerMayorPrecio(productos))
