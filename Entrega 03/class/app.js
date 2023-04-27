const express = require("express");
const path = require ("path")

const app = express();
const port = 3000;

app.get ("/",(req,res)=>{
    //res.send("Hola Mundo")
     // Utiliza el método "path.join()" para subir un nivel en la estructura de directorios y acceder a la carpeta "public" que contiene el archivo HTML
        const indexPath = path.join(__dirname, "..", "public", "index.html");
    // Envía el archivo HTML como respuesta a la solicitud GET utilizando el método "res.sendFile()"
        res.sendFile(indexPath);
});

app.listen(port,() => {

    console.log(`Servidor iniciado en el puerto ${port}`);
})