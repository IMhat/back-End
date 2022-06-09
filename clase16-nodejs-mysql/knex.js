const Knex = require ('knex').default;


const options = {
    host: '127.0.0.1',
    user:'root',
    password: 'root',

    database:'coderhouse'
}
const knex = Knex({
    client:'mysql2',
    connection: options
});

//forma 1

const ejecutar = async() => {
    await knex.schema.dropTableIfExists("alumnos");
    await knex.schema.createTable('alumnos', (table) =>{
        table.increments('id');
        table.string('nombre',30);
        table.integer('edad');
    });
    await knex('alumnos').insert({nombre:'pepito', edad: 31});
    await knex.from("alumnos").select(*).then((filas)=> console.log(filas));
    await knex.destroy();
}

ejecutar();


// forma 2



knex.schema.createTable('alumnos', (table)=>{
    table.increments('id');
    table.string('nombre',30);
    table.integer('edad');
}).then(() =>{
    console.log('tabla creada!')
}).catch((err) => console.log('error: ', err))
.finally(() => knex.destroy())


knex('alumnos').insert({nombre: 'pepito', edad: 31})
.then(() =>{
    knex.from('alumnos').select('*').then((filas) => console.log(filas))
})
