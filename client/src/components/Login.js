import "../Scss/login.css";
import { userLogin, userRegister } from '../redux/userSlice';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Login ({ping,setping}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user?.user);
  console.log('user',user)
  const isAuth =  localStorage.getItem("token");
  const [register, setRegister] = useState({
    image:"",
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [client, setClient] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="mm">
      <div className="main-register">
        <input type="checkbox" id="chk" aria-hidden="true" />
        <div className="signup">
          <div onSubmit={(e) => e.preventDefault()}>
            <label className="labels" htmlFor="chk" aria-hidden="true">
              Sign up
            </label>
            <input
              className="inp"
              type="text"
              name="txt"
              placeholder="Name"
              required=""
              onChange={(e) =>
                setRegister({ ...register, name: e.target.value })
              }
            />
            <input
              className="inp"
              type="text"
              name="txt"
              placeholder="Last Name"
              required=""
              onChange={(e) =>
                setRegister({ ...register, lastname: e.target.value })
              }
            />
            <input
              className="inp"
              type="email"
              name="email"
              placeholder="Email"
              required=""
              onChange={(e) =>
                setRegister({ ...register, email: e.target.value })
              }
            />
            <input
              className="inp"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              onChange={(e) =>
                setRegister({ ...register, password: e.target.value })
              }
            />
            <button
              className="bb"
              onClick={() => {
                dispatch(userRegister(register));
              
                setTimeout(() => {
                  navigate("/login");
                }, 1000);
              }}
            >
              Sign up
            </button>
            <Link to="/" style={{marginLeft:"110px", color:"#fff"}}>Return to Home</Link>
          </div>
        </div>
        <div className="login">
          <div onSubmit={(e) => e.preventDefault()}>
            <label className="labels" htmlFor="chk" aria-hidden="true">
              Login
            </label>
            <input
              className="inp"
              type="email"
              name="email"
              placeholder="Email"
              required=""
              onChange={(e) => setClient({ ...client, email: e.target.value })}
            />
            <input
              className="inp"
              type="password"
              name="pswd"
              placeholder="Password"
              required=""
              onChange={(e) =>
                setClient({ ...client, password: e.target.value })
              }
            />
            <button
              className="bb"
              onClick={() => {
                {
                  dispatch(userLogin(client));
                  setping(!ping)
                  
                  {isAuth && user?.isAdmin === true || isAuth && user?.isUser === true?(
                     navigate("/")
                  ):
                  navigate("/") 
                  }
                    
                  
                //   setTimeout(() => {
                //  if (isAuth && user?.isAdmin === true || isAuth && user?.isUser === true){
                //    
                //  }
                //   }, 500);
                  
                }
              }}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}



export default Login