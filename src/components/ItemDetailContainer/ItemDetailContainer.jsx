import { useEffect } from "react";
import "./ItemDetailContainer.css";
import { GetProductsById } from "../../AsyncMock.js";
import { useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

const ItemDetailContainer = () => {
  
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const {productId} = useParams();  

    useEffect(() => {
      
       GetProductsById(productId)
       
         .then((result) => {   
            setIsLoading(false);         
            setProduct(result);
          })
         .catch((error) => {
            console.log(error);
         });
    }, [productId]);

  return (    
    <article className="container">
      <h1> Descripcion</h1>
         {isLoading && <Loading/>}
      
         {!isLoading && <ItemDetail
                                  key={product.id}
                                  marca={product.Marca}
                                  nombre={product.Nombre}
                                  PrecioNormal={product.PrecioNormal}
                                  PrecioOferta={product.PrecioOferta}
                                  PrecioTarjeta={product.PrecioTarjeta}
                                  imagen1={`./productos/${product.id}.jpg`} 
                                  stock = {product.Stock}
                        />
          }  
    </article>    
  );
};

export default ItemDetailContainer;
