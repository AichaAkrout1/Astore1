import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import "../Scss/add.css"
import { addmac } from '../redux/macSlice';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { MdAdd } from "react-icons/md";
import Swal from 'sweetalert2';



function AddMac() {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const alertUp = () => {
      Swal.fire({
        icon: "Congrats!",
        title: "  Macbook was added successfuly!",
      });
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [mac, setmac] = useState({
      image: "",
      name: "",
      price: "",
      storage: "",
      quantity: "",
      status: "",
    });
  return (
    <div  >
  
      <button  onClick={handleShow}
      style={{backgroundColor:"#227BEA", color:"white" , border:"none", fontSize:"18px", marginLeft:"1229px" ,marginTop:"40px", textAlign:"center", width:"150px", height:"50px", borderRadius:"5px"}} >

        Add Mac
        <MdAdd style={{fontSize:"20px", marginLeft:"15px"}}/>

      </button>
      <Modal show={show} onHide={handleClose} style={{marginTop:"60px"}} >
        <Modal.Header closeButton>
          <Modal.Title>Add Mac</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mac Image</Form.Label>
        {/* id="imageUpload" accept=".png, .jpg, .jpeg" */}
        <Form.Control type="email" placeholder="Enter mac image" onChange={(e) => setmac ({...mac, image:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mac Name</Form.Label>
        <Form.Control type="email" placeholder="Enter mac name" onChange={(e) => setmac ({...mac, name:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>mac Price</Form.Label>
        <Form.Control type="email" placeholder="Enter mac price" onChange={(e) => setmac ({...mac, price:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>mac Storage</Form.Label>
        <Form.Control type="email" placeholder="Enter mac storage" onChange={(e) => setmac ({...mac, storage:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>mac Quantity</Form.Label>
        <Form.Control type="email" placeholder="Enter mac quantity" onChange={(e) => setmac ({...mac, quantity:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>mac Status</Form.Label>
        <Form.Control type="email" placeholder="Enter mac Status" onChange={(e) => setmac ({...mac, status:e.target.value})}/>
      </Form.Group>
      
    </Form>
    </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose} style={{backgroundColor:"red", color:"white" , border:"none", fontSize:"18px",marginTop:"40px", textAlign:"center", width:"150px", height:"50px", borderRadius:"5px"}} >
            Close
          </button>
          <button onClick={() => {dispatch(addmac(mac)); handleClose(); alertUp()}} style={{backgroundColor:"green", color:"white" , border:"none", fontSize:"18px", marginTop:"40px", textAlign:"center", width:"150px", height:"50px", borderRadius:"5px"}} >
            Add mac 
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMac