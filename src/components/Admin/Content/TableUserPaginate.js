import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

const Items = ({ currentItems, handleUpdate, handleView, handleDelete }) => {
  return (
    <>
      {currentItems &&
        currentItems.map((item, index) => (
          <>
            <tr key={`row-${index}`}>
              <td>{item.id}</td>
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
          </>
        ))}
    </>
  );
};

const PaginatedItems = ({ itemsPerPage, items, handleUpdate, handleView, handleDelete }) => {
  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, items]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} handleUpdate={handleUpdate} handleView={handleView} handleDelete={handleDelete} />
      <ReactPaginate
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

const TableUserPaginate = (props) => {
  const { listUsers, handleUpdate, handleView, handleDelete } = props;
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
          {!(listUsers.length === 0) && (
            <PaginatedItems itemsPerPage={4} items={listUsers} handleUpdate={handleUpdate} handleView={handleView} handleDelete={handleDelete}  />
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableUserPaginate;
