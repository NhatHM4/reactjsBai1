import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfor from "./AddUserInfo";
import { useState } from 'react';


const MyComponent = () =>{

  const [listUsers, setListUsers] = useState(
        [
          { id : 1, name : "NhatHM4" , age : '30', flag : true} ,
          { id : 2, name : "NhatHM5" , age : '25', flag : true} ,
          { id : 3, name : "NhatHM6" , age : '26', flag : true} 
        ]
  )
  const addNewUserInfor = (userObject)=>{
    setListUsers([userObject, ...listUsers])
  }

  const deleteUser = (userObject) =>{
    setListUsers(listUsers.filter((item) => item.id !== userObject.id))

  }

  // JSX
    return (
        <>
            <AddUserInfor addNewUserInfor={addNewUserInfor}/>
            <DisplayInfo listUsers = {listUsers} deleteUser = {deleteUser}/>
        </>
    );
}

export default MyComponent;
