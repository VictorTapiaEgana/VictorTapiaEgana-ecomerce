import Carrito from "../../assets/imagenes/Carrito/shopping_cart.png"
import "./CartWidget.css"

const CartWidget = () =>{
    return(
        <div className="">
            <img  className="imgcarrito" src={ Carrito } alt="Carrito de Compras" />
            <label className="lblcantidad"><span>10</span></label>
        </div>
    )
}

export default CartWidget;