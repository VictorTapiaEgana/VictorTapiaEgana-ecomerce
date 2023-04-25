import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = ({ greetings }) => {
 
  // const onAdd = (cantidad) => {
  //   console.log("Se agregaron:" + cantidad);
  // };

  return (
    <>
      <h2> {greetings} </h2>

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
