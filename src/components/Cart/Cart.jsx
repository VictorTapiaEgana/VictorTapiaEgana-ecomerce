import { CartContext } from "../context/CardContext";
import { useContext } from "react";

const Cart = () =>{

    const { ArrayProductos } = useContext(CartContext);

    return(

        ArrayProductos.map((prod) =>{
            console.log(prod.nombre)

        })

    )
}
export default Cart;