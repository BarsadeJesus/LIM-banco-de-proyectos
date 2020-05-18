import React from "react";
import "../sass/style.scss";

const ListImages = ({ dataImages, idImag, objSel }) => {
   
    const imgs=dataImages;
    const idImg = idImag;
   
    let obSe = objSel;
    
   const loadModalImg = (event) => {
     event.preventDefault();
    // setStateBoolean(true);
     console.log("Paty")
     obSe(imgs, true);
     console.log(obSe)
     //statemodal=stateBoolean;
   
      }
       //console.log(stateBoolean);
    return (
       <li>
         {/*  <button  onClick={event=>{loadModalImg(event)}}> */}
          <button className="butt-Imag" onClick={loadModalImg}>
              <img className= "img-fluid" alt="images" src={imgs} idImg={idImg}/></button>
        </li>   
    )
}
export default ListImages