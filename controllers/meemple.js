const conexion = require("../database/db")

exports.save=(req,res)=>{
    const nombre=(req.body.nombre);
    const apellido=(req.body.apellido);
    const fecha=(req.body.fecha);
    const sueldo=(req.body.sueldo);
    const telefono=(req.body.telefono);

    //al campo nombre le mandamos nombre y asi
    conexion.query("insert into empleados set ?",{nombreE:nombre,
                                                 apellidoE:apellido,
                                                 fechaC:fecha,
                                                 sueldoE:sueldo,
                                                 telefono:telefono
    },(error,resultado)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/Empleados2")
        }
    });
};

exports.viewE = (req,res)=>{
    const codigoE = req.body.codigoE

    conexion.query("Select * from empleados where codigoE = ?",[codigoE]
    ,(error,resultado)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/Empleados2")
        }
    });
}