import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import About from './components/About';
import MobileList from './components/MobileList';
import Navbarr from './components/Navbarr';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './components/Contact';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getmobile } from './redux/mobileSlice';
import Register from './components/Register';
import Login from './components/Login';
import { userCurrent } from './redux/userSlice';
import Profile from './components/Profile';
import PrivateRoute from './routes/PrivateRoute';
import MacList from './components/MacList';
import TraillerMobile from './components/TraillerMobile';
import TraillerMac from './components/TraillerMac';
import Dashboard from './components/Dashboard';
import AddMobile from './components/AddMobile';
import MacListAdmin from './components/MacListAdmin';
import EditMobile from './components/EditMobile';
import MobileListAdmin from './components/MobileListAdmin';
import Home from './components/Home';
import UserList from './components/UserList';
import { getorder } from './redux/orderSlice';
import Panier from './components/Panier';
import HomeDash from './components/HomeDash';
import OrderList from './components/OrderList';



function App() {
  const mobile = useSelector((state) => state.mobile?.mobileliste);
  const macs = useSelector((state) => state.mac?.macliste);
  const user = useSelector((state) => state.user?.user);
  const [text, settext] = useState("")
  const location = useLocation()
  const isAuth =  localStorage.getItem("token");
  const dispatch = useDispatch();
  const [ping, setping] = useState("");
  useEffect(() => {
    dispatch(getmobile());
    dispatch(getorder());
    if (isAuth ) {
      dispatch(userCurrent())   
    }
  }, [ping]);



  return (
    <>
    <div className="App">
      <Navbarr settext={settext}/>
      {/* {location.pathname.includes('dashboard') ?null : (<Navbarr  settext={settext} /> )} */}
     
      <Routes>
        <Route path="/" element={ <Home  />  } />
        <Route path="/about" element={ <About/> } />
        <Route path="/mac" element={ <MacList/> } />
        <Route path="/mobile" element={ <MobileList ping={ping} setping={setping} text={text}/> } />
        <Route path="/contact" element={ <Contact/> } />
        <Route path="/login" element={ <Login  ping={ping} setping={setping}/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/panier" element={ <Panier ping={ping} setping={setping} /> } />
        
        <Route element={<PrivateRoute/>}/>
        {isAuth && user?.isUser===true?(<Route  path="/profile" element={ <Profile ping={ping} setping={setping}/> } />):
        (<Route  path="/" element={ <Home/> } />)
        
        }
        <Route path="/trailler/:id" element={<TraillerMobile mobiles={mobile} ping={ping} setping={setping}  />} />
        <Route path="/trailler2/:id" element={<TraillerMac macs={macs} ping={ping} setping={setping} />} />
        {isAuth && user?.isAdmin===true?(
        <Route path="/dash" element={ <Dashboard ping={ping} setping={setping}/> }>
          {/* <Route path="/dash" element={ <AddMobile/> } /> */}
          <Route path="/dash/iphone" element={ <MobileListAdmin ping={ping} setping={setping}/> } />
          <Route path="/dash/mac" element={ <MacListAdmin ping={ping} setping={setping}/> } />
          <Route path="/dash/edit" element={ <EditMobile/> } />
          <Route path="/dash/userlist" element={ <UserList ping={ping} setping={setping}/> } />
          <Route path="/dash/orderlist" element={ <OrderList ping={ping} setping={setping}/> } />
          <Route path="/dash/homedash" element={ <HomeDash /> } />

          
        </Route>):null}
      </Routes>

      

      
    </div>
    </>
  );
}

export default App;
