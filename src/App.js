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

function App() {
  const [categoria, setCategoria] = useState();
   
  useEffect(()=>{

      getCollections("categorias").then((result) => {
        setCategoria(result)
      });  
     
      // getDocument("categorias","bvCYa2KrTFfMvId8wf4N").then((result) =>{

      //   console.log("getdocuments",result); //BORRAR

      // });

    
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
          <Route path="*" element={<NoFound />} />

        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
