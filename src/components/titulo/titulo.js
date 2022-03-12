import "../titulo/titulo.css"
export const Titulo=( {frase})=> {
    return(
        <div className="cabezal">
        <h1 className="titulo">{frase}</h1>
        <p >Acá podés anotar tus metas a cumplir para este año y llevar el recuento del éxito de las mismas. Buena suerte. </p>   
        </div>
    )
}