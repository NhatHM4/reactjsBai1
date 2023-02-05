import ModalCreateUser from "./ModalCreateUser";
import anh from "../../../assets/bg2.jpg"
import { FcPlus } from "react-icons/fc";
import React, { useState } from "react";

const ManageUser = (props) => {

    const [show,setShow] = useState(false)
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <button className="btn btn-primary" onClick={() =>{setShow(true)}}><FcPlus/>Add New User</button>
        </div>
        <div>
          Table user
        </div>
        <ModalCreateUser show={show} setShow = {setShow}/>
      </div>
    </div>
  );
};

export default ManageUser;
