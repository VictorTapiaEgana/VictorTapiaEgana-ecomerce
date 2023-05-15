import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {

  const [ArrayProductos, setArrayProductos] = useState([]);

  // no aceptar duplicados y mantener su consistencia.
  
  // addItem(item, quantity) // agregar cierta cantidad de un ítem al carrito
  
  // removeItem(itemId) // Remover un item del cart por usando su id
  
  // clear() // Remover todos los items
  
  // isInCart: (id) => true|false

  

  const onAdd = (item) => {
    setArrayProductos(ArrayProductos.concat(item));   
  };

  return (
    <CartContext.Provider value={{ ArrayProductos, setArrayProductos, onAdd }}>
      {children}
    </CartContext.Provider>
  );
};
