import ModalCreateUser from "./ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import React, { useState } from "react";
import TableUser from "./TableUser";
import { useEffect } from "react";
import { getAllUser } from "../../../service/apiServices";

const ManageUser = (props) => {
  const [show, setShow] = useState(false);
  const [listUsers, setListUser] = useState([]);
  const fetchdata = async () => {
    let res = await getAllUser();
    setListUser(res.data);
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
          <TableUser listUsers={listUsers} />
        </div>
        <ModalCreateUser show={show} setShow={setShow} fetchdata={fetchdata} />
      </div>
    </div>
  );
};

export default ManageUser;
