import React from "react";
import Modal from "react-bootstrap/Modal";
import "../sass/style.scss";


  const ModalImage = ({selecObj, stateModal, stateModalX, downImg, hideModal}) => {
   // const [sttModal, setSttModal] = useState(stateModal);

    const downloadImg = (event) => {
      event.preventDefault();
      console.log("holis")
     
     downImg(selecObj);
     hideModal(false)
    /*  <Link className='linkis' to='/KitchenView'> Ordenes en espera </Link> */
  }
    
console.log(selecObj);
    return(
    
      <Modal className="container-modal"
      size="lg"
      show={stateModal}
      onHide={() => stateModalX(false)}
      aria-labelledby="example-modal-sizes-title-lg"
    >
     {/*  <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          Large Modal
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body className="container-mod-body">
        <div className="figure">
          <section className="middle-figure" >
          <img src={selecObj} alt= "img" className="imgFigure"></img>
            </section>
            <section className="middle-desc">
          <button onClick={downloadImg}>
          Descargar </button>
      </section>
        </div>
      </Modal.Body>
    </Modal>
  
      /* <Modal 
        size="sm"
        show={stateModal}
        onHide={() => stateModalX(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="altura">
          <img className= "img-fluid" src={selecObj} alt= "img"></img>
        </Modal.Body>
        <Modal.Footer>
          <button>Close</button>
        </Modal.Footer>
      </Modal> */
     
    )
}
export default ModalImage;