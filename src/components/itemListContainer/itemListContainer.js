import { useEffect, useState } from "react"
import ListaTareas from "../tareasLista/tareas.json"
import { ItemList } from "../itemList/itemList"
import { NuevaTarea } from "../nuevaTarea/nuevaTarea"


export const ItemListContainer = ()=>{
    const [tareas, setTareas]=useState([])
    
    const AñadirTarea=(tarea, importancia, fechaLimite, Descripcion)=>{
       

        setTareas([{titulo:tarea, importancia:parseInt(importancia), fecha:fechaLimite, descripcion:Descripcion, numero:(tareas.length+1), realizada:false } , ...tareas])
    }
    const promesa = new Promise((resolve, reject)=>{
        //CON ESTE SET TIMEOUT TARDAREMOS 2S EN RECIBIR RESPUESTA, SIMULANDO UN SERVIDOR
            setTimeout(()=>{
        //NOS RETORNA UN ARREGLO
            resolve(ListaTareas)
        },1000);
        
        })

    useEffect(()=>{
       promesa.then(resultado=>{
           setTareas(resultado)
       }) 
    },[])
    console.log(tareas)
    console.log(ListaTareas)
    const removeTarea=(idTarea)=>{
        const tareasNuevas= tareas.filter((e)=>e.numero !== idTarea)
        setTareas(tareasNuevas)


    }

    return(



        <div className="container-fluid">
            <NuevaTarea NuevaTarea={(tarea, importancia, fechaLimite,Descripcion)=>AñadirTarea(tarea, importancia, fechaLimite, Descripcion)}></NuevaTarea>
        <ItemList listatareas={tareas} removeTarea={(numero)=>removeTarea(numero)}></ItemList>
        </div>


    )
}