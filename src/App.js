import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx";
import Cart from "./components/Cart/Cart.jsx";
import NoFound from "./components/NoFound/NoFound.jsx";
import { ToastContainer } from "react-toastify";

import { getFirestore, doc, getDoc, collection,getDocs } from "firebase/firestore";

import "./App.css";
import "./dark_theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [categoria, setCategoria] = useState();

  // useEffect(() => {
  //   const db = getFirestore();

  //   const getCategorias = doc(db, "categorias", "bvCYa2KrTFfMvId8wf4N");

  //   getDoc(getCategorias).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setCategoria(snapshot.data());

  //       // setCategoria({ id: snapshot.id, ...snapshot.data() });
  //     }
  //   });
  // }, []);

  // console.log(categoria);}

  
  useEffect(()=>{
    const db = getFirestore()
    const getColleccionCategorias = collection(db,"categorias");
    getDocs(getColleccionCategorias).then((snapshot)=>{      
      setCategoria(snapshot.docs.map((doc)=>(doc.data())))
    })

  },[])


  return (
    <>
      <BrowserRouter>
        <NavBar categoria = { categoria }/>
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route
            exact
            path="/categorias/:categoryId"
            element={<ItemListContainer />}
          />
          <Route
            exact
            path="/itemdetail/:productId"
            element={<ItemDetailContainer />}
          />
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
