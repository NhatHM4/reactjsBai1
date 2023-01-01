import React from "react";
import { useState, useEffect } from 'react';
import "./DisplayInfor.scss";

const DisplayInfo = (props) => {
    // handleDeleteUser
  const handleDeleteUser = (userObject) => {
    props.deleteUser(userObject);
  };

  const {listUsers} = props;
  // destructuring array

  const [isShowListUser, setIsShowListUser] = useState(true)

  const handleOnClickShow= () =>{
    setIsShowListUser(!isShowListUser)
  }

  useEffect( () =>{
    console.log("useAffect")
    if (listUsers.length===0){
        alert("me")
    }
  },[listUsers]);


  return (
    <div className="display-infro-container">
        <div>
            <span onClick={()=> handleOnClickShow()}> {isShowListUser ? "Show" : "Hide"} List User</span>
        </div>
      {isShowListUser && (
        <div>
          {listUsers.map((user) => {
            return (
              <div key={user.id}>
                {
                  <div className={`${user.age > 26 ? "red" : "green"}`}>
                    <div>
                      My name is {user.name} and my age is {user.age}
                      <button onClick={() => handleDeleteUser(user)}>X</button>
                    </div>
                    <hr />
                  </div>
                }
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DisplayInfo;
