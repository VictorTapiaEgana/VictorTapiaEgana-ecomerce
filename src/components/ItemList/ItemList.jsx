import Item from "../Item/Item";
import "./ItemList.css";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import Loading from "../Loading/Loading.jsx";
import { GetProducts } from "../../AsyncMock.js";

const ItemList = ({categoryId}) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [productos, setProductos] = useState([]);  

  useEffect(() => {
    setIsLoading(true)
    GetProducts()
      .then((result) => {
        
        const propductosFiltrados = categoryId
        ? result.filter((product) => product.Categoria === categoryId)
        : result;

        setIsLoading(false);        
        setProductos(propductosFiltrados);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId]);

  return (
    <>
       {isLoading && <Loading />} 

       {!isLoading && 
           productos.map((item => {
               return (         
                  <Item
                      key={uuidv4()}
                      imagen1={`./productos/${item.id}.jpg`}            
                      titulo=  {item.Marca}
                      descripcion={item.Nombre}
                      precio={item.PrecioOferta}            
                      id={item.id}
                  />        
                )
           }))
      }
    </>
  );
};

export default ItemList;
