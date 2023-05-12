import Carrito from "../../assets/imagenes/Carrito/shopping_cart.png"
import { CartContext } from "../context/CardContext";
import "./CartWidget.css"
import { useContext } from "react";

const CartWidget = () =>{
    
   const {ArrayProductos} = useContext(CartContext);    

    return(
        <div className="">
            <img  className="imgcarrito" src={ Carrito } alt="Carrito de Compras" />
            <span className="position-relative translate-middle badge rounded-pill bg-danger">
                { ArrayProductos }
            </span>
        </div>
    )
}

export default CartWidget;