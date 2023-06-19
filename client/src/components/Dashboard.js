import React, { useEffect, useState } from 'react'
import "../Scss/dashboard.css";
import { MdDashboard } from "react-icons/md";
import { BiLogOut } from "react-icons/bi";
import { SiProducthunt } from "react-icons/si";
import { AiOutlineShoppingCart  } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AddMobile from './AddMobile';
import { logout } from '../redux/userSlice';
import HomeDash from './HomeDash';


function Dashboard( {ping , setping}) {
  const [show, setshow] = useState(false);
  const user = useSelector((state) => state.user?.user);
  useEffect (() => {

  }, [ping])
  const navigate = useNavigate();
  const dispatch = useDispatch();


  return (
    <>
<div className='dashboard'>

<div className="row">
  
  <div className="col-2">
    <div className="sidebar-wrapper">
      <nav id="sidebar">
        <ul className="list-unstyled components">
        <div>
    <img style={{width:"150px", height:"150px", borderRadius:"50%", marginLeft:"60px", marginTop:"20px",border:"5px solid green"}} src={user?.image} alt=""/>
    <h5 style={{marginLeft:"68px", marginTop:"10px"}}>{user?.name} {user?.lastname}</h5>
  </div>
          <li>
            <a href="">
              <Link to="/dash/homedash">
              <MdDashboard /> Dashboard</Link>
              
            </a>
          </li>
          <li>
           
             
              <Link onClick={()=> setshow(!show)} ><SiProducthunt style={{fontSize:"20px",marginLeft:"5px"}}/>
            
              Products
            
            </Link>

            {show?  (
              <div className="dropProduct">
              <Link to="/dash/iphone">Iphone</Link>
              <Link to="/dash/mac">Mac</Link>
              </div>
            ):null
             }
           
            <a href="">
             <Link to="/dash/orderlist"><AiOutlineShoppingCart /> Orders</Link> 
            </a>
          </li>
          <li>
            <a href="">

            <Link to="/dash/userlist"><FaUserCircle /> Users</Link> 
            </a>
          </li>

          <li style={{marginTop:"150px"}}>
            <a href="">

            <Link to="/login"
                    onClick={() => {
                      dispatch(logout());
                      navigate("/login");
                    }}><BiLogOut /> Log Out</Link> 
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>

 
</div>


</div>

<div className="dash">
<Outlet/>


</div>
</>
  
  )
}

export default Dashboard