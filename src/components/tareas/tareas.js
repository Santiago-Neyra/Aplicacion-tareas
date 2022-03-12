import react, {Component} from "react";
import { useState } from "react";
import "../tareas/tareas.css"
export const Tareas =({tarea, removeTarea})=>{
    const [realizada, setRealizada]= useState(tarea.realizada)
    

    const buttonTerminar=()=>{
        setRealizada(!realizada)
    }


    const ordenDeImportancia=()=>{
        if(tarea.importancia===1){
            return ({ color:"rgb(14, 161, 112)"} )
        }
        if(tarea.importancia===2){
            return ({ color:"rgb(63, 85, 11)"} )
        }
        if(tarea.importancia===3){
            return ({ color:"rgb(158, 91, 27)"} )
        }
        if(tarea.importancia===4){
            return ({ color:"rgb(85, 34, 11)"} )
        }
        if(tarea.importancia===5){
            return ({ color:"red"} )
        }

    }
return(

   
    <div className="col-12 col-md-4" >
   
    <div className="card carta" style={realizada ? {background:"rgba(109, 172, 27, 0.781)"} : {background:"rgba(231, 155, 14, 0.897)"}}>
        <div className="x"> <button className="remover" onClick={()=>removeTarea(tarea.numero)}>x</button> </div>
    <h1 className="titulo-tarea">{tarea.titulo}</h1>  
    <p className="descripcion-tarea">Descripcion: {tarea.descripcion}</p>
    <p className="orden-tarea">Importancia: <span className="spannumero" style={ordenDeImportancia()}>{tarea.importancia}</span> </p>
    <p className="fecha">Fecha a terminar: {tarea.fecha}</p>
    {realizada===false ? <button onClick={()=>buttonTerminar()} className="buton">Terminar</button> : <button onClick={()=>buttonTerminar()} className="buton">Volver a pendiente</button> }


    </div>
    </div>
)

}