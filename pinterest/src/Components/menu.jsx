/* eslint-disable no-unused-expressions */
import React from  "react";
import { useState, useEffect} from "react";
import ListImages from "../Components/listImages";
//import "../index1.css";
import "../sass/style.scss";
import InfiniteScroll from "react-infinite-scroll-component";
import Masonry from 'react-masonry-css';

const clientId= '652Zjwy-Bk7QxiJyZwuWpJxKEw7axxT4Aa0k4ybxO1M '
const endpoint = 'https://api.unsplash.com/search/photos/?' 

const Menu = ({selecObj, stateModal}) => {
  const [trackValueIn, setTrackValueIn]=useState("https://api.unsplash.com/randomPhotos/?");
  const [images, setImages]=useState([]);
  const [page, setPage] = useState(1);
  const perpage=20;

  useEffect(() => {
    fetch(`${endpoint}&per_page=${perpage}&page=${page}&query=${trackValueIn}&client_id=${clientId}`)
    .then(response =>{
      return response.json() 
    }).then(jsonResponse => {
      setImages(jsonResponse.results);
    }, []) 
    console.log("camino")
  }, []) 
 
 const more = () => { 
  //setPage(page+perpage);
   fetch(`${endpoint}&per_page=${perpage}&page=${page+1}&query=${trackValueIn}&client_id=${clientId}`)
    .then(response =>{
      return response.json()
    }).then(jsonResponse => {
      console.log(jsonResponse);
      setImages([...images, ...jsonResponse.results]);
      setPage(page+1);
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
    <header>
     <nav className="nb navbar navbar-expand-lg navbar-light">
      <button className="navbar-brand"><img className="pintImg" src="pint.png" alt="pinterest" /></button>
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
         <form className="form-inline formwidth" onSubmit={search}>
           <input className="form-control mr-sm-2 isearch"  onChange={trackValue} type="search" placeholder="Search" aria-label="Search">
           </input>
         </form>
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
       <ul>
       <Masonry
        breakpointCols={5}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {
          images.map((obj) => 
              <ListImages key={obj.id} dataImages={obj.urls.thumb} idSelc={obj.id} objSel={selecObj}  />,   
            ) 
        }
        </Masonry>
       </ul>
        </InfiniteScroll>
    </main>
    </body>
  </section>
  )
}
export default Menu
