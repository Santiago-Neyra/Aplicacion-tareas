import '../nuevaTarea/nuevatarea.css'
import { useState } from "react"

export const NuevaTarea=({NuevaTarea})=>{
    const [inputText, setImputText, ]=useState()
    const [importancia, setImportancia]=useState()
    const [fechaLimite, setFechaLimite, ]=useState()
    const [Descripcion, setDescripcion]=useState()
    const [show, setShow]=useState(false)
    const ocultar=()=>{
        setShow(false)
    }

    const ClickAgregar=()=>{
        setShow(!show)
    }

const EscribirTarea=(event)=>{
        setImputText(event.target.value)
        
    }
    const EscribirImportancia=(event)=>{
        setImportancia(event.target.value)
        
    }
    const EscribirDescripcion=(event)=>{
        setDescripcion(event.target.value)
        
    }
    const EscribirFecha=(event)=>{
        setFechaLimite(event.target.value)
        
    }

    if(show===false){
        return(
    <button className='buton2' onClick={()=>ClickAgregar()}>Agregar tarea</button>)
    }
    else{
    
    return(
        
        <div className='container-formulario'>
<div  >
    
<div class="input-group mb-3 formulario-compra">
  <span class="input-group-text span-input" id="basic-addon1">Título</span>
  <input onChange={EscribirTarea} type="text" class="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input></div>
 </div>
 <div >
            <div class="input-group mb-3 formulario-compra">
  <span class="input-group-text span-input" id="basic-addon1">Descripción</span>
  <input onChange={EscribirDescripcion} type="text" class="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input></div>
 </div>
 <div >
            <div class="input-group mb-3 formulario-compra">
  <span class="input-group-text span-input" id="basic-addon1">Fecha</span>
  <input onChange={EscribirFecha} type="text" class="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input></div>
 </div>
 
  <div >
            <div class="input-group mb-3 formulario-compra">
  <span class="input-group-text span-input" id="basic-addon1">Número de importancia</span>
  <input onChange={EscribirImportancia} type="text" class="form-control" placeholder="Escribe aquí" aria-label="Username" aria-describedby="basic-addon1"></input></div>
 </div>         
 <div>
 <button className='buton2' onClick={()=>NuevaTarea(inputText, importancia, fechaLimite, Descripcion)}>Añadir tarea </button>
 <button className='buton2' onClick={()=>ocultar()}>Ocultar </button>
 </div>
</div>
)

}
}