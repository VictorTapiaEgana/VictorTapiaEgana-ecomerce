import Item from "../Item/Item";
import "./ItemList.css";
import { v4 as uuidv4 } from 'uuid';
import { useState,useEffect } from "react";

const ItemList = () => {  

  const [NewArray,setNewArray] = useState([]);

  //Arreglos   
  const ArrayNotebboks = [
    {"Marca":"ACER",
    "Nombre":"ACER SWIFT 3 / INTEL CORE I5 / 8GB RAM / 256GB SSD / 14 FHD",
    "PrecioNormal":"$839.990",
    "PrecioOferta":"$549.990",
    "PrecioTarjeta":"$519.990",
    "field6":"",
    "Modelo":"SWIFT 3",
    "Modelo Sistema Operativo":"WINDOWS 11 HOME SL",
    "Tipo Procesador":"Intel Core I5",
    "Modelo Procesador":"Intel Core i5-1135G7",
    "Velocidad Procesador (GHz)":"2.5 / 4.5GHz",
    "Memoria RAM":"8 GB","Tipo de Memoria Ram":"DDR4",
    "RAM Expandible":"No",
    "Tamaño Pantalla Pulgadas":"14"},
    
    {"Marca":"LENOVO","Nombre":"LENOVO GAMING 3 / INTEL CORE I5 / 8GB RAM / 1TB+256GB SSD / 15.6\" FHD / NVIDIA GEFORCE GTX 1650TI","PrecioNormal":"$949.990","PrecioOferta":"$649.990","PrecioTarjeta":"","field6":"","Modelo":"IdeaPad Gaming 3 15IMH05","Modelo Sistema Operativo":"Windows 10 Home 64","Tipo Procesador":"Intel Core i5","Modelo Procesador":"Intel Core i5-10300","Velocidad Procesador (GHz)":"2.5 / 4.5GHz","Memoria RAM":"8 GB","Tipo de Memoria Ram":"DDR4","RAM Expandible":"16 GB Maximo","Tamaño Pantalla Pulgadas":"15.6"}    ,
    {"Marca":"ASUS","Nombre":"ASUS LAPTOP 15 X515JA / INTEL CORE I5 / 8GB RAM / 256GB SSD / 15.6'' FHD","PrecioNormal":"$699.990","PrecioOferta":"$449.990","PrecioTarjeta":"$429.990","field6":"","Modelo":"Laptop / Notebook","Modelo Sistema Operativo":"Windows 11 Home","Tipo Procesador":"Intel Core i5","Modelo Procesador":"Intel Core i5-1035G1","Velocidad Procesador (GHz)":"2.5 / 4.5GHz","Memoria RAM":"8 GB","Tipo de Memoria Ram":"DDR4","RAM Expandible":"No","Tamaño Pantalla Pulgadas":"15.6"}    ,
    {"Marca":"HP","Nombre":"HP VICTUS 15-FB0115LA / AMD RYZEN 5 / 8GB RAM / 512GB SSD / 15.6\" FHD / NVIDIA GEFORCE GTX 1650","PrecioNormal":"$929.990","PrecioOferta":"$629.990","PrecioTarjeta":"$599.99","field6":"","Modelo":"VICTUS 15-fb0115la","Modelo Sistema Operativo":"Microsoft Windows 11","Tipo Procesador":"AMD Ryzen 5","Modelo Procesador":"AMD Ryzen 5 5600H","Velocidad Procesador (GHz)":"Frecuencia de hasta 4,2 GHz, 16 MB de cache L3, 6 nucleos, 12 subprocesos","Memoria RAM":"8 GB","Tipo de Memoria Ram":"DDR4","RAM Expandible":"32 GB Maximo","Tamaño Pantalla Pulgadas":"15.6"}    ,
    {"Marca":"APPLE","Nombre":"APPLE MACBOOK AIR 13,3\" / CHIP M1 (CPU 8NUC Y GPU 7NUC) / 8GB RAM / 256GB SSD / GRIS ESPACIAL","PrecioNormal":"$1.199.990","PrecioOferta":"$769.990","PrecioTarjeta":"","field6":"","Modelo":"Mac OS","Modelo Sistema Operativo":"Air M1","Tipo Procesador":"Chip M1","Modelo Procesador":"","Velocidad Procesador (GHz)":"","Memoria RAM":"8GB","Tipo de Memoria Ram":"","RAM Expandible":"32 GB Maximo","Tamaño Pantalla Pulgadas":"13.1"}    ,
    {"Marca":"ASUS","Nombre":"ASUS TUF DASH F15 / INTEL CORE I5 / 8GB RAM / 512GB SSD / 15.6 FHD / NVIDIA GEFORCE RTX 3050 LAPTOP GPU","PrecioNormal":"$1.099.990","PrecioOferta":"$849.990","PrecioTarjeta":"","field6":"","Modelo":"TUF DASH F15","Modelo Sistema Operativo":"Microsoft Windows 11","Tipo Procesador":"Intel Core I5","Modelo Procesador":"Intel Core i5-12450H","Velocidad Procesador (GHz)":"up to 4.4 GHz","Memoria RAM":"8 GB","Tipo de Memoria Ram":"DDR4","RAM Expandible":"32 GB Mximo","Tamaño Pantalla Pulgadas":"15.6"}    ,
    {"Marca":"HP","Nombre":"HP PAVILION PLUS 14-EH0103LA / INTEL CORE I7 / 16GB RAM / 512GB SSD / 14\" 2.8K OLED / NVIDIA GEFORCE RTX2050","PrecioNormal":"$1.099.990","PrecioOferta":"$969.990","PrecioTarjeta":"$949.990","field6":"","Modelo":"Pavilion Plus 14-eh0103la","Modelo Sistema Operativo":"Microsoft Windows 11","Tipo Procesador":"Intel Core I7","Modelo Procesador":"Intel Core i7-1255U","Velocidad Procesador (GHz)":"Frecuencia de hasta 4,7 Ghz","Memoria RAM":"16 GB","Tipo de Memoria Ram":"DDR4","RAM Expandible":"32 GB Maximo","Tamaño Pantalla Pulgadas":"14"}    ,
    {"Marca":"HP","Nombre":"HP PAVILION 14-DV2003LA / INTEL CORE I7 / 12GB RAM / 512GB SSD / 14\" FHD","PrecioNormal":"$999.990","PrecioOferta":"$869.990","PrecioTarjeta":"$849.990","field6":"","Modelo":"Pavilion 14-dv2003la","Modelo Sistema Operativo":"Microsoft Windows 11","Tipo Procesador":"Intel Core I7","Modelo Procesador":"Intel Core I7","Velocidad Procesador (GHz)":"Frecuencia de hasta 4,7 GHz","Memoria RAM":"12 GB","Tipo de Memoria Ram":"DDR4","RAM Expandible":"32 GB Maximo","Tamaño Pantalla Pulgadas":"14"}    ,
    {"Marca":"LENOVO","Nombre":"LENOVO IDEAPAD FLEX 5 / AMD RYZEN 5 / 8GB RAM / 256GB SSD / 14\" FHD TOUCH","PrecioNormal":"$849.990","PrecioOferta":"$519.990","PrecioTarjeta":"$499.990","field6":"","Modelo":"IdeaPad Flex 5 14ARE05","Modelo Sistema Operativo":"Microsoft Windows 10","Tipo Procesador":"Intel Core I7","Modelo Procesador":"AMD Ryzen 5","Velocidad Procesador (GHz)":"2.3 / 4.0GHz","Memoria RAM":"8 GB","Tipo de Memoria Ram":"DDR4","RAM Expandible":"32 GB Maximo","Tamaño Pantalla Pulgadas":"14"}    ,
    {"Marca":"HP","Nombre":"HP PAVILION X360 CONVERTIBLE 14-DY0501LA / INTEL CORE I3 / 8GB RAM / 256GB SSD / INTEL UHD GRAPHICS / 14''","PrecioNormal":"$679.990","PrecioOferta":"$499.990","PrecioTarjeta":"","field6":"","Modelo":"PAVILION X360 CONVERTIBLE 14","Modelo Sistema Operativo":"WINDOWS 11 HOME SL","Tipo Procesador":"Intel Core i3","Modelo Procesador":"Intel Core i3","Velocidad Procesador (GHz)":"2.3 / 4.0GHz","Memoria RAM":"8 GB","Tipo de Memoria Ram":"DDR4","RAM Expandible":"32 GB Maximo","Tamaño Pantalla Pulgadas":"14"}    ,
    {"Marca":"SAMSUNG","Nombre":"SAMSUNG GALAXY BOOK2 PRO 15 / INTEL CORE I7 12VA / 16GB RAM / 512GB SSD / 15.6\" FHD / INTEL ARC A350 / GRIS / WIN11","PrecioNormal":"$1.699.990","PrecioOferta":"$979.990","PrecioTarjeta":"","field6":"","Modelo":"GALAXY BOOK2 PRO 15","Modelo Sistema Operativo":"Microsoft Windows 11","Tipo Procesador":"Intel Core i7","Modelo Procesador":"Intel Core i7-1260P","Velocidad Procesador (GHz)":"2.3 / 4.0GHz","Memoria RAM":"16 GB","Tipo de Memoria Ram":"DDR4","RAM Expandible":"32 GB Maximo","Tamaño Pantalla Pulgadas":"15"}    ,
    {"Marca":"DELL","Nombre":"DELL INSPIRON 3511 / INTEL CORE I7 / 8GB RAM / 256GB SSD / 15.6\" FHD","PrecioNormal":"$619.990","PrecioOferta":"$569.990","PrecioTarjeta":"","field6":"","Modelo":"INSPIRON 3511","Modelo Sistema Operativo":"Microsoft Windows 11","Tipo Procesador":"Intel Core I7","Modelo Procesador":"INTEL Core i7-1165G7","Velocidad Procesador (GHz)":"2.8 Ghz","Memoria RAM":"8 GB","Tipo de Memoria Ram":"DDR4","RAM Expandible":"16 GB Maximo","Tamaño Pantalla Pulgadas":"15.6"}    ,
    {"Marca":"LENOVO","Nombre":"LENOVO IDEAPAD FLEX 5 / AMD RYZEN 5 / 8GB RAM / 256GB SSD / 14\" FHD TOUCH","PrecioNormal":"$849.990","PrecioOferta":"$519.990","PrecioTarjeta":"$499.990","field6":"","Modelo":"IdeaPad Flex 5 14ARE05","Modelo Sistema Operativo":"Windows 10 Home 64","Tipo Procesador":"AMD Ryzen 5","Modelo Procesador":"AMD Ryzen 5 4500U","Velocidad Procesador (GHz)":"2.3 / 4.0GHz","Memoria RAM":"8 GB","Tipo de Memoria Ram":"DDR4","RAM Expandible":"No","Tamao Pantalla Pulgadas":"14"}    ,
    {"Marca":"SAMSUNG","Nombre":"SAMSUNG GALAXY BOOK2 PRO 360 / INTEL CORE I7 12VA / 16GB RAM / 512GB SSD / 13.3\" FHD TOUCH / INTEL IRIS XE / ROJO OSCURO / WIN11","PrecioNormal":"$1.599.990","PrecioOferta":"$999.990","PrecioTarjeta":"","field6":"","Modelo":"GALAXY BOOK2 PRO 360","Modelo Sistema Operativo":"Windows 11 Home","Tipo Procesador":"Intel Core i7","Modelo Procesador":"Intel Core i7-1260P","Velocidad Procesador (GHz)":"2.1","Memoria RAM":"16 GB","Tipo de Memoria Ram":"DDR5","RAM Expandible":"No","Tamaño Pantalla Pulgadas":"13.3"}    ,
    {"Marca":"ASUS","Nombre":"ASUS LAPTOP 15 X515JA / INTEL CORE I3 / 8GB RAM / 256GB SSD / 15.6'' FHD","PrecioNormal":"$599.990","PrecioOferta":"$369.990","PrecioTarjeta":"$359.990","field6":"","Modelo":"Laptop / Notebook","Modelo Sistema Operativo":"Windows 11 Home","Tipo Procesador":"Intel Core i3","Modelo Procesador":"Intel Core i3-1005G1","Velocidad Procesador (GHz)":"44958","Memoria RAM":"8 GB","Tipo de Memoria Ram":"DDR4","RAM Expandible":"Si","Tamaño Pantalla Pulgadas":"15.6"}    
  ];
  const ArraySofas =  [
    {"Marca": "RIPLEY HOME",
    "Nombre": "SOFA RIPLEY HOME CALIFORNIA 3C",
    "PrecioNormal": "$819.990",
    "PrecioOferta": "$299.990",
    "PrecioTarjeta": "$249.990",
    "Modelo": "California",
    "Tamaño": 3,
    "Color": "Gris",
    "Material Estructural": "Playwood, madera contrachapada, se garantiza 100% sin corteza",
    "Material tapiz": "Poliéster",
    "Metrial relleno": "Relleno de fibra en tela no tejida blanca de 80 gr",
    "Garantia": "3 Meses"},

    {"Marca": "ROSEN","Nombre": "SOFA ROSEN CLERMONT 3C","PrecioNormal": "$1.099.990","PrecioOferta": "$489.990","PrecioTarjeta": "$439.990 ","Modelo": "Miltonwood","Tamaño": 3,"Color": "Cafe","Material Estructural": "Madera aglomerada enchapada","Material tapiz": " Tela","Metrial relleno": "Fibra de poliester","Garantia": "3 Meses"},
    {"Marca": "SIGNATURE DESIGN BY ASHLEY","Nombre": "SOFA SIGNATURE DESIGN BY ASHLEY MILTONWOOD 3C","PrecioNormal": "$1.499.990","PrecioOferta": "$559.990","PrecioTarjeta": "$499.990","Modelo": "Cacao","Tamaño": 3,"Color": "Cafe","Material Estructural": "Madera de pino","Material tapiz": " Tela","Metrial relleno": "Bloque de espuma","Garantia": "3 Meses"},
    {"Marca": "SIGNATURE DESIGN BY ASHLEY","Nombre": "SOFA SIGNATURE DESIGN BY ASHLEY MILTONWOOD 3C","PrecioNormal": "$1.499.990","PrecioOferta": "$559.990","PrecioTarjeta": "$499.990","Modelo": "Cacao","Tamaño": 3,"Color": "Cafe","Material Estructural": "Madera de pino","Material tapiz": " Tela","Metrial relleno": "Bloque de espuma","Garantia": "3 Meses"},
    {"Marca": "CIC","Nombre": "SOFA CIC CACAO 3C","PrecioNormal": "$1.199.990","PrecioOferta": "$529.990","PrecioTarjeta": "$479.990 ","Modelo": "Delfos","Tamaño": 3,"Color": "Cafe","Material Estructural": "Madera de pino","Material tapiz": " Tela","Metrial relleno": "Bloque de espuma","Garantia": "3 Meses"},
    {"Marca": "ALTO HOGAR","Nombre": "SOFA ALTO HOGAR DELFOS 3C","PrecioNormal": "$439.990","PrecioOferta": "$209.990","PrecioTarjeta": "$189.990 ","Modelo": "Florencia","Tamaño": 3,"Color": "Cafe","Material Estructural": "Madera de pino","Material tapiz": " Cuero","Metrial relleno": "Hollowfill / Espuma","Garantia": "3 Meses"},
    {"Marca": "CIC","Nombre": "SOFA SECCIONAL CIC ANDALUCIA CHOCOLATE 5C","PrecioNormal": "$4.759.990","PrecioOferta": "$1.939.990","PrecioTarjeta": "$1.769.990","Modelo": "Miconos","Tamaño": 3,"Color": "Cafe","Material Estructural": "Madera de pino","Material tapiz": " Tela","Metrial relleno": "Bloque de espuma","Garantia": "3 Meses"},
    {"Marca": "LATAM HOME","Nombre": "SOFA LATAM HOME FLORENCIA CUERO 70% 3C","PrecioNormal": "$1.289.990","PrecioOferta": "$569.990","PrecioTarjeta": "$489.990","Modelo": "Florida","Tamaño": 3,"Color": "Negro","Material Estructural": "Madera de pino","Material tapiz": "Textil","Metrial relleno": "Bloque de espuma","Garantia": "3 Meses"},
    {"Marca": "ALTO HOGAR","Nombre": "SOFA ALTO HOGAR MICONOS 3C","PrecioNormal": "$439.990","PrecioOferta": "$209.990","PrecioTarjeta": "$189.990 ","Modelo": "Acciongton","Tamaño": 3,"Color": "Gris","Material Estructural": "Madera aglomerada enchapada","Material tapiz": "Textil","Metrial relleno": "Fibra de poliester","Garantia": "3 Meses"},
    {"Marca": "CIC","Nombre": "SOFA CIC FLORIDA 3C","PrecioNormal": "$1.399.990","PrecioOferta": "$669.990","PrecioTarjeta": "$609.990","Modelo": "Mira","Tamaño": 3,"Color": "Cafe","Material Estructural": "Madera de pino","Material tapiz": "Cuero sintético (PU)","Metrial relleno": "Lámina de poliuretano D-25 ","Garantia": "3 Meses"},
    {"Marca": "ROSEN","Nombre": "SOFA ROSEN CAGLIARI TEAL 3C","PrecioNormal": "$899.990","PrecioOferta": "$419.990","PrecioTarjeta": "$379.990","Modelo": "Fernanda","Tamaño": 3,"Color": "Cafe","Material Estructural": "Madera de pino","Material tapiz": " Tela","Metrial relleno": "Bloque de espuma","Garantia": "3 Meses"},
    {"Marca": "SIGNATURE DESIGN BY ASHLEY","Nombre": "SOFA SIGNATURE DESIGN BY ASHLEY ACCINGTON 3C","PrecioNormal": "$1.999.990","PrecioOferta": "$599.990","PrecioTarjeta": "$499.990","Modelo": "Thames","Tamaño": 3,"Color": "Negro","Material Estructural": "Madera de pino","Material tapiz": " Tela","Metrial relleno": "Bloque de espuma","Garantia": "3 Meses"},
    {"Marca": "ROSEN","Nombre": "SOFA ROSEN MIRA PU 3C","PrecioNormal": "$999.990","PrecioOferta": "$429.990","PrecioTarjeta": "$379.990 ","Modelo": "Florida","Tamaño": 2,"Color": "Cafe","Material Estructural": "Madera de pino","Material tapiz": " Tela","Metrial relleno": "Bloque de espuma","Garantia": "3 Meses"},
    {"Marca": "RIPLEY HOME","Nombre": "SOFA RIPLEY HOME PLOT BEIGE 2C","PrecioNormal": "$529.990","PrecioOferta": "$249.990","PrecioTarjeta": "$219.990","Modelo": "Milán","Tamaño": 3,"Color": "Negro","Material Estructural": "Madera Plywood","Material tapiz": " Tela","Metrial relleno": "Fibras de poliéster","Garantia": "3 Meses"},
    {"Marca": "ALTO HOGAR","Nombre": "SOFA ALTO HOGAR FERNANDA 3C","PrecioNormal": "$429.990","PrecioOferta": "$199.990","PrecioTarjeta": "$179.990","Modelo": "Harry","Tamaño": 2,"Color": "Cafe","Material Estructural": "Madera de pino","Material tapiz": "Cuero sintético","Metrial relleno": "Bloque de espuma","Garantia": "3 Meses"}
  ];

  //Promesa
//   const Productos = new Promise ((resolve,reject) =>{

//     setTimeout(() => {  
//         resolve(ArrayNotebboks)        
//     }, 2000);

//   })

//   Productos.then(result =>{
//         const NewArray2 = [...result];
//        setNewArray(NewArray2);
//   })

useEffect(() => {
    const Productos = new Promise((resolve, reject) => {
      setTimeout(() => {  

        resolve(ArrayNotebboks)        

      }, 2000);
    });
  
    Productos.then(result => {

      const NewArray2 = [...result];
      setNewArray(NewArray2);

    });

  }, []);  

  return (
    <>
      
      {NewArray.map((item,index) => {                
         return(  
             
                <Item 
                      key= {uuidv4()}
                      imagen1= {`./notebooks/${index + 1}.jpg`}                              
                      titulo={item.Marca }
                      descripcion={ item.Nombre} 
                      precio = { item.PrecioOferta}
               /> 
            
          )
                     
        })}

    </>
  );            

};

export default ItemList;
