import "./Item.css";

const Item = ({ imagen1, titulo, descripcion, precio }) => {
  return (
    <div className="card" style={{ width: "13rem" }}>
      <img src={require(`${imagen1}`)} className="card-img-top" alt={titulo} />

      <div className="card-body">
        <h5 className="card-title">{titulo}</h5>
        <p className="card-text">{descripcion}</p>
        <p className="card-price">{precio}</p>

        <button
          className="btn btn-primary"
          onClick={() => console.log({ descripcion })}
        >
          Detalles
        </button>
      </div>
    </div>
  );
};

export default Item;
