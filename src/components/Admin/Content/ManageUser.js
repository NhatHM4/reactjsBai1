import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import React, { useState } from "react";
import TableUser from "./TableUser";
import { useEffect } from "react";
import { getAllUser, getUserById } from "../../../service/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ModalDeleteUser from "./ModalDeleteUser";
import ViewUser from "./ViewModal";

const ManageUser = (props) => {
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showView, setShowView] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const [listUsers, setListUser] = useState([]);
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    role: "",
    image: "",
    createAt: "",
    id: "",
  });
  const fetchdata = async () => {
    let res = await getAllUser();
    setListUser(res.data);
  };

  const handleDelete = (isShow,user)=>{
    setShowDelete(isShow);
    setUser(user)
  }

  const handleUpdate = (isUpdate, id) => {
    setShowUpdate(isUpdate);
    fechUserById(id);
  };

  const handleView = (id)=>{
    fechUserById(id);
    setShowView(true)
  }

  const fechUserById = async (id) => {
    let res = await getUserById(id);
    setUser(res.data);
  };

  // ComponentDidMount
  useEffect(() => {
    fetchdata();
  }, []);
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <button
            className="btn btn-primary"
            onClick={() => {
              setShow(true);
            }}
          >
            <FcPlus />
            Add New User
          </button>
        </div>
        <div>
          <TableUser listUsers={listUsers} handleUpdate={handleUpdate} handleView={handleView} handleDelete={handleDelete}/>
        </div>
        <ModalCreateUser show={show} setShow={setShow} fetchdata={fetchdata} />
        <ModalUpdateUser show={showUpdate} setShow={setShowUpdate} fetchdata={fetchdata} user={user}/>
        <ViewUser user={user} show={showView} setShow={setShowView}/>
        <ModalDeleteUser show={showDelete} setShowDelete={setShowDelete} user ={user} fetchdata={fetchdata}/>
      </div>
    </div>
  );
};

export default ManageUser;
