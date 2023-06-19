import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { userupdate } from "../redux/userSlice";
import { FiEdit } from "react-icons/fi";
import Swal from "sweetalert2";

function EditUser({ user, ping, setping }) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [useredit, setuseredit] = useState({
    image: user.image,
    name: user.name,
    lastname: user.ecran,
    email: user.email,
    NumberPhone: user.NumberPhone,
    password: user.password,
    isAdmin: user.isAdmin,
  });

  const alertUp = () => {
    Swal.fire({
      icon: "success",
      title: " Your information was successfully update!",
    });
  };
  return (
    <div>
      <FiEdit
        onClick={handleShow}
        style={{
          fontSize: "26px",
          marginLeft: "630px",
          color: "#fff",
          marginTop: "-137px",
        }}
      />

      {/* <FaRegEdit  onClick={handleShow} style={{fontSize:"26px", marginLeft:"480px", color: "rgb(19 19 19)",marginTop: "168px", cursor:"pointer"}} /> */}
      {/* <button variant="primary" onClick={handleShow}
            style={{backgroundColor:"green", color:"#fff" , border:"none", borderRadius:"5px", width:"120px", height:"50px" , marginLeft:"30px"}} >
        Edit User
      </button> */}

      <Modal show={show} onHide={handleClose} style={{ marginTop: "60px" }}>
        <Modal.Header closeButton>
          <Modal.Title>Edit user Phone</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>user Image</Form.Label>
              <Form.Control
                type="email"
                placeholder={user?.image}
                onChange={(e) =>
                  setuseredit({ ...useredit, image: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>user Name</Form.Label>
              <Form.Control
                type="email"
                placeholder={user.name}
                onChange={(e) =>
                  setuseredit({ ...useredit, name: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>user LastName</Form.Label>
              <Form.Control
                type="email"
                placeholder={user.lastname}
                onChange={(e) =>
                  setuseredit({ ...useredit, lastname: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>user Email</Form.Label>
              <Form.Control
                type="email"
                placeholder={user.email}
                onChange={(e) =>
                  setuseredit({ ...useredit, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>user Phone</Form.Label>
              <Form.Control
                type="email"
                placeholder={user.NumberPhone}
                onChange={(e) =>
                  setuseredit({ ...useredit, NumberPhone: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <button
            variant="secondary"
            onClick={handleClose}
            style={{
              backgroundColor: "red",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              width: "120px",
              height: "50px",
              marginLeft: "30px",
            }}
          >
            Close
          </button>
          <button
            variant="primary"
            onClick={() => {
              dispatch(userupdate({ id: user._id, useredit }));
              setping(!ping);
              handleClose();
              alertUp()
            }}
            style={{
              backgroundColor: "green",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              width: "120px",
              height: "50px",
              marginLeft: "30px",
            }}
          >
            Save Changes
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditUser;
