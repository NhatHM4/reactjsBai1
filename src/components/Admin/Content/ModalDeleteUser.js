import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { HiTrash } from 'react-icons/hi';
import {deleteUserById} from '../../../service/apiServices'
import { toast } from "react-toastify";

const ModalDeleteUser = (props) =>{
    const {show,setShowDelete, user, fetchdata} = props

const handleClose = async (user)=>{
    let res = await deleteUserById(user.id);
    if (res.status === 200){
        toast.success("Delete user success")
    } else {
        toast.error("Delete user fail")
    }
    setShowDelete(false);
    await fetchdata();
}

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={()=>{
        setShowDelete(false);
      }} >
        <Modal.Header closeButton>
          <Modal.Title>Are you sure???</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to delete User: {user.email}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>{
            setShowDelete(false);
          }}>
            Close
          </Button>
          <Button variant="danger" onClick={()=>{
            handleClose(user)
          }}>
            <HiTrash size="1.2em"/> Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalDeleteUser;