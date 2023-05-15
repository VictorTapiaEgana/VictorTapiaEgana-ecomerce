import { useEffect, useState } from "react";
import "./ItemCount.css";
import menos from "../../assets/imagenes/Carrito/menos.png";
import mas from "../../assets/imagenes/Carrito/mas.png";
import { CartContext } from "../context/CardContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({ stock, initial,id, nombre,img1,precio}) => {
  let hayStock = "";
  let [cantidad, setCantidad] = useState(0);
  const { onAdd } = useContext(CartContext);

  useEffect(() => setCantidad(initial), [initial]);

  stock >= 1 ? (hayStock = true) : (hayStock = false);

  return (
    <div
      className={`container ${!hayStock ? "desabilitado" : ""}`}
      style={{ width: "200px" }}
    >
      <div className="container " style={{ backgroundColor: "white" }}>
        <button
          className="btn btn-link"
          onClick={() => {
            cantidad > 1 && setCantidad(cantidad - 1);
          }}
        >
          <img className="icono" src={menos} alt="Restar Item" />
        </button>
        <p> {cantidad} </p>
        <button
          className="btn btn-link"
          onClick={() => {
            cantidad < stock && setCantidad(cantidad + 1);
          }}
        >
          <img className="icono" src={mas} alt="Sumar Item" />{" "}
        </button>
      </div>

      {!hayStock ? (
        <p className="sinStock" style={{ color: "red" }}>
          Sin stock disponible
        </p>
      ) : (
        <p className="sinStock" style={{ color: "red" }}>
          Stock disponible {stock}
        </p>
      )}

      <div className="btn-Add">
        
        <Link to={'/cart'}>
          <button
            className={`btn btn-secondary ${hayStock ? "" : " disabled"} `}
            
            onClick={() => onAdd({id: id,
                                  nombre:nombre,
                                  imagen:img1,
                                  cant:cantidad,
                                  precio:precio
                                  })
                      }                      
          >
            Comprar
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ItemCount;
