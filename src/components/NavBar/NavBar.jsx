import { Link } from "react-router-dom";
import Logo from "../../assets/logo/Logo2_nbg.png";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";



const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div className="container-fluid">        
            <Link to={'/'}>
               <img className="imgnombreempresa" src={Logo} alt="Nombre Empresa" />        
            </Link>                     
            
            <div className="d-flex">                                   

                  <Link className="navbar-brand" to={'/categorias/notebooks'}>Notebooks</Link>
                  <Link className="navbar-brand" to={'/categorias/sofas'}>Sofas</Link>
                  <Link className="navbar-brand" to={'/categorias/deportes'}>Deportes</Link>    

              
                  <CartWidget className="flex-grow-1" />

                        

            </div>

      </div>

    </nav>
  );
};

export default NavBar;