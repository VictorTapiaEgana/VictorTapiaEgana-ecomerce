import Logo from "../../assets/logo/Logo2_nbg.png";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      
      <div className="container-fluid">        
            <img className="imgnombreEmpresa" src={Logo} alt="Nombre Empresa" />        
            
            <div className="d-flex">
              <a className="navbar-brand" href="#">Computacion</a>
              <a className="navbar-brand" href="#">Sofas</a>
              <a className="navbar-brand" href="#">Deportes</a>   

              <CartWidget className="flex-grow-1" />
            </div>

      </div>

    </nav>
  );
};

export default NavBar;