import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteorder, getorder } from "../redux/orderSlice";
import { AiFillDelete } from "react-icons/ai";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../Scss/userlist.css";
import Swal from "sweetalert2";

function OrderList({ ping, setping }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [statuspayment, setstatuspayment] = useState("paid");
  useEffect(() => {
    dispatch(getorder());
  }, []);


  const  deleteOrders = () =>{
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

  const orders = useSelector((state) => state.order?.orderliste);
  // const mobiles = useSelector((state) => state.mobile?.mobileliste);
  // const macs = useSelector((state) => state.mac?.macliste);
  const users = useSelector((state) => state.user?.users);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-box clearfix">
              <div className="table-responsive">
                <div style={{marginTop:"30px", fontFamily:"cursive", textDecoration:"underline"}}>
                  <h1>Orders List </h1>
                </div>
                <div style={{ marginLeft: "1000px", marginTop:"30px"}}>
                  <button
                    style={{
                      width: "80px",
                      marginRight: "20px",
                      height: "50px",
                      background: "green",
                      color: "#fff",
                      borderRadius: "5px",
                      border: "none",
                      boxShadow: "0px 11px 8px 0px rgba(166,166,166,0.69)",
                      fontFamily:"monospace",
                      fontSize:"18px",
                      fontWeight:"900"
                    }}
                    onClick={() => setstatuspayment("paid")}
                  >
                    Paid
                  </button>
                  <button style={{
                      width: "80px",
                      marginRight: "20px",
                      height: "50px",
                      background: "red",
                      color: "#fff",
                      borderRadius: "5px",
                      border: "none",
                      boxShadow: "0px 11px 8px 0px rgba(166,166,166,0.69)",
                      fontFamily:"monospace",
                      fontSize:"18px", 
                      fontWeight:"900"
                    }}
                    onClick={() => setstatuspayment("unpaid")}>UnPaid</button>
                </div>
                <table className="table user-list"  style={{marginTop:"60px"}}>
                  <thead>
                    <tr>
                      <th>
                        <span>Name</span>
                      </th>
                      <th>
                        <span>Name Product</span>
                      </th>
                      <th>
                        <span>Date</span>
                      </th>
                      <th>
                        <span> Price</span>
                      </th>
                      <th>
                        <span>Status (Paid/Unpaid) </span>
                      </th>
                      <th>
                        <span>Action </span>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders && orders.filter (el => el.status == statuspayment)?.map((el, i) => (
                      <tr key={i}>
                        <td style={{ borderRadius: "5px", color: "black" }}>
                          <a
                            href="#"
                            className="user-link"
                            style={{ fontSize: "16px" , textTransform:"capitalize"}}
                          >
                            {el?.name_user}
                          </a>
                        </td>
                        <td style={{ borderRadius: "5px" }}>
                          <a
                            href="#"
                            className="user-link"
                            style={{ fontSize: "16px" }}
                          >
                            {el?.name_product}
                          </a>
                        </td>
                        <td style={{ borderRadius: "5px" }}>
                          <a
                            href="#"
                            className="user-link"
                            style={{ fontSize: "16px" }}
                          >
                            {el?.date}
                          </a>
                        </td>
                        <td style={{ borderRadius: "5px" }}>
                          <a
                            href="#"
                            className="user-link"
                            style={{ fontSize: "16px" }}
                          >
                            ${el?.price}
                          </a>
                        </td>
                        <td>
                          <a
                            href="#"
                            className="user-link"
                            style={{ fontSize: "16px" }}
                          >
                            {el?.status}
                          </a>
                        </td>
                        <td style={{ width: "10px", borderRadius: "5px" }}>
                          <a href="" className="table-link danger">
                            <span>
                              <AiFillDelete
                                variant="primary"
                                onClick={() => {
                                  dispatch(deleteorder(el?._id));
                                  setTimeout(() => {
                                    navigate("/dash/orderlist");
                                  }, 500);

                                  setping(!ping);
                                  deleteOrders()
                                }}
                              >
                                Delete
                              </AiFillDelete>
                            </span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul
                className="pagination pull-right"
                style={{ marginLeft: "1120px" }}
              >
                <li>
                  <a href="#">
                    <FaChevronLeft />
                  </a>
                </li>
                <li>
                  <a href="#" style={{ padding: "10px" }}>
                    1
                  </a>
                </li>
                <li>
                  <a href="#" style={{ padding: "10px" }}>
                    2
                  </a>
                </li>
                <li>
                  <a href="#" style={{ padding: "10px" }}>
                    3
                  </a>
                </li>
                <li>
                  <a href="#" style={{ padding: "10px" }}>
                    4
                  </a>
                </li>
                <li>
                  <a href="#" style={{ padding: "10px" }}>
                    5
                  </a>
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
  );
}

export default OrderList;
