import ModalCreateUser from "./ModalCreateUser";
import anh from "../../../assets/bg2.jpg"

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="users-content">
        <div>
          <button>Add New User</button>
        </div>
        <div>
          Table user
        </div>
        <ModalCreateUser/>
      </div>
    </div>
  );
};

export default ManageUser;
