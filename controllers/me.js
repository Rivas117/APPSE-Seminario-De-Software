const conexion = require("../database/db")

exports.save=(req,res)=>{
    const nombre=(req.body.nombre);
    const apellido=(req.body.apellido);
    const edad=(req.body.edad);
    const telefono=(req.body.telefono);
    const ciudad=(req.body.ciudad);

    //al campo nombre le mandamos nombre y asi
    conexion.query("insert into clientes set ?",{nombre:nombre,
                                                apellido:apellido,
                                                edad:edad,
                                                telefono:telefono,
                                                ciudad:ciudad
    },(error,resultado)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/cliente2")
        }
    });
};


exports.view = (req,res)=>{
    const codigo = req.body.codigo

    conexion.query("Select * from clientes where codigo = ?",[codigo]
    ,(error,resultado)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/cliente2")
        }
    });
}

exports.edit = (req,res)=>{
    const codigo =(req.body.codigo)
    const nombre=(req.body.nombre);
    const apellido=(req.body.apellido);
    const edad=(req.body.edad);
    const telefono=(req.body.telefono);
    const ciudad=(req.body.ciudad);

    conexion.query("update clientes set ? where codigo =?",[{nombre:nombre,
                                                    apellido:apellido,
                                                    edad:edad,
                                                    telefono:telefono,
                                                    ciudad:ciudad,},
                                                    codigo]
    ,(error,resultado)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/cliente2")
        }
    });
}

exports.elimina = (req,res)=>{
    const codigo = req.body.codigo;

    conexion.query("DELETE FROM clientes WHERE codigo = ?",[codigo],(error,resultado)=>{
        if(error){
            console.log(error)
        }else{
            res.redirect("/cliente2")
        }
    });
}

////////////////////////////////////////////////////////////////////

