import "./Footer.css";

import coderhouse  from "../../assets/logo/coderhouse.png";
import github from "../../assets/logo/GitHub.png";
import react from "../../assets/logo/react.png"

const Footer = () =>{
    return(
      <footer className="footer mt-auto py-1 bg-light">
      <div className="container">
           <p className="text-muted">Habitik e-commerce para el curso de Reactjs de CODERHOUSE</p>
           <div className="footer__iconos">
          
            <a href="https://www.coderhouse.com" rel="noreferrer" target="_blank"><img src={ coderhouse } alt="Logo CoderHouse" /></a>
            <a href="https://github.com/VictorTapiaEgana/VictorTapiaEgana-ecomercecoderhouse"  rel="noreferrer" target="_blank"><img src={ github } alt="Logo Github" style={{width:"70px"}}/></a>
            <a href="https://react.dev/"  rel="noreferrer" target="_blank" > <img src={react } alt="Logo React" style={{width:"55px"}}/></a>

           </div>
        </div>
      </footer>

    )
}

export default Footer;