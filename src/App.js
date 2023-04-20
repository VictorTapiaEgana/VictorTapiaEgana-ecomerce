import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
  return (
    <>
      <div className="container">
        <div className="cabecera">
          <NavBar />        
        </div>
    </div>
    
    <ItemListContainer greetings={ "Bienvenidos a HABITIK"}/>    
    </>
  );
}

export default App;
