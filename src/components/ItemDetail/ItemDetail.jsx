import ItemCount from "../ItemCount/ItemCount.jsx"
import "./ItemDetail.css"

const ItemDetail = ({ marca, nombre, PrecioNormal, PrecioOferta, PrecioTarjeta, imagen1,stock }) =>{
    
    return(
      <article className="ItemDetail">
       <h1> Descripcion</h1>
        <div className="card" style={{"width": "18rem"}}>        
             <img src={require(`${imagen1}`)} className="card-img-top" alt={ nombre } />             
             <div className="card-body">
                <strong>{ marca }</strong>
                <p className="font-monospace" style={{fontSize:"13px"}}>{ nombre }</p>
                <p style={{textDecoration:"line-through"}}> {`Precio Normal  :${PrecioNormal.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })}`} </p>                
                
                {PrecioTarjeta 
                ? <p style={{textDecoration:"line-through"}}> {`Precio Oferta  :${PrecioOferta.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })}`}</p> 
                : <p style={{color:"red", fontWeight:"600"}}> {`Precio Oferta  :${PrecioOferta.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })}✔`} </p>
                }
                
                { PrecioTarjeta && 
                  <p style={{color:"red", fontWeight:"600"}}> {`Precio Tarjeta :${PrecioTarjeta.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })}✔`} </p> 
                } 

                <ItemCount stock={stock}
                           initial={1}
                />
            </div>                    
        </div>       
      </article>
    )
}

export default ItemDetail;