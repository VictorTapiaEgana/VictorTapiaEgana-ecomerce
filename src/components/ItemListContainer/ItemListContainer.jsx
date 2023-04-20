import ItemCount from "../ItemCount/ItemCount";
import "./ItemListContainer.css"

const ItemListContainer = ({ greetings}) =>{
    
    const stock ="5";
    const initial ="1"
    const producto ="Sillon de 3 cuerpos"

    const onAdd = (cantidad) =>{
        console.log("Se agregaron:" + cantidad)
    };
    
    return(
        <>
            <h2> { greetings } </h2>

            <ItemCount stock ={ stock } 
                       initial={ initial }
                       onAdd = { onAdd }
                       producto = { producto }
            />

        </>
    )
}

export default ItemListContainer;