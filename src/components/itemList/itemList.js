
import { useState } from "react"
import { Tareas } from "../tareas/tareas"

export const ItemList=({listatareas, removeTarea})=>{

  
    return(
        <> <div className="container">
            <div className="row">
        {listatareas.map((e)=>{
           return( <Tareas tarea={e} key={e.id} removeTarea={(numero)=>removeTarea(numero)}></Tareas>)
        }  
        )
            
        }
        </div>
        </div>
        </>
    )}


