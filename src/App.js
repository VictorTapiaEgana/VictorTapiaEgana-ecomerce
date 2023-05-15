import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/Cart/Cart.jsx"
import NoFound from "./components/NoFound/NoFound.jsx"

import "./App.css";
import "./dark_theme.css"

import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    //fondos
    // const body = document.querySelector("body");
    // const navbar = document.querySelector("nav")
    // const navbarBrand=document.querySelector(".navbar-brand");
    // const containerfluid = document.querySelector(".container-fluid");
    // const footer= document.querySelector(".footer");
    // const container = document.querySelector(".container");

    // const card = document.querySelector("div.d-flex.justify-content-center");

    if (darkTheme) {
      // body.classList.add("dark_theme");
      // navbar.classList.add("dark_theme");
      // containerfluid.classList.add("dark_theme");
      // footer.classList.add("dark_theme");
      // container.classList.add(".dark_theme");
      // navbarBrand.classList.add("dark_theme");

      // card.classList.add("dark_cards")

    } else {

      // body.classList.remove("dark_theme");
      // navbar.classList.remove("dark_theme");
      // containerfluid.classList.remove("dark_theme");
      // footer.classList.remove("dark_theme");
      // container.classList.remove(".dark_theme");
    }

  }, [darkTheme]);

  return (
    <>
      <BrowserRouter>          
      <NavBar setDarkTheme={setDarkTheme} darkTheme={darkTheme} />      
              <Routes>
           
               <Route exact path="/" element={ <ItemListContainer /> } />
               <Route exact path="/categorias/:categoryId" element={ <ItemListContainer/>}/>
               <Route exact path="/itemdetail/:productId" element={ <ItemDetailContainer />} />              
               <Route exact path="/cart" element={<Cart />}/>              
               <Route path="*" element={<NoFound />} />
           
              </Routes>           
           <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
