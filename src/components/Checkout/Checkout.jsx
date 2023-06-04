import { toast } from "react-toastify"
import "./Checkout.css"
import { useContext, useState } from "react"
import { CartContext } from "../context/CardContext"
import { createOrder } from "../../utils/getfirestore"
import { useNavigate } from 'react-router-dom';

const Checkout = () =>{

    const {ArrayProductos , limpiarCarrito } = useContext(CartContext);

    const [nombre,setNombre] = useState('')
    const [telefono,setTelefono] = useState('')    
    const [correo,setCorreo] = useState('')

    const navigate = useNavigate();

    const handlerConfirmarOrden = () =>{

        var MontoTotal = ArrayProductos.reduce((total, ArrayProductos) => {
           return total + (ArrayProductos.precio * ArrayProductos.cant);
         }, 0);


        if (nombre !=='' && telefono!=='' && correo!=='') {
            
            
            const Usuario = {
                buy_nombre: nombre,
                buy_telefono: telefono,
                nuy_correo:correo
            }

            createOrder(Usuario,ArrayProductos,MontoTotal).then((result) => {                  
                limpiarCarrito()
                navigate(`completecheckout/${result}`)
            });

        }else{
            toast.error('Ingrese Todos los Datos para proseguir',{
                autoClose: 3000,
                pauseOnHover: false
              });
        }            

    }

    return(
      <div className="inputGroup">
        <h3>Ingrese sus datos</h3>
        <h3>para completar el Pedido</h3>
        
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Nombre y apellido" onChange={(e)=>{setNombre(e.target.value)}}/>
            <label htmlFor="floatingInput">Nombre y apellido</label>
        </div>

        <div className="form-floating mb-3">
            <input type="text" className="form-control" id="floatingInput" placeholder="Telefono de contacto" onChange={(e)=>{setTelefono(e.target.value)}}/>
            <label htmlFor="floatingInput">Telefono de contacto</label>
        </div>

        <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>{setCorreo(e.target.value)}}/>
            <label htmlFor="floatingInput">correo electronico</label>
        </div>

        <button className="btn btn-danger" onClick={handlerConfirmarOrden}>Confirmar Pedido</button>

      </div>
    )

}

export default Checkout;