import React from "react";
import Modal from "react-bootstrap/Modal";
import "../sass/style.scss";
//import { Link } from "react-router-dom";
import DownloadImg from "./downloadimg"; 

  const ModalImage = ({selecObj, stateModal, stateModalX, downImg, hideModal}) => {
   // const [sttModal, setSttModal] = useState(stateModal);

    const downloadImg = (event) => {
      event.preventDefault();
      console.log("holis")
     
     downImg(selecObj);
     hideModal(false)
     
  }
    
console.log(selecObj);
    return(
    
      <Modal className="container-modal"
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
          <section className="middle-figure" >
          <img src={selecObj} alt= "img" className="imgFigure"></img>
            </section>
            <section className="middle-desc">
            <button className="btnDownload" onClick={event => {
                          downloadImg(event);
                        }}
                    >
                       <img className="points-Down" src="3puntos.png" alt = "trespuntos" />
                        </button>
      </section>
        </div>
      </Modal.Body>
     {/*  </div> */}
    </Modal>
  
    )
}
export default ModalImage;