import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../Scss/mobilecard.css";
import { deletemac, getmac } from "../redux/macSlice";
import AddMac from "./AddMac";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditMac from "./EditMac";
import Swal from "sweetalert2";

function MacListAdmin({ ping, setping, text }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getmac());
  }, []);

  const macs = useSelector((state) => state.mac?.macliste);


  const  deletemacbook = () =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      }
    })
  }
  return (
    <div> 
      <div style={{marginTop:"30px", fontFamily:"cursive", textDecoration:"underline", marginLeft:"50px"}}>
                  <h1>MacBook's List </h1>
                </div>
     <AddMac/> 
      {/* <div className='add'>
      <AddMobile ping={ping} setping={setping} />
      </div> */}
     
     <div className='container-cards' style={{ marginLeft:"12px" }}>
      
      {macs
      // ?.
      // filter((el) => el?.name.toLowerCase().includes(text.toLowerCase()))
          ?.map((el,i) =>
          <Card key={i} style={{ width: '20rem',marginTop:"30px"}}>
          <Card.Img variant="top" src={el?.image} style={{width: "230px", height: "230px", marginLeft:"40px", marginTop:"20px"}}/>
          <Card.Body>
            <Card.Title style={{textAlign:"center", fontSize:"21px"}}>{el?.name}</Card.Title>
          <div style={{display: "flex"}}>
            <EditMac mac={el} ping={ping} setping={setping}/>
            <button variant="primary"onClick={()=> {dispatch(deletemac(el?._id)) ;  deletemacbook ();
              setping(!ping)}} style={{backgroundColor:"red", color:"#fff" , border:"none" , width:"90px", borderRadius:"5px", height:"50px", marginLeft:'40px'}}>Delete</button>
            </div>
             </Card.Body>
        </Card>
    
          )}
    </div>
    
    
    


    
      
    </div>
  );
}

export default MacListAdmin;
