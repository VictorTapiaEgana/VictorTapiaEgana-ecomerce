import { CartContext } from "../context/CardContext";
import { useContext, useState } from "react";
import Bolsa from "../../assets/imagenes/Carrito/shopping-bag.png";
import "./Cart.css";
import { Link } from "react-router-dom";
import deleteimg from "../../assets/imagenes/Carrito/delete.png"
import update from "../../assets/imagenes/Carrito/update.png"

const Cart = () => {
  const { ArrayProductos, setArrayProductos, limpiarCarrito} = useContext(CartContext);

  const HandleDeleteFromCarrito = (id) =>{   
    const arrayFiltrado = ArrayProductos.filter(prod => prod.id != id)
    setArrayProductos(arrayFiltrado)
  }  

  //Total Carrito
   var MontoTotal = ArrayProductos.reduce((total, ArrayProductos) => {
    return total + (ArrayProductos.precio * ArrayProductos.cant);
   }, 0);

   //Total Items
   var totalUnidades = ArrayProductos.reduce((total, ArrayProductos) => {
    return total + ArrayProductos.cant;
   }, 0);


  return (
    <div className="CartitoDeCompras">
      {ArrayProductos.length === 0 ? (
        
        <div style={{ textAlign: "center" }}>
            <h1 >
            No hay Productos en el Carrito 💔          
            </h1>
            <Link to={'/'}>
              <button className="btn btn-secondary" style={{marginBottom:"20px", position:"relative", top:"10px"}}>Ir al Home</button>
            </Link>
        </div>

      ) : (
        <div className="todo">
          <div className="titulo">
            <img
              src={Bolsa}
              alt="Mis Compras"
              style={{ width: "35px", position: "relative", top: "-4px" }}
            />
            <h1>Mis Compras</h1>
          </div>

          <div className="centerTable">
            <table className="table table table-striped">
              <thead>
                <tr className="table-secondary ">
                  <th scope="col">#</th>
                  <th scope="col">Producto</th>
                  <th  style={{textAlign:"center"}} scope="col">Precio</th>
                  <th  style={{textAlign:"center"}} scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                  <th scope="col">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {ArrayProductos.map((prod, index) => {
                  return (
                    <tr key={index}>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <img
                          className="imgMiniatura"
                          src={require(`${prod.imagen}`)}
                          alt="imgen miniatura del procucto"
                        />
                        <p style={{ textTransform: "lowercase" }}>
                          {prod.nombre.substring(0, 30)}
                        </p>
                      </td>

                      <td style={{textAlign:"center"}}>
                        {prod.precio.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                        })}
                      </td>
                      <td style={{textAlign:"center"}}>{prod.cant}</td>
                      <td>
                        {(prod.precio * prod.cant).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                        })}
                      </td>
                      <td>
                        <img id={prod.id} 
                             src={deleteimg} 
                             alt="eliminar proucto" 
                             style={{width:"40px"}} 
                             onClick={()=>HandleDeleteFromCarrito(prod.id)}/>
                        {/* <img id={prod.id}
                             src={update}     
                             alt="Actualizar Producto"
                             style={{width:"30px"}}
                             onClick={() => handleUpdteFromCarrito(prod.id)}
                        /> */}
                      </td>

                    </tr>
                  );
                })}
                {/*  Fila al final de la tabla con totales */}
                <tr key='1000'>
                      <th scope="row"></th>
                        <td>  
                          <strong>Total Articulos:</strong>
                        </td>  
                        <td>                      
                          <strong>  { totalUnidades } </strong>    
                        </td>  
                        <td>   
                        <strong>Total:</strong>                       
                        </td>                          
                        <td>   
                         <strong style={{color:"red"}}>
                                 {MontoTotal.toLocaleString("en-US", {
                                  style: "currency",
                                  currency: "USD",
                                  minimumFractionDigits: 0,
                                 })}
                          </strong>                                                
                        </td>  
                        <td>                                                
                        </td>  
                </tr>      


                
              </tbody>
            </table>
            
          </div>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>

              <button className="btn btn-secondary" type="button" style={{marginBottom:"-30px",marginTop:"30px", width:"90vw"}} onClick={()=>limpiarCarrito()} >Limpiar Carrito</button>  
              
              <Link to={'checkout'}>
                    <button className="btn btn-primary" type="button" style={{marginBottom:"50px",width:"90vw"}}>Finalizar compra 🛒</button> 
              </Link>   

              <Link to={'/'}>
                <button className="btn btn-secondary" type="button" style={{marginBottom:"15px", width:"90vw"}} >Seguir Comprando ❤</button>     
              </Link>    

          </div>
        
        </div>
      )}
    </div>
  );
};
export default Cart;
