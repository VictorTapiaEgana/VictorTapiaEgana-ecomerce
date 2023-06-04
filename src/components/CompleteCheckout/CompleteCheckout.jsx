import { useEffect } from "react";
import "./CompleteCheckout.css"
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const CompleteCheckout =() =>{

    const {orderNumber} = useParams();
    const navigate = useNavigate();
    
    return (
        <div className="pedidoFinalizado">
            <h1>Pedido Completado 🚚 </h1>
            <h4>Numero de Orden:</h4>
            <p></p>
            <h2><strong style={{color:"blue"}}>{orderNumber}</strong></h2>

            <button className="btn btn-secondary" style={{position:"relative",top:"20px"}} onClick={()=>{navigate('/')}}>Volver</button>
             
        </div>
    )

}

export default CompleteCheckout;