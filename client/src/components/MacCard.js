import React from 'react'
import { MdOutlineFavoriteBorder, MdSearch, MdOutlineAddShoppingCart} from "react-icons/md";
import { FaRandom} from "react-icons/fa";
import "../Scss/mobilecard.css";
import { Link } from 'react-router-dom';


function MacCard({el, ping, setping}) {
  return (
    <Link to ={`/trailler2/${el._id}`} style={{textDecoration:'none' , color:'white'}}>
    <div className="row">
  <div>
    <div className="product-grid" style={{marginTop:"20px", marginLeft:"60px", marginRight:"60px"}}>
      <div className="product-image">
        <a href="#" className="image">
        <img src={el?.image} alt=""/>
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
          <a href="#">{el?.name}</a>
        </h3>
        <div className="price">
          {el?.price} <span>$68.88</span>
        </div>
      </div>
    </div>
  </div>
  </div>

{/* <div className="container-mac">
  <div className="card">
    <div className="imgBx">
      <img
        src={el?.image}
        alt=""
      />
    </div>
    <div className="contentBx">
      <h2>{el?.name}</h2>
      <div className="size">
        <h3>{el?.price}</h3>
      </div>
      <a href="#">Buy Now</a>
    </div>
  </div>
</div> */}



  </Link>
);
}



export default MacCard