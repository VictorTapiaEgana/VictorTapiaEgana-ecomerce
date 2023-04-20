import { useState } from "react";
import "./ItemCount.css";
import menos from "../../assets/imagenes/Carrito/menos.png";
import mas from "../../assets/imagenes/Carrito/mas.png";

const ItemCount = ({stock, initial ,onAdd ,producto }) => {

    let hayStock = "";
    let [cantidad,setCantidad] = useState(1);

    stock >= 1 ? hayStock =true : hayStock=false;        

    return( 
        <div className={`container bg-light ${!hayStock ? "desabilitado" : "" }`} style={{width:"200px"}} >
             <h5> { producto } </h5>
             
             <div className="container" style={{ backgroundColor:"white" }}> 
               <button className="btn btn-link" onClick={ ()=>{cantidad > 1 && setCantidad(cantidad - 1)}}><img className="icono" src={ menos } alt="Restar Item" /></button> 
               <p> { cantidad } </p>
               <button className="btn btn-link" onClick={ ()=>{cantidad < stock && setCantidad(cantidad + 1)} }><img className="icono" src={ mas } alt="Sumar Item"/> </button> 
             </div>

             {
                !hayStock && (
                    <p className="sinStock" style={{ color:"red" }}>sin stock disponible</p>
                )
             }

             <div className="btn-Add">               
                <button className={`btn btn-secondary ${hayStock ? "" : " disabled" } `} onClick={ ()=> onAdd(cantidad) }>Agregar</button>
            </div>

        </div>

    )
}

export default ItemCount;