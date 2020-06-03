import React, { useState } from 'react';
//  import './App.css';
import './sass/style.scss';
import Menu from './Components/menu';
import ModalImage from './Components/modalImage';
//  import DownloadImg from './Components/downloadimg';

function App() {
  const [selectObj, setSelectObj] = useState();
  const [stateModal, setStateModal] = useState(false);
  const objectModal = (obj, statemodalListImages) => {
    /*  const newObject = { ...selectObj, obj } */
    const newObject = obj;
    setStateModal(statemodalListImages);
    setSelectObj(newObject);
  };
  const buttonModalX = (booleanModalX) => {
    setStateModal(booleanModalX);
  };
  const downImg = (img) => {
    setSelectObj(img);
  };
  const hideModal = (modalFalse) => {
    setStateModal(modalFalse);
  };
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="container-components">
      {/*  <DownloadImg dataImgDownload={selectObj} /> */}
      <ModalImage
        selecObj={selectObj}
        stateModal={stateModal}
        stateModalX={buttonModalX}
        hideModal={hideModal}
        downImg={downImg}
      />
      {/*  Tambien es posible hacerlo de esta otra forma, pasando setStateModal como funcion,
           tan solo se comentaria la funcion buttonModalX :
           <ModalImage selecObj={selectObj} stateModal={stateModal} stateModalX={setStateModal}/>
      */}
      <Menu selecObj={objectModal} stateModal={stateModal} />
    </div>
  );
}
export default App;
