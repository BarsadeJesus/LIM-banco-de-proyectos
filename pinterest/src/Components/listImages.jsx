import React , {useState} from "react";
import Modal from "react-bootstrap/Modal";
const ListImages = (props) => {
    const [smShow, setSmShow] = useState();
   
    const imgs=props.dataImages;

    /* const handleButtonClick = event => {
        event.preventDefault();
        setSmShow(true);   
      }; */
   const loadModalImg = (event) => {
       event.preventDefault();
       return (
            <div>
            
            <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                Small Modal
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
          </Modal>:null
              
          </div>  
       ) }
    return (
       <li>
          <button  onClick={event=>{loadModalImg(event)}}>
              <img className= "img-fluid" alt="images" src={imgs} /></button>
        </li>   
    )
}
export default ListImages