import React from "react";

const ListImages = (props) => {
    const imgs=props.dataImages;
    //console.log(imgs)
   /*  const gg =document.querySelector("img-fluid img-thumbnail");
    console.log(gg) */
    return (
       <li>
            <img className= "img-fluid" alt="images" src={imgs} />
        </li>   
    )
}
export default ListImages