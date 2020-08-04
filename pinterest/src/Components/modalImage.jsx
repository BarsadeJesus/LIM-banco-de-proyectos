import React from 'react';
import Modal from 'react-bootstrap/Modal';
import '../sass/style.scss';
//  import { Link } from "react-router-dom";
//  import DownloadImg from './downloadimg';

// eslint-disable-next-line react/prop-types
const ModalImage = ({
  // eslint-disable-next-line react/prop-types
  selecObj,
  // eslint-disable-next-line react/prop-types
  stateModal,
  // eslint-disable-next-line react/prop-types
  stateModalX,
  // eslint-disable-next-line react/prop-types
  downImg,
  // eslint-disable-next-line react/prop-types
  hideModal,
}) => {
  const downloadImg = (event) => {
    event.preventDefault();
    downImg(selecObj);
    hideModal(false);
  };
  return (
    <Modal
      className="container-modal"
      size="lg"
      show={stateModal}
      onHide={() => stateModalX(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {/*  <div className="header1"> */}
      {/* <Modal.Header closeButton className="header">
        <Modal.Title  id="example-modal-sizes-title-lg">
          Large Modal
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body className="container-mod-body">
        <div className="figure">
          <section className="middle-figure">
            <img src={selecObj} alt="img" className="imgFigure" />
          </section>
          <section className="middle-desc">
            <button
              type="button"
              className="btnDownload"
              onClick={(event) => {
                downloadImg(event);
              }}
            >
              <img className="points-down" src="trespuntos.png" alt="trespuntos" />
            </button>
          </section>
        </div>
      </Modal.Body>
      {/*  </div> */}
    </Modal>
  );
};
export default ModalImage;
