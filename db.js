import {CREDENCIALES}  from './data/Constantes.js'

const mysql = require('mysql2')



const connection = mysql.createConnection({
    host: 'localhost',
    user: `${CREDENCIALES.NAME}`,
    password: `${CREDENCIALES.PASSWORD}`,
    database: 'logistics'

});

connection.connect((err) => {
    if(err){
        return console.error('Error conectando la base de datos')
    }
    console.log('Conexión a la base de datos MySQL exitosa.');
});

//Agregar un nuevo producto a la base de datos

const articuloNuevo = `INSERT INTO logistics.stock (id, name, quantity, price) VALUES (NULL, 'Lentejas', '100', '30');`

connection.query(articuloNuevo,function(error,articulo){
    if(error){
        throw error;
        
    }else{
        console.log("Datos ingresados correctamente")
    }
    
})

//Consultar la base de datos completa

const articulos = "SELECT * FROM logistics.stock"

connection.query(articulos,function(error,lista){
    if(error){
        throw error;
        
    }else{
        console.log(lista[lista.length -1])
    }
    
})




connection.end()


