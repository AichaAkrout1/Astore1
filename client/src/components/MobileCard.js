import React from 'react';
import "../Scss/mobilecard.css";
import { deletemobile } from '../redux/mobileSlice';
import { useDispatch } from 'react-redux';
import EditMobile from './EditMobile';
import { MdOutlineFavoriteBorder, MdSearch} from "react-icons/md";
import { FaRandom} from "react-icons/fa";
import { Link } from 'react-router-dom';



function MobileCard({el, ping, setping}) {
  const dispatch = useDispatch();
  return ( 
    // <div className='flip-card'>
    //   <div className='flip-card-inner'>
    //     <div className="flip-card-front">
    //   <img src={mobile?.image} alt=""/>
    //   </div>
    //   <div className="flip-card-back">
    //   <h4>{mobile?.name}</h4>
    //   <p>{mobile?.ecran}</p>
    //   <p>{mobile?.puce}</p>
    //   <p>{mobile?.caméra}</p>
    //   <p>{mobile?.capacité}</p>
    //   <div className='btnsDE'>
    //   <button onClick={()=> {dispatch(deletemobile(mobile?._id)); setping(!ping)}} style={{backgroundColor:"#fff", color:"#F26E2B" , border:"none" , width:"50%", borderRadius:"20px"}}>Delete</button>
    //   <EditMobile mobile={mobile} ping={ping} setping={setping}/>
    //   </div>
    //   </div>
    //   </div>
    // </div>
    <Link to ={`/trailler/${el._id}`} style={{textDecoration:'none' , color:'white'}}>

  <div className="row" >
  <div>
    <div className="product-grid" style={{marginTop:"20px", marginLeft:"60px", marginRight:"60px"}}>
      <div className="product-image" >
        <a href="#" className="image">
        <img src={el.image} alt=""/>
        </a>
        <span className="product-discount-label">-23%</span>
        <ul className="product-links">
          <li>
            <a href="#">
              <MdOutlineFavoriteBorder/>
            </a>
          </li>
          <li>
            <a href="#">
              <MdSearch />
            </a>
          </li>
          <li>
            <a href="#">
              <FaRandom />
            </a>
          </li>
        </ul>
        <a href="" className="add-to-cart">
          Add to Cart
        </a>
      </div>
      <div className="product-content">
        <h3 className="title">
          <a href="#">{el.name}</a>
        </h3>
        <div className="price">
         {el?.price} <span>$68.88</span>
        </div>
      </div>
    </div>
  </div>
  </div>
  </Link>
  )
}

export default MobileCard