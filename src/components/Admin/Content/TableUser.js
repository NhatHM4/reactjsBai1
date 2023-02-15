const TableUser = (props) => {
  const {listUsers, handleUpdate, handleView, handleDelete} = props;
  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Email</th>
            <th scope="col">User Name</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers.map((item, index) => {
            return (
              <tr key={`row-${index}`}>
                <th>{item.id}</th>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.role}</td>
                <td>
                  <button className="btn btn-info mx-1" onClick={()=>{
                    handleView(item.id);
                  }}>View</button>
                  <button className="btn btn-danger mx-1" onClick={()=>{
                    handleUpdate(true,item.id);
                  }}>Update</button>
                  <button className="btn btn-dark mx-1" onClick={()=>{
                    handleDelete(true, item);
                  }}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
