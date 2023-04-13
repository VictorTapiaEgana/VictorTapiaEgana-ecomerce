import "./NavBar.css";
import Logo from "../../assets/logo/Logo2_nbg.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
   
      <nav className="navbar bg-body-tertiary">
         <div className="container-fluid"> 
        
          <img className="imgnombreEmpresa" src={Logo} alt="Nombre Empresa" />

          <a className="navbar-brand" href="#">
            Computacion
          </a>
          <a className="navbar-brand" href="#">
            Sofas
          </a>
          <a className="navbar-brand" href="#">
            Deportes
          </a>   

            <CartWidget />          

        </div>
      </nav>
   
  );
};
export default NavBar;
