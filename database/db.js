// Se requiere el módulo "mysql" para trabajar con bases de datos MySQL en Node.js
const mysql = require("mysql");

// Se establece la configuración de la conexión a la base de datos
const conexion = mysql.createConnection({
    host: "localhost",   // Dirección del servidor de la base de datos (en este caso, es el mismo equipo)
    port: 3306,
    user: "root",        // Nombre de usuario con permisos para acceder a la base de datos
    password: "",        // Contraseña del usuario (aquí está en blanco, modificar según corresponda)
    database: "seminario" // Nombre de la base de datos a la que se quiere conectar
});

// Se establece la conexión con la base de datos
conexion.connect(function(error) {
    // Si ocurre un error al conectar, se muestra en consola
    if (error) {
        console.error("Se presentó un error: " + error);
        return;
    }
    // Si la conexión es exitosa, se muestra un mensaje en consola
    console.log("Conexión Exitosa");
});

// Se exporta el objeto de conexión para que pueda ser utilizado en otros módulos
module.exports = conexion;