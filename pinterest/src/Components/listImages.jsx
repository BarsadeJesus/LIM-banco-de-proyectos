import React from "react";

const ListImages = (props) => {
    const imgs=props.dataImages;
    return (
      
            <img className= "img-fluid img-thumbnail" alt="images" src={imgs} />
            
       
    )
}
export default ListImages