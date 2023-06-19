// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { BiEdit } from "react-icons/bi";
// import { editorder } from "../redux/orderSlice";
// import { Button, Modal } from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { ToastContainer, toast } from 'react-toastify';
// import { Link } from "@material-ui/core";

// function EditOrder({ ordr }) {
//   const dispatch = useDispatch();
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [name_product, setname_product] = useState(ordr.name_product);
//   const [image_product, setimage_product] = useState(ordr.image_product);
//   const [quantity, setquantity] = useState(ordr.quantity);
//   const [price, setprice] = useState(ordr.price);
//   const [order1, setorder1] = useState(ordr);

//   const Multi=(a,b)=>{
//     return a*b;
//   }
//   return (
//     <div>
//       <BiEdit
//         onClick={handleShow}
//         style={{
//           fontSize: "20px",
//           color: "green",
//           marginLeft: "30px",
//           cursor: "pointer",
//           marginTop: "40px",
//         }}
//       />

//       <Modal show={show} onHide={handleClose} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>Edit Order</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <table>
//             <tr>
//               <td style={{ width: 200, height: 20, marginRight: 20 }}>
//                 <label>Nom article:</label>
//               </td>
//               <td>
//                 <input
//                   type="Product Name"
//                   name="Product Name"
//                   value={name_product}
//                   onChange={(e) => setname_product(e.target.value)}
//                 ></input>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <label>Product Image</label>
//               </td>
//               <td>
//                 <input
//                   type="Product Image"
//                   name="Product Image"
//                   value={image_product}
//                   onChange={(e) => setimage_product(e.target.value)}
//                 ></input>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <label>Qte</label>
//               </td>
//               <td>
//                 <input
//                   type="quantity"
//                   name="quantity"
//                   value={quantity}
//                   onChange={(e) => {
//                     setquantity(e.target.value);
//                     setprice(Multi(e.target.value, ordr.price));
//                   }}
//                 ></input>
//               </td>
//             </tr>
//             <tr>
//               <td>
//                 <label>Price</label>
//               </td>
//               <td>
//                 <input
//                   type="price"
//                   name="price"
//                   value={price}
//                   onChange={(e) => setprice(e.target.value)}
//                 ></input>
//               </td>
//             </tr>
//           </table>
//           {console.log(typeof quantity)}
//         </Modal.Body>
//         <Modal.Footer>
//           <Link to="/panier">
//             <Button
//               style={{
//                 width: 120,
//                 fontWeight: "bold",
//                 height: 36,
//                 backgroundColor: "rgb(222 113 113)",
//                 padding: ".375rem .75re",
//                 fontSize: "1rem",
//                 lineHeight: "1.5",
//                 borderRadius: ".25rem",
//                 border: "none",
//               }}
//               onClick={() => {
//                 dispatch(
//                     editorder(ordr._id, { quantity })
//                 );
//                 handleClose();
//                 // notify();
//               }}
//             >
//               Edit
//             </Button>
//             <ToastContainer
//               position="top-right"
//               autoClose={5000}
//               hideProgressBar={false}
//               newestOnTop={false}
//               closeOnClick
//               rtl={false}
//               pauseOnFocusLoss
//               draggable
//               pauseOnHover
//             ></ToastContainer>
//           </Link>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// }

// export default EditOrder;
