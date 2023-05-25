import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/Cart/Cart.jsx"
import NoFound from "./components/NoFound/NoFound.jsx"
import { ToastContainer } from 'react-toastify';

import "./App.css";
import "./dark_theme.css"
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
                  <Route exact path="/cart" element={<Cart />}/>              
                  <Route path="*" element={<NoFound />} />
           
              </Routes>           
           <Footer />
           <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
