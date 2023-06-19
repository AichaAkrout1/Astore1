import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import "../Scss/trailler.css";
import {BsFillArrowRightCircleFill } from "react-icons/bs";
import { FaCcPaypal, FaFileInvoiceDollar} from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import { SiSepa } from "react-icons/si";
import { useDispatch, useSelector } from 'react-redux';
import { addorder } from '../redux/orderSlice';
import Swal from 'sweetalert2';


function TraillerMac({macs, ping , setping}) {
  const dispatch=useDispatch()
  const params = useParams();
  const ma = macs?.filter((el) => el?._id === params.id)[0];
  const user = useSelector((state) => state.user?.user)
  const [order, setorder] = useState({
    image_product:ma?.image,
    name_user:user?.name,
    name_product:ma?.name,
    date:new Date(),
    price:ma?.price,
    quantity:ma?.quantity,
    status:"unpaid"
  })

  const alertshopcart = () => {
    Swal.fire({
      icon: "success",
      title: "Shopping Cart",
      text:" Success you have added MacBook to your shopping cart !",
    });
  };

  return (
      <div className='trailler'>
  <header >
    <div className="container-trailler">
      <div className="navigation">
        <div className="logo">
          <i className="icon icon-basket" />
          shop42
        </div>
        <div className="secure">
          <i className="icon icon-shield" />
          <span>Secure Checkout</span>
        </div>
      </div>
      <div className="notification" style={{fontFamily:"fantasy", letterSpacing:"0.8px"}}>Complete Your Purchase</div>
    </div>
  </header>
  <section className="content-trailler">
    <div className="container-trailler"></div>
    <div className="details shadow">
      <div className="details__item">
        <div className="item__image">
          <img
            className="iphone"
            src={ma?.image} style={{height:"300px", width:"250px"}}
            alt=""
          />
        </div>
        <div className="item__details">
          <div className="item__title">{ma?.name}</div>
          <div className="item__price">{ma?.price}</div>
         <div className="item__quantity" style={{fontFamily:"cursive", fontWeight:"600", color:"black"}}>{ma?.status}</div>
          <div className="item__description">
            <ul >
              <li>Super fast and power efficient</li>
              <li>A lot of fast memory</li>
              <li>High resolution camera</li>
              <li>Smart tools for health and traveling and more</li>
              <li>
                Share your games and achievements with your friends via Group
                Play
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container-trailler">
      <div className="actions">
        <button style={{width:"400px", height:"60px"}}className="btn action__submit" onClick={()=>{dispatch(addorder(order)); alertshopcart(); setping(!ping)}} >
          Add To Cart
          <BsFillArrowRightCircleFill style={{marginLeft:"15px", margintop:"14px", fontSize:"20px"}}/>
        </button>
        <a href="/" className="backBtn">
          Go Back to Shop
        </a>
      </div>
    </div>
  </section>
</div>
 
  )
}
export default TraillerMac;
