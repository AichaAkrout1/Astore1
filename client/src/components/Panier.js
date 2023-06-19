import React, { useState } from 'react';
import "../Scss/panier.css";
import { AiFillDelete} from "react-icons/ai";
import { BiEdit} from "react-icons/bi";

import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBListGroup,
    MDBListGroupItem,
    MDBRipple,
    MDBRow,
    MDBTooltip,
    MDBTypography,
    } from "mdb-react-ui-kit";
import { useDispatch, useSelector } from 'react-redux';
import { deleteorder } from '../redux/orderSlice';

function Panier({ping, setping}) {
    const users = useSelector((state) => state.user?.user)
    const orders = useSelector((state) => state.order?.orderliste)
    const dispatch=useDispatch();
   console.log(orders)

const [price, setprice] = useState(1)
const [qte, setqte] = useState(1)

  //  const totalPrice=orders?.reduce((acc,item)=>{
  //   const price=parseFloat(item?.price?.replace("$",""))
  //   const quantity=parseInt(item?.quantity)

  //    return acc+(price*quantity)
  //  })

  return (
    <section className="h-100 gradient-custom">
    <MDBContainer className="py-5 h-100" >
      <MDBRow className="justify-content-center my-4" >
        <MDBCol md="8">
            
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <MDBTypography tag="h5" className="mb-0" style={{color:"black", fontFamily:"cursive", fontWeight:"600"}}>
                Cart of items
              </MDBTypography>
            </MDBCardHeader>
            { orders?.filter((el) => el?.name_user == users?.name).map((el,i) =>
            <MDBCardBody key={i}>
           
              <MDBRow>
                <MDBCol lg="3" md="12" className="mb-4 mb-lg-0" >
                  <MDBRipple rippleTag="div" rippleColor="light"
                    className="bg-image rounded hover-zoom hover-overlay">
                    <img
                      src={el?.image_product}
                      className="w-100" />
                    <a href="#!">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.2)" , }}>
                      </div>
                    </a>
                  </MDBRipple>
                </MDBCol>
  
                <MDBCol lg="5" md="6" className=" mb-4 mb-lg-0">
                  <p>
                    <strong>{el?.name_product}</strong>
                  </p>
                  <p>{el?.quantity}</p>
                  <p>{el?.date}</p>
                </MDBCol>
                <MDBCol lg="4" md="6" className="mb-4 mb-lg-0">
                  <div className="d-flex mb-4" style={{ maxWidth: "300px" }}>
                    
                  {/* <input  type="text" value={qte} label="Quantity" style={{width:"50px",height:"30px"}} onChange={(e)=>setqte(e.target.value)} /> */}
  
                    <MDBInput defaultValue={1} min={0} type="number" label="Quantity" style={{width:"50px"}} onChange={(e)=>setqte(e.target.value)} />
                    {/* <div>
                    <BiEdit style={{fontSize:"20px",color:"green", marginLeft:"30px", cursor:"pointer", marginTop:"40px"}}/>
                    </div> */}
                    <div wrapperClass="me-1 mb-2"
                    title="Remove item" >
                    <AiFillDelete onClick={()=> {dispatch(deleteorder(el?._id)) ; setping(!ping)}}
                  
                   style={{fontSize:"20px",color:"red", marginLeft:"80px", cursor:"pointer", marginTop:"40px"}} />
                  </div>
                  </div>
  
                 
                  <p >
                    <strong>{el?.price}</strong>
                  </p>
                    {/* <input type="text" placeholder={el.price} style={{width:"80px"}} onChange={()=>{setprice(parseInt(el.price));console.log(parseInt(el.price)*parseInt(qte))}}/> */}
                 
                </MDBCol>
               
              </MDBRow>
           
              <hr className="my-4" />
             
            </MDBCardBody>
             )}
          </MDBCard>
  

        </MDBCol>
        <MDBCol md="4">
          <MDBCard className="mb-4">
            <MDBCardHeader>
              <MDBTypography tag="h5" className="mb-0" style={{color:"black", fontFamily:"cursive", fontWeight:"600"}}>
                Summary
              </MDBTypography>
            </MDBCardHeader>
            <MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem
                  className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                  Products
                  <span></span>
                </MDBListGroupItem>
                <MDBListGroupItem
                  className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                  <div>
                    <strong>Total amount</strong>
                    <strong>
                      <p className="mb-0">(including VAT)</p>
                    </strong>
                  </div>
                  {/* <span>
                    <strong>{totalPrice}</strong>
                  </span> */}
                </MDBListGroupItem>
              </MDBListGroup>
  
              <button block size="lg" style={{background:"#386BC0", boxShadow: "0px 11px 10px -1px rgba(173,172,172,0.75)",color:"#fff", borderRadius:"5px", textTransform:"uppercase", width:"100%", border:"none", height:"50px", fontWeight:"600", fontSize:"17px"}}>
                Go to checkout
              </button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  </section>
  )
}

export default Panier