const mysql = require('mysql2')


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'Matias',
    password: 'Matias77**',
    database: 'logistics'

});

connection.connect((err) => {
    if(err){
        return console.error('Error conectando la base de datos')
    }
    console.log('Conexión a la base de datos MySQL exitosa.');
});


