import { createContext, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {

  const [ArrayProductos, setArrayProductos] = useState([]);
 
   let ItemExist= false;
   
  //agregar items
  const onAdd = (item) => {
     
     const arrayCarrito = ArrayProductos.find(prod => prod.id === item.id)
     arrayCarrito !== undefined ? ItemExist=true : ItemExist= false;
    
    !ItemExist 
    ?
     setArrayProductos(ArrayProductos.concat(item))
    :     
    toast.error('Prodcuto ya se encuentra en el Carrito 🛒',{
      autoClose: 2000,
      pauseOnHover: false
    });
    ;

  };

  const limpiarCarrito = () =>{    
    setArrayProductos([]);
  }

  return (
    <CartContext.Provider value={{ ArrayProductos, ItemExist, setArrayProductos, onAdd ,limpiarCarrito }}>
      {children}
    </CartContext.Provider>
  );
};
