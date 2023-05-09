import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

const ItemListContainer = () => {
 
  const{ categoryId } = useParams(); 
  
 

  return (
    <div className="ItemListContainer">    
      <div className="row mx-auto">
        <div className="col mx-auto">
          <div className="d-flex justify-content-center flex-wrap">
            <ItemList categoryId={categoryId}/>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default ItemListContainer;
