import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, imagen1, titulo, descripcion, precio }) => {
  return (
    <div className="card" style={{ width: "14rem" }}>
      <img src={require(`${imagen1}`)} className="card-img-top" alt={titulo} />      

      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-price">{precio.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 })} </p>

        <Link to={`/itemdetail/${id}`} className="btn btn-primary">Detalles</Link>

      </div>
    </div>
  );
};

export default Item;
