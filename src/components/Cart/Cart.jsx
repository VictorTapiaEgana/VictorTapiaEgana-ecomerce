import { CartContext } from "../context/CardContext";
import { useContext } from "react";
import Bolsa from "../../assets/imagenes/Carrito/shopping-bag.png";
import "./Cart.css";

const Cart = () => {
  const { ArrayProductos } = useContext(CartContext);

  return (
    <div className="CartitoDeCompras">
      {ArrayProductos.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>
          No hay Productos en el Carrito 💔
        </h1>
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
                  <th scope="col">Precio</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {ArrayProductos.map((prod, index) => {
                  return (
                    <tr key={prod.id}>
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

                      <td>
                        {prod.precio.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                        })}
                      </td>
                      <td>{prod.cant}</td>
                      <td>
                        {(prod.precio * prod.cant).toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                          minimumFractionDigits: 0,
                        })}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
export default Cart;
