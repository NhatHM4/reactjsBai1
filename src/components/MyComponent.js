import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfor from "./UserInfo";
class MyComponent extends React.Component {
  
  state = {
    listUsers : [
      { id : 1, name : "NhatHM4" , age : '30', flag : true} ,
      { id : 2, name : "NhatHM5" , age : '25', flag : true} ,
      { id : 3, name : "NhatHM6" , age : '26', flag : true} 
    ]
  }

  // JSX
  render() {
    return (
        <div>

            <UserInfor/>
            <DisplayInfo listUsers = {this.state.listUsers}/>
        </div>
    );
  }
}

export default MyComponent;
