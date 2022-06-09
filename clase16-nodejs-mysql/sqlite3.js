const Knex = require ('knex').default;


const options = {
    filename: './mydb.sqlite'

};

const knex = Knex({
    client:'sqlite3',
    connection: options
});


const ejecutar = async() => {
    await knex.schema.dropTableIfExists("articulos");
    await knex.schema.createTable('articulos', (table) =>{
        table.increments('id').primary().notNullable;
        table.string('nombre',15).notNullable;
        table.integer('codigo', 10).notNullable;
        table.float("precio");
        table.integer("stock");
    });
    await knex('articulos').insert([
        {nombre:'articulo 1', codigo: "prod1", precio: 10, stock:5},
        {nombre:'articulo 2', codigo: "prod2", precio: 10, stock:5},
        {nombre:'articulo 3', codigo: "prod3", precio: 10, stock:5},
        ]);
    console.log(await knex.from("articulos").select("*"));
    console.log(rows)
    knex("articulos").where({"id": 3}).del();
    knex("articulos").where({"id": 2}).uopdate();
    console.log(await knex.from("articulos").select("*"));

    //await knex.destroy();
}

ejecutar();