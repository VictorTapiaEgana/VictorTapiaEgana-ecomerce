import Carrito from "../../assets/imagenes/Carrito/shopping_cart.png"
import "./CartWidget.css"

const CartWidget = () =>{
    
    const CartWidget__Cantidad = 0;

    return(
        <div className="">
            <img  className="imgcarrito" src={ Carrito } alt="Carrito de Compras" />
            <span className="position-relative translate-middle badge rounded-pill bg-danger">
                { CartWidget__Cantidad }
            </span>
        </div>
    )
}

export default CartWidget;