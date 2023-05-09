import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import NoFound from "./components/NoFound/NoFound.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>          
           <NavBar />          
              <Routes>
           
               <Route exact path="/" element={ <ItemListContainer /> } />
               <Route exact path="/categorias/:categoryId" element={ <ItemListContainer/>}/>
               <Route exact path="/itemdetail/:productId" element={ <ItemDetailContainer />} />              
               <Route path="*" element={<NoFound />} />
           
              </Routes>           
           <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
