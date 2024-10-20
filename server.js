const express = require('express');
const connection = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//Ruta simple para probar la conexión

app.get('api/users', (req, res)=>{
    connection.query('SELECT * FROM users', (err, results) => {
        if(err){
            return res.status(500).send(err);
        }
        res.status(200).json(results);
    });
});

//Iniciar el servidor
app.listen(PORT, ()=>{
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});