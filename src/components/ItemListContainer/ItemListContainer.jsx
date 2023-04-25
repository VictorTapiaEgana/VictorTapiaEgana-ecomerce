import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greetings }) => {
  const stock = "5";
  const initial = "1";
  const producto = "Sillon de 3 cuerpos";

  const onAdd = (cantidad) => {
    console.log("Se agregaron:" + cantidad);
  };

  return (
    <>
      <h2> {greetings} </h2>

      {
        /* <ItemCount stock ={ stock } 
                       initial={ initial }
                       onAdd = { onAdd }
                       producto = { producto }
            /> */
      }

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="d-flex justify-content-center flex-wrap">
              <ItemList />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
