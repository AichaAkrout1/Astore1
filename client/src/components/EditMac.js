import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { editmac } from '../redux/macSlice';
import Swal from 'sweetalert2'

function EditMac({mac, ping, setping}) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch ();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editedMac, seteditedMac] = useState({
        image: mac.image,
        name: mac.name,
        price: mac.price,
        storage: mac.storage,
        quantity: mac.quantity,
        status: mac.status,
      });

      const  alertUp = () =>{
  
        Swal.fire({
          icon: 'success',
          title:' Your information was successfully update!'  
           
        })
      }
    
  return (
    <div>
      <button variant="primary" onClick={handleShow}
      style={{backgroundColor:"green", color:"#fff" , border:"none", borderRadius:"5px", width:"90px", height:"50px" , marginLeft:"30px"}} >
        Edit mac
      </button>

      <Modal show={show} onHide={handleClose} style={{marginTop:"60px"}} >
        <Modal.Header closeButton>
          <Modal.Title>Edit mac </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>mac Image</Form.Label>
        <Form.Control type="email" placeholder={mac?.image} onChange={(e) => seteditedMac ({...editedMac, image:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>mac Name</Form.Label>
        <Form.Control type="email" placeholder={mac?.name} onChange={(e) => seteditedMac ({...editedMac, name:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>mac Price</Form.Label>
        <Form.Control type="email" placeholder={mac?.price} onChange={(e) => seteditedMac ({...editedMac, price:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>mac Storage</Form.Label>
        <Form.Control type="email" placeholder={mac?.storage} onChange={(e) => seteditedMac ({...editedMac, storage:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>mac Quantity</Form.Label>
        <Form.Control type="email" placeholder={mac?.quantity} onChange={(e) => seteditedMac ({...editedMac, quantity:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>mac Status</Form.Label>
        <Form.Control type="email" placeholder={mac?.status} onChange={(e) => seteditedMac ({...editedMac, status:e.target.value})}/>
      </Form.Group>
      
    </Form>
    </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose} style={{backgroundColor:"red", color:"#fff" , border:"none" , width:"120px", borderRadius:"5px", height:"50px", marginLeft:'40px'}}>
            Close
          </button>
          <button variant="primary" onClick={()=> {dispatch(editmac({id : mac._id, editedMac})); setping(!ping); handleClose(); alertUp()}}  style={{backgroundColor:"green", color:"#fff" , border:"none" , width:"120px", borderRadius:"5px", height:"50px", marginLeft:'40px'}} >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default EditMac