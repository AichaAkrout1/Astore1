import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import "../Scss/add.css";
import "../Scss/profile.css";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import AddMobile from "./AddMobile";
import EditUser from "./EditUser";
import { FaRegHandPointDown  } from "react-icons/fa";
import { getorder } from "../redux/orderSlice";

function Profile({ ping, setping }) {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.user?.user);
  useEffect(() => {
    dispatch(getorder());
  }, []);

  const orders = useSelector((state) => state.order?.orderliste);

  return (
    <div className="profil">
      {/* <h1 style={{marginTop:"80px"}}>hello {user?.name}</h1> */}
      {/* <div>
      {<button style={{marginTop:"30px", marginLeft:"50px", background:"blue", color:"white", width:"120px", height:"50px", borderRadius:"12px", border:"none"}} onClick={() =>{dispatch(logout()); navigate("/login")}}>Logout</button> }
      </div> */}
      {/* <div className='addmob'>
      <AddMobile ping={ping} setping={setping} />
      </div>  */}
      {/* <Dashboard/> */}
      <div className="gradient-custom-2" style={{ backgroundColor: "#9de2ff" }}>
        <MDBContainer className="py-5 h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol lg="9" xl="7">
              <MDBCard>
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#000", height: "200px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <MDBCardImage
                      src={users?.image}
                      alt="Generic placeholder image"
                      className="mt-4 mb-2 img-thumbnail"
                      fluid
                      style={{ width: "150px", zIndex: "1" }}
                    />
                    {/* <FiEdit style={{fontSize:"26px", marginLeft:"630px", color: "#fff",marginTop: "-71px"}} /> */}
                    <EditUser user={users} ping={ping} setping={setping} />
                  </div>
                  <div
                    className="ms-3"
                    style={{ marginTop: "130px", textTransform: "capitalize" }}
                  >
                    <MDBTypography tag="h5">
                      {users?.name} {users?.lastname}
                    </MDBTypography>
                  </div>
                </div>

                <MDBCardBody className="text-black p-4">
                  <div className="mb-5">
                    <p className="lead fw-normal mb-1">Informations</p>
                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                      <MDBCardText
                        className="font-italic mb-1"
                        style={{ textTransform: "capitalize" }}
                      >
                        {users?.name} {users?.lastname}
                      </MDBCardText>
                      <MDBCardText className="font-italic mb-1">
                        {users?.email}
                      </MDBCardText>
                      <MDBCardText className="font-italic mb-1">
                      +216{users?.NumberPhone}
                      </MDBCardText>
                      {/* <MDBCardText className="font-italic mb-0">{user?.password}</MDBCardText> */}
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <MDBCardText
                      className="lead fw-normal mb-0"
                      style={{
                        fontFamily: "cursive",
                        textDecoration: "underline",
                        
                      }}
                    >
                      My Orders <FaRegHandPointDown style={{fontSize:"25px", marginLeft:"18px"}}/>
                    </MDBCardText>
                    <MDBCardText className="mb-0">
                      <a href="#!" className="text-muted">
                        Show all
                      </a>
                    </MDBCardText>
                  </div>
                  {orders
                    ?.filter((el) => el?.name_user == users?.name)
                    .map((el, i) => (
                      <MDBRow key={i}>
                        <MDBCol className="mb-2">
                          <MDBCardImage
                            src={el?.image_product}
                            alt=""
                            style={{
                              width: "480px",
                              height: "280px",
                              marginLeft: "100px",
                              borderRadius: "5px",
                            }}
                          />

                          <MDBCardText
                            className="font-italic mb-1"
                            style={{
                              textAlign: "center",
                              marginTop: "10px",
                              fontFamily: "serif",
                              fontSize: "20px",
                              fontWeight: "400",
                            }}
                          >
                            Name Product : {el?.name_product}
                          </MDBCardText>
                          <MDBCardText
                            className="font-italic mb-1"
                            style={{
                              textAlign: "center",
                              marginTop: "10px",
                              fontFamily: "serif",
                              fontSize: "18px",
                              fontWeight: "900",
                            }}
                          >
                            Price : ${el?.price}
                          </MDBCardText>
                        </MDBCol>
                      </MDBRow>
                    ))}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Profile;
