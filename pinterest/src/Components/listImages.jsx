import React from "react";

const ListImages = (props) => {
    const imgs=props.dataImages;
    return (
        <li>
            <img src={imgs} />
            
        </li>
    )
}
export default ListImages