// Importamos el módulo de Express, un framework para crear aplicaciones web en Node.js
const express = require('express');

// Inicializamos una instancia de Express para gestionar las rutas, peticiones y respuestas
const app = express();

// Configuramos el motor de plantillas EJS (Embedded JavaScript) 
// Esto nos permite generar páginas HTML dinámicas utilizando archivos .ejs en la carpeta 'views'
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/*Definimos una ruta GET para la ruta raíz ('/') 
req: Objeto que representa la solicitud del cliente (contiene datos como parámetros, cabeceras, etc.)
res: Objeto que representa la respuesta que enviamos al cliente
app.get('/', (req, res) => {
    // Enviamos una respuesta de texto simple al navegador
    res.send('Este es un mensaje en la ruta');
});*/

// Middleware para gestionar rutas externas
// Esto permite modularizar las rutas y mantener el archivo principal más limpio
// './router' es el archivo donde definimos rutas adicionales
app.use('/', require('./router'));

// Configuramos el puerto del servidor a 5000
// "app" hace referencia a la instancia de Express, no al nombre de ningún archivo
// Utilizamos una función de flecha para confirmar que el servidor está en ejecución
app.listen(8000, () => {
    console.log("Servidor Local corriendo en http://localhost:8000");
});
