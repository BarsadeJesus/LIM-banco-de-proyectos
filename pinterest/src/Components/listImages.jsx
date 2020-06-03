import React from 'react';
import '../sass/style.scss';

// eslint-disable-next-line react/prop-types
const ListImages = ({ dataImages, idImag, objSel }) => {
  const imgs = dataImages;
  const idimg = idImag;
  const obSelected = objSel;

  const loadModalImg = (event) => {
    event.preventDefault();
    // setStateBoolean(true);
    obSelected(imgs, true);
    //  statemodal=stateBoolean;
  };
    //  console.log(stateBoolean);
  return (
    <li className="lista">
      {/*  <button  onClick={event=>{loadModalImg(event)}}> */}
      <button type="button" className="butt-Imag" onClick={loadModalImg}>
        <img
          className="img-fluid"
          alt="images"
          src={imgs}
          idImg={idimg}
        />
      </button>
    </li>
  );
};
export default ListImages;
