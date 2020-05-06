/* eslint-disable no-unused-expressions */
import React from  "react";
import { useState, useEffect} from "react";
import ListImages from "../Components/listImages";
import "../index1.css";
import InfiniteScroll from "react-infinite-scroll-component";

const clientId= '652Zjwy-Bk7QxiJyZwuWpJxKEw7axxT4Aa0k4ybxO1M '
const endpoint = 'https://api.unsplash.com/search/photos/?' 

const Menu = () => {
  const [trackValueIn, setTrackValueIn]=useState("roses");
  const [images, setImages]=useState([]);
  const [page, setPage] = useState(1);
  const perpage=20;
  

  useEffect(() => {
     //fetch(`${endpoint}?query=${trackValueIn}&client_id=${clientId}`) 
    fetch(`${endpoint}&per_page=${perpage}&page=${page}&query=${trackValueIn}&client_id=${clientId}`)
    .then(response =>{
      return response.json()
    }).then(jsonResponse => {
      setImages(jsonResponse.results);
    }, [])  
  }, []) 
 
 const more = () => { 
  setPage(page+perpage);
   fetch(`${endpoint}&per_page=${perpage}&page=${page}&query=${trackValueIn}&client_id=${clientId}`)
    .then(response =>{
      return response.json()
    }).then(jsonResponse => {
      console.log(jsonResponse);
      setImages([...images, ...jsonResponse.results]);
     
    },[])
}
const trackValue = (event) => {
  const trackValueInput=event.target.value;
  console.log(trackValueInput);
   setTrackValueIn(trackValueInput);
  }

 const search = (event) => {
  event.preventDefault();
  setImages([]);
  console.log(images)
   fetch(`${endpoint}&per_page=${perpage}&page=${page}&query=${trackValueIn}&client_id=${clientId}`)
    .then(response =>{
      return response.json()
    }).then(jsonResponse => {
      console.log(jsonResponse);
      setImages(jsonResponse.results);
      
    },[]) 
  }
 
  
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
    <InfiniteScroll
      dataLength={images.length}
      next={more}
      hasMore={true}
      loader= {<h4>Loading...</h4>}
      //refreshFunction={refresh}
  //pullDownToRefresh
  pullDownToRefreshContent={
    <h3 style={{textAlign: 'center'}}>&#8595; Pull down to refresh</h3>
  }
  releaseToRefreshContent={
    <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
  }
      >
        {

          images.map((obj) => 
              <ListImages key={obj.id} dataImages={obj.urls.thumb} quanImag={images.length}/>,
            )
        }  
       
        </InfiniteScroll>
    </main>
    </body>
  </section>
  )
}
export default Menu
