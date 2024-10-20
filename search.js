

function insideArticle(){
    const name = document.getElementById('name').value
    const quantity = document.getElementById('quantity').value
    const price = document.getElementById('price').value
    

    insideAndShow(name,quantity,price)
   
    
}



function insideAndShow(name,quantity,price){
    //Agregar un nuevo producto a la base de datos

const articuloNuevo = `INSERT INTO logistics.stock (id, name, quantity, price) VALUES (NULL, '${name}', '${quantity}', '${price}');`

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
        const res = document.getElementById("response")
        res.innerText = `Agregaste el ${lista[lista.length -1].name}, cantidad ${lista[lista.length -1].quantity}, con precio por unidad ${lista[lista.length -1].quantity} `;
    }
    
})




connection.end()
}