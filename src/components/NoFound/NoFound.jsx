import img1 from "../../assets/404.svg";

const NoFound  = () =>{
    return(
        <div style={{textAlign:"center",position:"relative",top:"160px"}}>
            <img src={ img1 } alt="Pagina no encontrada"/>
            <h2></h2>
        </div>
    )
}

export default NoFound;