const conexion = require("../database/db")

exports.saveE=(req,res)=>{
    const nombreE=(req.body.nombreE);
    const apellidoE=(req.body.apellidoE);
    const fechaC=(req.body.fechaC);
    const sueldoE=(req.body.sueldoE);
    const telefono=(req.body.telefono);
    const idiomaE=(req.body.idiomaE);

    //al campo nombre le mandamos nombre y asi
    conexion.query("insert into empleados set ?",{nombreE:nombreE,
                                                 apellidoE:apellidoE,
                                                 fechaC:fechaC,
                                                 sueldoE:sueldoE,
                                                 telefono:telefono,
                                                 idiomaE:idiomaE,
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

exports.editE = (req,res)=>{
    const codigoE =(req.body.codigoE)
    const nombreE=(req.body.nombreE);
    const apellidoE=(req.body.apellidoE);
    const fechaC=(req.body.fechaC);
    const sueldoE=(req.body.sueldoE);
    const telefono=(req.body.telefono);
    const idiomaE = (req.body.idiomaE);

    conexion.query("update empleados set ? where codigoE =?",[{nombreE:nombreE,
                                                              apellidoE:apellidoE,
        fechaC:fechaC,
        sueldoE:sueldoE,
        telefono:telefono,
                                                    idiomaE:idiomaE, },
                                                    codigoE]
    ,(error,resultado)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/Empleados2")
        }
    });
}

exports.editEI = (req,res)=>{
    const codigoE =(req.body.codigoE)
    const nombreE=(req.body.nombreE);
    const apellidoE=(req.body.apellidoE);
    const fechaC=(req.body.fechaC);
    const sueldoE=(req.body.sueldoE);
    const telefono=(req.body.telefono);
    const idiomaE = (req.body.idiomaE);

    conexion.query("update empleados set ? where codigoE =?",[{nombreE:nombreE,
                                                              apellidoE:apellidoE,
        fechaC:fechaC,
        sueldoE:sueldoE,
        telefono:telefono,
                                                    idiomaE:idiomaE, },
                                                    codigoE]
    ,(error,resultado)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/Empleados2")
        }
    });
}

exports.eliminaE = (req,res)=>{
    const codigoE = req.body.codigoE;

    conexion.query("DELETE FROM empleados WHERE codigoE = ?",[codigoE],(error,resultado)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/Empleados2")
        }
    });
}