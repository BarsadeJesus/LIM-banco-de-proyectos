import React from  "react";
//import { FixedSizeList } from "react-window";
import { useState, useEffect} from "react";
import ListImages from "../Components/listImages";
//import { Element } from "react-scroll";
//import { animateScroll as scroll} from "react-scroll";
import "../index1.css";

const clientId= '652Zjwy-Bk7QxiJyZwuWpJxKEw7axxT4Aa0k4ybxO1M '
/* const endpoint = 'https://api.unsplash.com/search/photos/?page=1&per_page=30' 
 */
const endpoint = 'https://api.unsplash.com/search/photos/?page=1' 

const Menu = () => {
  const [trackValueIn, setTrackValueIn]=useState("orchids");
  const [images, setImages]=useState([]);
  const [totalpages, setTotalpages]=useState(0);
  const [page, setPage] = useState(2);
  const perpage=20;
  const [pos, setPos]=useState(0);

  const trackValue = (event) => {
    const trackValueInput=event.target.value;
    console.log(trackValueInput);
     setTrackValueIn(trackValueInput);
    };

  useEffect(() => {
     //fetch(`${endpoint}?query=${trackValueIn}&client_id=${clientId}`) 
    fetch(`${endpoint}&per_page=${perpage}&page=${page}&query=${trackValueIn}&client_id=${clientId}`)
    .then(response =>{
      return response.json()
    }).then(jsonResponse => {
      console.log(jsonResponse);
      setImages([...images, ...jsonResponse.results]);
    })  
  },[]);
  console.log(totalpages);
 //const query="";
 
  const search = (event) => {
  event.preventDefault();
  const perpage=20;
  /* fetch(`${endpoint}?query=${trackValueIn}&client_id=${clientId}`) */
  fetch(`${endpoint}&per_page=${perpage}&query=${trackValueIn}&client_id=${clientId}`)
    .then(response =>{
      return response.json()
    }).then(jsonResponse => {
      console.log(jsonResponse);
      setImages(jsonResponse.results);
      setTotalpages(jsonResponse.total_pages); 
    },[])
  }
 console.log(totalpages)
 const more = (event) => {
   event.preventDefault();
   setPage(page+1);
   fetch(`${endpoint}&per_page=${perpage}&page=${page}&query=${trackValueIn}&client_id=${clientId}`)
    .then(response =>{
      return response.json()
    }).then(jsonResponse => {
      console.log(jsonResponse);
      setImages([...images, ...jsonResponse.results]);
      setTotalpages(jsonResponse.total_pages); 
    },[])

 }
 console.log(page)
 //console.log()
 //const currentScrollPosition = () => {
 const [currScrollPosition, setCurrScrollPosition] = useState(0);
    console.log(window.innerHeight);
    console.log(window.pageYOffset)
   // console.log(window.s)
  
    useEffect(()=>{
        const handleScrollEvent = () => setCurrScrollPosition(window.scrollY);
        
        document.addEventListener("scroll", handleScrollEvent);
        return () => 
          document.removeEventListener("scroll", handleScrollEvent);
    }, []);
    console.log(images[19]);
   /// const lastLi=images[19].offsetTop;
    //console.log(lastLi);
    /* const ff = document.querySelector("container").children[19];
    console.log(ff) */
    /* const lastLiOffset= lastLi.offsetTop + lastLi.clientHeight;
    const pageOffset = window.pageYOffset + window.innerHeight;
    const bottomOffset = 20;
    console.log(currScrollPosition)
  
    if (pageOffset > lastLiOffset-bottomOffset){
        console.log("es mayor")
    } */
    //return currScrollPosition;
  
  
  return (
    <section>
    <header >
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
 {/*  <a class="navbar-brand" href="#">Navbar</a> */}
  <button className="navbar-brand"><img className="pintImg" src="pinterest.png" alt="pinterest" /></button>
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
        
        <div>
      <button onClick={more}>more</button>
        </div>
    </main>
    </body>
  </section>
  )
}
export default Menu
