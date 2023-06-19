import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userdelete, userget } from '../redux/userSlice';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import EditUser from './EditUser';
import { AiFillDelete} from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../Scss/userlist.css";
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


function UserList({ ping, setping }) {
  const navigate =useNavigate()
    const dispatch=useDispatch()
  useEffect(() => {
    dispatch(userget())
  }, [])
  
    const users = useSelector((state) => state.user?.users);

    const  deleteUsers = () =>{
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  return (
    // <div className='container-cards'>
       

      
    //       <Card key={i} style={{ width: '20rem' }}>
    //       <Card.Img variant="top" src={el?.image} style={{width: "209px", height: "258px", marginLeft:"40px", marginTop:"20px"}}/>
    //       <Card.Body>
    //         <Card.Title style={{textAlign:"center", fontSize:"21px"}}>{el?.name} {el?.lastname}</Card.Title>
    //         <Card.Title style={{textAlign:"center", fontSize:"21px"}}>{el?.email}</Card.Title>
    //       <div style={{display: "flex"}}>
    //       <EditUser user={el} ping={ping} setping={setping}/>
    //         <AiFillDelete variant="primary"onClick={()=> {dispatch(userdelete(el?._id)) ; 
    //           setping(!ping)}} style={{ color:"red" , border:"none" , width:"50px", height:"45px", marginLeft:'117px', cursor:"pointer"}}>Delete</AiFillDelete>
    //         </div>
    //          </Card.Body>
    //     </Card>
    //     </div>
    <div>
    <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <div className="main-box clearfix">
          <div className="table-responsive">
          <div style={{marginTop:"30px", fontFamily:"cursive", textDecoration:"underline"}}>
                  <h1> Users List</h1>
                </div>
            <table className="table user-list">
              <thead>
                <tr>
                  <th>
                    <span>User</span>
                  </th>
                  <th>
                    <span>Email</span>
                  </th>
                  <th >
                    <span>Number Phone </span>
                  </th>
                  <th >
                    <span>Action </span>
                  </th>
                </tr>
              </thead>
              <tbody >
                
              {users
              ?.map((el,i) => el?.isAdmin===false && (
                <tr key={i} >
                  <td style={{borderRadius:"5px"}}>
                    <img
                      src={el?.image}
                      alt=""
                    />
                    <a href="#" className="user-link" style={{fontFamily:"cursive", textTransform:"capitalize"}}>
                      {el?.name} {el?.lastname}
                    </a>
                  </td>
                  <td style={{borderRadius:"5px"}}>
                    <a href="#" className="user-link" style={{fontSize:"16px"}}>{el?.email}</a>
                  </td>
                  <td>
                  <a href="#" className="user-link" style={{fontSize:"16px"}}>{el?.NumberPhone}</a>
                  </td>
                  <td style={{ width: "10px",borderRadius:"5px"}} >
                  <a href="" className="table-link danger">
									<span >
                  <AiFillDelete variant="primary"onClick={()=> {dispatch(userdelete(el?._id)) ; deleteUsers();
                  setTimeout(() => {
                     navigate("/dash/userlist")
                  }, 500);
                 
                    setping(!ping)}}>Delete</AiFillDelete>
									</span>
								</a>
                    
                  </td>
                </tr>
                )
                  )
                }
              </tbody>
            </table>
          
          </div>
          <ul className="pagination pull-right" style={{marginLeft:"1120px"}}>
          <li>
            <a href="#">
              <FaChevronLeft  />
            </a>
          </li>
          <li>
            <a href="#" style={{padding:"10px"}}>1</a>
          </li>
          <li>
            <a href="#" style={{padding:"10px"}}>2</a>
          </li>
          <li>
            <a href="#" style={{padding:"10px"}}>3</a>
          </li>
          <li>
            <a href="#" style={{padding:"10px"}}>4</a>
          </li>
          <li>
            <a href="#"style={{padding:"10px"}}>5</a>
          </li>
          <li>
            <a href="#">
              <FaChevronRight className="fa fa-chevron-right" />
            </a>
          </li>
        </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  ) } 



export default UserList