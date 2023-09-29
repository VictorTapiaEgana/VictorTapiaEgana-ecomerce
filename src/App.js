import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/Cart/Cart.jsx";
import NoFound from "./components/NoFound/NoFound.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { getCollections, getDocument } from "./utils/getfirestore.js";

import "./App.css";
import "./dark_theme.css";
import Checkout from "./components/Checkout/Checkout.jsx";
import CompleteCheckout from "./components/CompleteCheckout/CompleteCheckout.jsx";

function App() {
  const [categoria, setCategoria] = useState();
   
  useEffect(()=>{

      getCollections("categorias").then((result) => {
        setCategoria(result)
      });  
    
  },[])


  return (
    <>
      <BrowserRouter>
        <NavBar categoria = { categoria }/>
        <Routes>
          
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/categorias/:categoryId" element={<ItemListContainer />}/>
          <Route exact path="/itemdetail/:productId" element={<ItemDetailContainer />}/>
          <Route exact path="/cart" element={<Cart />} />
          
          <Route exact path="cart/checkout" element={ <Checkout /> }/>
          <Route exact path="cart/checkout/completecheckout/:orderNumber" element = { <CompleteCheckout/>}/>

          <Route path="*" element={<NoFound />} />

        </Routes>
      
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
