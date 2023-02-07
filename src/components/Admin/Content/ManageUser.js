import ModalCreateUser from "./ModalCreateUser";
import { useState } from "react";

const ManageUser = (props) => {

  const [show,setShow] = useState(false);

  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <button onClick={()=>setShow(true)}>Add New User</button>
        </div>
        <div>
          Table user
        </div>
        <ModalCreateUser show ={show} setShow={setShow}/>
      </div>
    </div>
  );
};

export default ManageUser;
