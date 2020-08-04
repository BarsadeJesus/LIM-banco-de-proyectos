/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Masonry from 'react-masonry-css';
import ListImages from './listImages';
//  import {ClientId, Endpoint, RandomLoad} from '../queryAPI';
import QueryAPI from '../queryAPI';
import '../sass/style.scss';
/* const clientId= '652Zjwy-Bk7QxiJyZwuWpJxKEw7axxT4Aa0k4ybxO1M'
const endpoint = 'https://api.unsplash.com/search/photos/?'  */

// eslint-disable-next-line react/prop-types
const Menu = ({ selecObj }) => {
  const [trackValueIn, setTrackValueIn] = useState('https://api.unsplash.com/randomPhotos/?');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  //  const perpage=20;

  useEffect(() => {
    /*  fetch(`${Endpoint}&per_page=${perpage}&page=${page}&query=${trackValueIn}
    &client_id=${ClientId}`)
    .then(response => response.json()) */
    QueryAPI(page, trackValueIn).then((jsonResponse) => {
      setImages(jsonResponse.results);
    }, []);
  }, []);
  const more = () => {
    setTimeout(() => {
      //  setPage(page+1);
      /* fetch(`${Endpoint}&per_page=${perpage}&page=${page+1}
      &query=${trackValueIn}&client_id=${ClientId}`)
    .then(response => response.json()) */
      QueryAPI(page + 1, trackValueIn)
        .then((jsonResponse) => {
          setImages([...images, ...jsonResponse.results]);
          setPage(page + 1);
        }, []);
    }, 1000);
  };
  const trackValue = (event) => {
    const trackValueInput = event.target.value;
    setTrackValueIn(trackValueInput);
  };
  const search = (event) => {
    event.preventDefault();
    setImages([]);
    /*  fetch(`${Endpoint}&per_page=${perpage}&page=${page}&query=${trackValueIn}
    &client_id=${ClientId}`)
   .then(response => response.json()) */
    QueryAPI(page, trackValueIn)
      .then((jsonResponse) => {
        setImages(jsonResponse.results);
      }, []);
  };
  return (
    <section>
      <header>
        <nav className="nb navbar navbar-expand-lg navbar-light">
          <button type="button" className="navbar-brand">
            <img className="pintimg" src="pint.png" alt="lld" />
          </button>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {/* <li className="nav-item active">
                <a className="nav-link" href="#">
                  Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Following
                </a>
              </li> */}
              <li>
                <form className="form-inline formwidth" onSubmit={search}>
                  <input
                    className="form-control mr-sm-2 isearch"
                    onChange={trackValue}
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </form>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <body>
        <main className="container">
          <InfiniteScroll
            dataLength={images.length}
            next={more}
            // en caso salga error colocar hasmore={true} ya que el eslint no lo permite
            hasMore
            loader={<h4>Loading...</h4>}
            //  refreshFunction={refresh}
            //  pullDownToRefresh
            pullDownToRefreshContent={
              <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
            }
            releaseToRefreshContent={
              <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
            }
          >
            <ul>
              <Masonry
                breakpointCols={5}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {
                  images.map((obj) => (
                    <ListImages
                      key={obj.id}
                      dataImages={obj.urls.thumb}
                      idSelc={obj.id}
                      objSel={selecObj}
                    />
                  ))
                }
              </Masonry>
            </ul>
          </InfiniteScroll>
        </main>
      </body>
    </section>
  );
};
export default Menu;
