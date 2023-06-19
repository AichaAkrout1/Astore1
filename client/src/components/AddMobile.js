import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { addmobile } from '../redux/mobileSlice';
import { MdAdd } from "react-icons/md";
import "../Scss/add.css"
import Swal from 'sweetalert2';



function AddMobile({ ping, setping }) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [mobile, setmobile] = useState({
        image:"",
        name:"",
        price:"",
        storage:"",
        quantity:"",
        status:""
    })

    const alertUp = () => {
      Swal.fire({
        icon: "Congrats!",
        title: "  Mobile was added successfuly!",
      });
    };
  return (
    <div  >
      <button onClick={handleShow}
       style={{backgroundColor:"#227BEA", color:"white" , border:"none", fontSize:"18px", marginLeft:"1229px" ,marginTop:"40px", textAlign:"center", width:"150px", height:"50px", borderRadius:"5px"}} className='btnaddmobile'>
        
        Add Mobile
        <MdAdd style={{fontSize:"20px", marginLeft:"15px"}}/>
      </button>
      <Modal show={show} onHide={handleClose} style={{marginTop:"60px"}} >
        <Modal.Header closeButton>
          <Modal.Title>Add Mobile Phone</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Image</Form.Label>
        <Form.Control type="email" placeholder="Enter mobile image" onChange={(e) => setmobile ({...mobile, image:e.target.value})} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Name</Form.Label>
        <Form.Control type="email" placeholder="Enter mobile name" onChange={(e) => setmobile ({...mobile, name:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile price</Form.Label>
        <Form.Control type="email" placeholder="Enter mobile price" onChange={(e) => setmobile ({...mobile, price:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Storage</Form.Label>
        <Form.Control type="email" placeholder="Enter mobile storage" onChange={(e) => setmobile ({...mobile, storage:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Quantity</Form.Label>
        <Form.Control type="email" placeholder="Enter mobile quantity" onChange={(e) => setmobile ({...mobile, quantity:e.target.value})}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Mobile Status</Form.Label>
        <Form.Control type="email" placeholder="Enter mobile status" onChange={(e) => setmobile ({...mobile, status:e.target.value})}/>
      </Form.Group>
      
    </Form>
    </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleClose} style={{backgroundColor:"red", color:"#fff" , border:"none", borderRadius:"5px", width:"120px", height:"50px" , marginLeft:"30px"}} >

            Close
          </button>
          <button variant="primary" onClick={() => {dispatch(addmobile(mobile)); handleClose(); alertUp()}} style={{backgroundColor:"green", color:"#fff" , border:"none", borderRadius:"5px", width:"120px", height:"50px" , marginLeft:"30px"}} >

            Add Mobile 
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMobile