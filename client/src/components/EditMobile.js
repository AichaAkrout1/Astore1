import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editmobile } from '../redux/mobileSlice';
import Swal from 'sweetalert2';

function EditMobile({mobile, ping, setping}) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [edited, setedited] = useState({
        image: mobile.image,
        name: mobile.name,
        price: mobile.price,
        storage: mobile.storage,
        quantity: mobile.quantity,
        status: mobile.status,
    })

    const  alertUp = () =>{
  
      Swal.fire({
        icon: 'success',
        title:' Your information was successfully update!'  
         
      })
    }
  return (
    <div  >
      <button variant="primary" onClick={handleShow}
            style={{backgroundColor:"green", color:"#fff" , border:"none", borderRadius:"5px", width:"120px", height:"50px" , marginLeft:"30px"}} >
        Edit mobile
      </button>

      <Modal show={show} onHide={handleClose} style={{marginTop:"60px"}} >
        <Modal.Header closebutton>
          <Modal.Title>Edit Mobile Phone</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Image</Form.Label>
        <Form.Control type="email" placeholder={mobile?.image} onChange={(e) => setedited ({...edited, image:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Name</Form.Label>
        <Form.Control type="email" placeholder={mobile.name} onChange={(e) => setedited ({...edited, name:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Price</Form.Label>
        <Form.Control type="email" placeholder={mobile.ecran} onChange={(e) => setedited ({...edited, price:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile storage</Form.Label>
        <Form.Control type="email" placeholder={mobile.puce} onChange={(e) => setedited ({...edited, storage:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile quantity</Form.Label>
        <Form.Control type="email" placeholder={mobile.caméra} onChange={(e) => setedited ({...edited, quantity:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile status</Form.Label>
        <Form.Control type="email" placeholder={mobile.capacité} onChange={(e) => setedited ({...edited, status:e.target.value})}/>
      </Form.Group>
      
    </Form>
    </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose}style={{backgroundColor:"red", color:"#fff" , border:"none", borderRadius:"5px", width:"120px", height:"50px" , marginLeft:"30px"}} >
            Close
          </button>
          <button variant="primary" onClick={()=> {dispatch(editmobile({id : mobile._id, edited})); alertUp() ; setping(!ping); handleClose()}} style={{backgroundColor:"green", color:"#fff" , border:"none", borderRadius:"5px", width:"120px", height:"50px" , marginLeft:"30px"}} >
           Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditMobile