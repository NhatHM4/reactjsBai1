import React from "react";
import "./DisplayInfor.scss";
import logo from "./../logo.svg";

// class DisplayInfo extends React.Component{

//     handleDeleteUser = (userObject) =>{
//         this.props.deleteUser(userObject)
//     }

//     render(){
//        // destructuring array
//        const listUserNone = this.props.listUsers;
//         return(
//             <div className="display-infro-container">

//                 {
//                 true && <div>
//                     {
//                     listUserNone.map((user)=> {
//                         console.log(user)
//                         return (
//                                 <div key = {user.id}>
//                                         <button onClick={()=>this.handleShowUserElement()}></button>
//                                         {
//                                             <div className={`${user.age>26?"red":"green"}`} >
//                                                 <div>
//                                                     My name is {user.name} and my age is {user.age}
//                                                     <button onClick={() => this.handleDeleteUser(user)}>X</button>
//                                                 </div>
//                                                 <hr/>
//                                             </div>
//                                         }
//                                 </div>
//                                 )
//                         })
//                     }

//                 </div>
//                 }
//             </div>
//         )
//     }
// }

const DisplayInfo = (props) => {
    // handleDeleteUser
  const handleDeleteUser = (userObject) => {
    props.deleteUser(userObject);
  };
  const listUserNone = props.listUsers;
  // destructuring array
  return (
    <div className="display-infro-container">
      {true && (
        <div>
          {listUserNone.map((user) => {
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
