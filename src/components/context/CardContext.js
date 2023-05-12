import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartContextProvider = ({ children }) => {
  const [ArrayProductos, setArrayProductos] = useState();

  const add_Productos = (array) => {
    setArrayProductos(array);
  };

  return (
    <CartContext.Provider value={{ ArrayProductos, add_Productos }}>
      {children}
    </CartContext.Provider>
  );
};
