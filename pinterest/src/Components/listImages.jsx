import React from "react";
import "../sass/style.scss";

const ListImages = ({ dataImages, idImag, objSel }) => {
  const imgs=dataImages;
  const idimg = idImag;
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
    <li className="lista">
      {/*  <button  onClick={event=>{loadModalImg(event)}}> */}
      <button className="butt-Imag" onClick={loadModalImg}>
        <img className= "img-fluid" alt="images" src={imgs} idImg={idimg}/></button>
    </li>   
  )
}
export default ListImages