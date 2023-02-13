import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import React, { useState } from "react";
import TableUser from "./TableUser";
import { useEffect } from "react";
import { getAllUser, getUserById } from "../../../service/apiServices";
import ModalUpdateUser from "./ModalUpdateUser";
import ViewUser from "./ViewModal";

const ManageUser = (props) => {
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [showView, setShowView] = useState(false);
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
          <TableUser listUsers={listUsers} handleUpdate={handleUpdate} handleView={handleView}/>
        </div>
        <ModalCreateUser show={show} setShow={setShow} fetchdata={fetchdata} />
        <ModalUpdateUser
          show={showUpdate}
          setShow={setShowUpdate}
          fetchdata={fetchdata}
          user={user}
        />
        <ViewUser user={user} show={showView} setShow={setShowView}/>
      </div>
    </div>
  );
};

export default ManageUser;
