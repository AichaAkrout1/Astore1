import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MobileCard from './MobileCard';
import "../Scss/mobilecard.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { deletemobile } from '../redux/mobileSlice';
import EditMobile from './EditMobile';
import AddMobile from './AddMobile';
import Swal from 'sweetalert2';

function MobileListAdmin({ ping, setping, text }) {
  const mobiles = useSelector((state) => state.mobile?.mobileliste);
  console.log("mobiles",mobiles)
  const dispatch = useDispatch();
//suite alert of delete
const  deletephone = () =>{
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
                  <h1>Mobiles List </h1>
                </div>
     <AddMobile/> 
      {/* <div className='add'>
      <AddMobile ping={ping} setping={setping} />
      </div> */}
     
    <div className='container-cards' style={{ marginLeft:"12px" }}>
      
      {mobiles
      // ?.
      // filter((el) => el?.name.toLowerCase().includes(text.toLowerCase()))
          ?.map((el,i) => 
          // <div key={i} class="card" >
          //     <img src={el?.image} class="card-img-top" alt="..." />
          //     <div class="card-body">
          //       <h5 class="card-title"> {el?.name}</h5>
          //       <EditMobile mobile={el} ping={ping} setping={setping}/>

          //       <button onClick={()=> {dispatch(deletemobile(el?._id)) ; setping(!ping)}} style={{backgroundColor:"#fff", color:"#F26E2B" , border:"none" , width:"50%", borderRadius:"20px"}}>Delete</button>
          //     </div>
          //   </div>
          <Card key={i} style={{ width: '20rem', marginTop:"30px" }}>
          <Card.Img variant="top" src={el?.image} style={{width: "209px", height: "258px", marginLeft:"40px", marginTop:"20px"}}/>
          <Card.Body>
            <Card.Title style={{textAlign:"center", fontSize:"21px"}}>{el?.name}</Card.Title>
          <div style={{display: "flex"}}>
            <EditMobile mobile={el} ping={ping} setping={setping}/>
            <button variant="primary"onClick={()=> {dispatch(deletemobile(el?._id)) ; deletephone();
              setping(!ping)}} style={{backgroundColor:"red", color:"#fff" , border:"none" , width:"120px", borderRadius:"5px", height:"50px", marginLeft:'40px'}}>Delete</button>
            </div>
             </Card.Body>
        </Card>
    
          )}
    </div>
    
    
    


    
      
    </div>
  )
}

export default MobileListAdmin