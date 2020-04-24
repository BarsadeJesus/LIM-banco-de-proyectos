import React from  "react";
//import { FixedSizeList } from "react-window";
import { useState} from "react";
import ListImages from "../Components/listImages";
//import { Element } from "react-scroll";
//import { animateScroll as scroll} from "react-scroll";
import "../index1.css";

const clientId= '652Zjwy-Bk7QxiJyZwuWpJxKEw7axxT4Aa0k4ybxO1M '
/* const endpoint = 'https://api.unsplash.com/search/photos/?page=1&per_page=30' 
 */
const endpoint = 'https://api.unsplash.com/search/photos/?page=1' 

const Menu = () => {
  const [trackValueIn, setTrackValueIn]=useState("");
  const [images, setImages]=useState([]);
 //const query="";
  const loadImages = () => {
    alert("Hola")
  }
 
  const search = (event) => {
  event.preventDefault();
  const pp=20;
  /* fetch(`${endpoint}?query=${trackValueIn}&client_id=${clientId}`) */
  fetch(`${endpoint}&per_page=${pp}&query=${trackValueIn}&client_id=${clientId}`)
    .then(response =>{
      return response.json()
    }).then(jsonResponse => {
      console.log(jsonResponse);
      setImages(jsonResponse.results)
     
    })
  }
 
  const trackValue = (event) => {

  const trackValueInput=event.target.value;
  console.log(trackValueInput);
   setTrackValueIn(trackValueInput);
  };
  
  /* useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    alert(images.length);
  }); */

  return (
    <section>
    <header >
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
 {/*  <a class="navbar-brand" href="#">Navbar</a> */}
  <button className="navbar-brand" onClick={loadImages}><img className="pintImg" src="pinterest.png" alt="pinterest" /></button>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Following</a>
      </li>
     
      <li>
      <form className="form-inline">
    <input className="form-control mr-sm-2" onChange={trackValue} type="search" placeholder="Search" aria-label="Search"></input>
    <button className="btn btn-outline-success my-2 my-sm-0" onClick={search} type="submit">Search</button>
  </form>
      </li>
      <li className="nav-item">
        <button className="nav-link pintImg"><img className="pintImg" src="bell.png" alt="bell"/></button>
      {/*   <a class="nav-link" href="#">Pricing</a> */}
      </li>
      <li className="nav-item">
      <button className="nav-link pintImg"><img className="pintImg" src="circle.png" alt="circle"/></button>
       {/*  <a class="nav-link" href="#">Pricing</a> */}
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    </header>
    <body >
   
    <main className="container">
        {
          images.map((obj) => 
            <ListImages key={obj.id} dataImages={obj.urls.thumb} quanImag={images.length}/>, 
          )
        }
    </main>
    </body>
  </section>
  )
}
export default Menu
