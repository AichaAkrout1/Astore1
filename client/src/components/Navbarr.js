import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import {
  MdOutlineAddShoppingCart,
  MdOutlineFavoriteBorder,
  MdPerson,
  MdLogin,
  MdLogout,
} from "react-icons/md";
import { BiUserPlus } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import "../Scss/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";

function Navbarr({ settext }) {
  const isAuth = localStorage.getItem("token");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [show, setshow] = useState(false);

  const user = useSelector((state) => state.user?.user);
  // chnage bacground navbar
  const [nav, setnav] = useState(false);
  const changenav = () => {
    window.scrollY >= 80 ? setnav(true) : setnav(false);
  };
  window.addEventListener("scroll", changenav);

  return (
    <div className={nav ? "navactive nav" : "nav"} >
      <Navbar expand="lg" className="nav">
        <Container fluid>
          <Navbar.Brand href="#">
            <Link to="/">
              <img
                src="https://cdn.shopify.com/s/files/1/0023/4104/4283/files/logoastor_150x.png?v=1645334114"
                alt=""
                style={{ width: "120px", height: "50px", marginLeft: "20px" }}
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg- title"
              style={{ maxHeight: "100px", fontSize: "15px" }}
              navbarScroll
            >
              <Nav.Link href="">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    paddingRight: "40px",
                  }}
                  to="/"
                >
                  HOME
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    paddingRight: "40px",
                  }}
                  to="/mac"
                >
                  MAC
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    paddingRight: "40px",
                  }}
                  to="/mobile"
                >
                  IPHONE
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    paddingRight: "40px",
                  }}
                  to="/about"
                >
                  ABOUT US
                </Link>
              </Nav.Link>
              <Nav.Link href="">
                <Link
                  style={{
                    textDecoration: "none",
                    color: "black",
                    paddingRight: "40px",
                  }}
                  to="/contact"
                >
                  CONTACT
                </Link>
              </Nav.Link>
              {isAuth && user?.isAdmin === true ? (
                <Nav.Link href="">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "black",
                      paddingRight: "40px",
                    }}
                    to="/dash"
                  >
                    DASHBOARD
                  </Link>
                </Nav.Link>
              ) : null}

              {/* { !user?<Nav.Link href="" ><Link style={{textDecoration:'none' , color:'black',paddingRight:"40px"}} to ="/login">CONNECTION</Link></Nav.Link>
:null}          </Nav> */}
            </Nav>
            <Form className="d-flex form-search">
              <Form.Control
                type="search"
                placeholder="Search Whatever You Want"
                className="me-2 input"
                aria-label="Search"
                onChange={(e) => settext(e.target.value)}
              />
              {/* <MdSearch style={{fontSize:"20px", color:"#fff",marginLeft:"30px" , color:"black", position:"absolute",top: "33px",left: "1196px"}}/> */}
            </Form>
            {/* <MdSearch style={{fontSize:"20px", color:"#fff",marginLeft:"30px" , color:"black"}} onChange={(e)=> settext(e.target.value)}/> */}
            {/* onClick={()=> setshow(show)} */}
            <Link onClick={() => setshow(!show)}>
              {isAuth && user?.isUser===true || isAuth && user?.isAdmin===true ? (
                <div style={{ marginTop: "-50px" }}>
                  <img
                    style={{
                      width: "70px",
                      height: "70px",
                      borderRadius: "50%",
                      marginLeft: "60px",
                      marginTop: "40px",
                      border: "4px solid green",
                    }}
                    src={user?.image}
                    alt=""
                  />
                  <h5
                    style={{
                      marginLeft: "140px",
                      marginTop: "-47px",
                      color: "green",
                      textDecoration: "none",
                      textTransform:"capitalize"
                    }}
                  >
                    {user?.name}
                  </h5>
                </div>
              ) : (
                <MdPerson
                  style={{
                    fontSize: "30px",
                    color: "#fff",
                    marginLeft: "10px",
                    color: "black",
                  }}
                />
              )}
            </Link>

            {show ? (
              <div className="drop">
                {(isAuth && user?.isUser === true) ||
                (isAuth && user?.isAdmin === true) ? null : (
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      fontSize: "20px",
                      fontFamily: "cursive",
                      fontStyle: "normal",
                      marginLeft: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <MdLogin />
                    Login
                  </Link>
                )}
                {isAuth && user?.isUser === true ? (
                  <Link
                    to="/"
                    onClick={() => {
                      dispatch(logout());
                      navigate("/");
                    }}
                    style={{
                      textDecoration: "none",
                      fontSize: "20px",
                      fontFamily: "cursive",
                      fontStyle: "normal",
                      marginLeft: "10px",
                      marginTop: "1px",
                    }}
                  >
                    <MdLogout />
                    Logout
                  </Link>
                ) : null}
                {isAuth && user?.isAdmin === false ? (
                  <Link
                    to="/profile"
                    style={{
                      textDecoration: "none",
                      fontSize: "20px",
                      fontFamily: "cursive",
                      fontStyle: "normal",
                      marginLeft: "10px",
                      marginTop: "10px",
                    }}
                  >
                    <VscAccount />
                    Account
                  </Link>
                ) : null}
              </div>
            ) : null}
            <MdOutlineFavoriteBorder
              style={{
                fontSize: "20px",
                color: "#fff",
                marginLeft: "30px",
                color: "black",
              }}
            />
            
            <Link to ="/panier">
            <div>
              <MdOutlineAddShoppingCart
                style={{
                  fontSize: "25px",
                  color: "#fff",
                  marginLeft: "20px",
                  color: "black",
                }}
              />
              <input type="text" value="0" className="cartAmount"></input>
            </div>
            </Link>
            
            {/* {user? <Link to = "/profile"><MdPerson style={{fontSize:"40px", color:"#fff",marginLeft:"10px", color:"black"}}/></Link>:null} */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbarr;
