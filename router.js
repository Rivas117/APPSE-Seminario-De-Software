// Importamos el módulo de Express para gestionar rutas
const express = require('express');
// Utilizamos el Router de Express para crear rutas modulares y organizadas
const router = express.Router();

// Utilizamos el Router de Express para crear rutas modulares y organizadas
const conexion = require("./database/db");


// Definimos una ruta GET para '/Cliente'
// Cuando el usuario accede a '/Cliente', se envía un mensaje como respuesta
// Ruta para obtener todos los clientes y devolverlos como JSON
router.get('/Cliente', (req, res) => {
    // Ejecuta una consulta SQL para seleccionar todos los registros de la tabla 'clientes'
    conexion.query("SELECT * FROM clientes", (error, resultado) => {
        // Si hay un error en la consulta
        if (error) {
            console.log(error); // Muestra el error en la consola
            res.status(500).send('Error en la consulta'); // Devuelve un estado 500 (Error del servidor) con un mensaje
        }
        else {
            res.send(resultado); // Si no hay errores, envía el resultado en formato JSON
        }
    });
});


// Ruta para obtener todos los clientes y renderizar una vista
router.get('/Cliente2', (req, res) => {
    // Ejecuta una consulta SQL para seleccionar todos los registros de la tabla 'clientes'
    conexion.query("SELECT * FROM clientes", (error, resultado) => {
        // Si hay un error en la consulta
        if (error) {
            console.log(error); // Muestra el error en la consola
            res.status(500).send('Error en la consulta'); // Devuelve un estado 500 (Error del servidor) con un mensaje
        }
        else {
            //res.send(resultado);
            // Variable definida pero no usada en el renderizado
            // Renderiza una vista llamada 'cliente/index' y pasa los datos obtenidos en la consulta
            res.render("cliente/index", { clientes: resultado });
        }
    })
});

router.get('/crear', (req, res) => {
    res.render('cliente/crear');
});

//Estamos recuperando los metodos que vamos a crear
const metodos = require("./controllers/me");
router.post("/save",metodos.save)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/editar/:id",(req,res)=>{
    const codigo = req.params.id;
    conexion.query("select * from clientes where codigo = ?",[codigo],(error,resultado)=>{
        if (error) {
            console.log(error); 
            res.status(500).send('Error en la consulta');
        }
        else {
            res.render("cliente/editar", { clientes: resultado[0]});
        }
    })
});

router.post("/edit",metodos.edit);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/eliminar/:id",(req,res)=>{
    const codigo = req.params.id;
    conexion.query("select * from clientes where codigo = ?",[codigo],(error,resultado)=>{
        if (error) {
            console.log(error); 
            res.status(500).send('Error en la consulta');
        }
        else {
            res.render("cliente/eliminar", { clientes: resultado[0]});
        }
    })
});

router.post("/elimina",metodos.elimina);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/ver/:id",(req,res)=>{
    const codigo = req.params.id;
    conexion.query("select * from clientes where codigo = ?",[codigo],(error,resultado)=>{
        if (error) {
            console.log(error); 
            res.status(500).send('Error en la consulta');
        }
        else {
            res.render("cliente/ver", { clientes: resultado[0]});
        }
    })
});

router.post("/view",metodos.view);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Definimos una ruta GET para '/Empleados'
// Responde con un mensaje indicando que es la ruta de Empleados
router.get('/Empleados', (req, res) => {
    conexion.query("SELECT * FROM empleados", (error, resultado) => {
        // Si hay un error en la consulta
        if (error) {
            console.log(error); // Muestra el error en la consola
            res.status(500).send('Error en la consulta'); // Devuelve un estado 500 (Error del servidor) con un mensaje
        }
        else {
            res.send(resultado); // Si no hay errores, envía el resultado en formato JSON
        }
    });
});

router.get('/Empleados2', (req, res) => {
    conexion.query("SELECT * FROM empleados", (error, resultado) => {
        if (error) {
            console.log(error); // Muestra el error en la consola
            res.status(500).send('Error en la consulta'); // Devuelve un estado 500 (Error del servidor) con un mensaje
        }
        else {
            //res.send(resultado);
            // Variable definida pero no usada en el renderizado
            // Renderiza una vista llamada 'cliente/index' y pasa los datos obtenidos en la consulta
            res.render("empleado/index", { empleados: resultado });
        } 
    })
});

router.get('/crear', (req, res) => {
    res.render('empleado/crear');
});

//Estamos recuperando los metodos que vamos a crear


// Definimos una ruta GET para '/Jefes'
// Al acceder a '/Jefes', se muestra un mensaje indicando la ruta correspondiente
router.get('/Jefes', (req, res) => {
    res.send('Esta es la ruta de Jefes');
});

// Exportamos el router para que pueda ser utilizado en otros archivos
// Esto permite modularizar las rutas en Express
module.exports = router;