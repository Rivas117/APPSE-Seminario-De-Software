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
router.get("/clientes/ver/:id",(req,res)=>{
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

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.get("/clientes/editar/:id",(req,res)=>{
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
router.get("/clientes/eliminar/:id",(req,res)=>{
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








///////////////////////////////////////////////////////////////////////////////////
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




router.get('/crear2', (req, res) => {
    res.render('empleado/crear');
});


const metodosE = require("./controllers/meemple");
router.post("/saveE",metodosE.saveE)


router.get("/empleados/ver/:id",(req,res)=>{
    const codigoE = req.params.id;
    conexion.query("select * from empleados where codigoE = ?",[codigoE],(error,resultado)=>{
        if (error) {
            console.log(error); 
            res.status(500).send('Error en la consulta');
        }
        else {
            res.render("empleado/ver", { empleados: resultado[0]});
        }
    })
});

router.post("/viewE",metodosE.viewE);



router.get("/empleados/editar/:id",(req,res)=>{
    const codigoE = req.params.id;
    conexion.query("select * from empleados where codigoE = ?",[codigoE],(error,resultado)=>{
        if (error) {
            console.log(error); 
            res.status(500).send('Error en la consulta');
        }
        else {
            res.render("empleado/editar", { empleados: resultado[0]});
        }
    })
});

router.post("/editE",metodosE.editE);



router.get("/empleados/editaridioma/:id",(req,res)=>{
    const codigoE = req.params.id;
    conexion.query("select * from empleados where codigoE = ?",[codigoE],(error,resultado)=>{
        if (error) {
            console.log(error); 
            res.status(500).send('Error en la consulta');
        }
        else {
            res.render("empleado/editaridioma", { empleados: resultado[0]});
        }
    })
});

router.post("/editEI",metodosE.editEI);


router.get("/empleados/eliminar/:id",(req,res)=>{
    const codigoE = req.params.id;
    conexion.query("select * from empleados where codigoE = ?",[codigoE],(error,resultado)=>{
        if (error) {
            console.log(error); 
            res.status(500).send('Error en la consulta');
        }
        else {
            res.render("empleado/eliminar", { empleados: resultado[0]});
        }
    })
});

router.post("/eliminaE",metodosE.eliminaE);


/////////////////////////////////////////////////////////////////////////////////////
//Estamos recuperando los metodos que vamos a crear

// Exportamos el router para que pueda ser utilizado en otros archivos
// Esto permite modularizar las rutas en Express
module.exports = router;