

class Usuario {

    constructor(nombre, apellido, nombreLibro, autorLibro, mascotas) {

        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [{
            "Nombre": nombreLibro,
            "Autor": autorLibro
     }];
        this.mascotas = [mascotas]; 

    }

    getFullName(){
        console.log(`nombre completo ${this.nombre} ${this.apellido} ${this.libros} `)
    }

    countMascotas(){
        console.log(`mascotas ${this.mascotas}`)


    }

    getBookNames(){

        return this.libros.map( libros => libros.nombreLibro)

    }

    addMascotas(nombreMascota) {
        this.mascotas.push('nombreMascota')

    }

    addBook(lib, autor) {
        this.libros.push('lib', 'autor')

    }

    



}