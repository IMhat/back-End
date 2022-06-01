const generarAleatorio =()=>{
    return Math.floor(Math.random()*256);
};


class GeneradorColores {

    

    generar() {

        const rojo = generarAleatorio();
        const verde = generarAleatorio();
        const azul = generarAleatorio();
        return `rgb (${rojo},${verde},${azul})`
    }
};