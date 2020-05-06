import React from "react";

const ListImages = (props) => {
    const imgs=props.dataImages;
    //console.log(imgs)
   /*  const gg =document.querySelector("img-fluid img-thumbnail");
    console.log(gg) */
    return (
            <img className= "img-fluid img-rounded" alt="images" src={imgs} />
    )
}
export default ListImages