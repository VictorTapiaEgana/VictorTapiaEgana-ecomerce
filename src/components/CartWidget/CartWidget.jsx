import Carrito from "../../assets/imagenes/Carrito/shopping_cart.png"
import { CartContext } from "../context/CardContext";
import { Link } from "react-router-dom";
import "./CartWidget.css"
import { useContext } from "react";

const CartWidget = () =>{
    
   const {ArrayProductos} = useContext(CartContext);    

   var totalUnidades = ArrayProductos.reduce((total, ArrayProductos) => {
    return total + ArrayProductos.cant;
   }, 0);


    return(
        <div className="">

             <Link to={'/cart'}>
                <img  className="imgcarrito" src={ Carrito } alt="Carrito de Compras" />
            </Link> 

            <span className="position-relative translate-middle badge rounded-pill bg-danger">
                { totalUnidades } 
            </span>
        </div>
    )
}

export default CartWidget;