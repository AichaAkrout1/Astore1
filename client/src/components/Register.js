// import React, { useState } from 'react'
// import {
//     MDBContainer,
//     MDBRow,
//     MDBCol,
//     MDBCard,
//     MDBCardBody,
//     MDBCardImage,
//     MDBInput,
//     MDBIcon,
//     MDBCheckbox
//   }
//   from 'mdb-react-ui-kit';
//   import "../Scss/register.css";
//   import {useDispatch} from 'react-redux'
// import { userRegister } from '../redux/userSlice';
// import { Link, useNavigate } from 'react-router-dom';


// function Register() {
//   const navigate=useNavigate();
//   const [register, setregister] = useState({
//     name:"",
//     lastname:"",
//     email:"",
//     password:"",
//   });
//   const dispatch = useDispatch()
//   return (
//     <div className='register'>
//         <MDBContainer fluid >

// <MDBCard className='text-black m-5 register-box' style={{borderRadius: '25px'}}  >
//   <MDBCardBody>
//     <MDBRow>
//       <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

//         <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{fontSize:"28px", fontFamily:"cursive", color:"#f5b18f"}}>Registration Form</p>

//         <div className="d-flex flex-row align-items-center mb-4 ">
//           <MDBIcon fas icon="user me-3" size='lg'/>
//           <MDBInput label='Your Name' id='form1' type='text' className='w-100' onChange={(e) => setregister({...register, name:e.target.value})}/>
//         </div>

//         <div className="d-flex flex-row align-items-center mb-4">
//         <MDBIcon fas icon="key me-3" size='lg'/>
//           <MDBInput label='Your Last Name' id='form4' type='text' onChange={(e) => setregister({...register, lastname:e.target.value})}/>
//         </div>

//         <div className="d-flex flex-row align-items-center mb-4">
//           <MDBIcon fas icon="envelope me-3" size='lg'/>
//           <MDBInput label='Your Email' id='form2' type='email' onChange={(e) => setregister({...register, email:e.target.value})}/>
//         </div>

//         <div className="d-flex flex-row align-items-center mb-4">
//           <MDBIcon fas icon="lock me-3" size='lg'/>
//           <MDBInput label='Password' id='form3' type='password' onChange={(e) => setregister({...register, password:e.target.value})}/>
//         </div>

       

//         <div className='mb-4'>
//           <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
//         </div>

//         <button  className='btnregister' style={{backgroundColor:"#f5b18f", color:"white" , border:"none", width:"89px", height:"40px", borderRadius:"10px"}} onClick={() => {dispatch (userRegister(register)); navigate("/login")}} >Register</button>
//         <div className='content-register'><p>You Already Have An Account</p><Link to = "/login">Sign In</Link></div>
//       </MDBCol>

//       <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
//         <MDBCardImage src='https://static.vecteezy.com/system/resources/previews/003/689/251/original/online-registration-or-sign-up-login-for-account-on-smartphone-app-user-interface-with-secure-password-mobile-application-for-ui-web-banner-access-cartoon-people-illustration-vector.jpg' fluid style={{width:"450px", height:"300px"}}/>
//       </MDBCol>

//     </MDBRow>
//   </MDBCardBody>
// </MDBCard>

// </MDBContainer>
//     </div>
//   )
// }

// export default Register