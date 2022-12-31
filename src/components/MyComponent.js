import React from "react";
import DisplayInfo from "./DisplayInfo";
import AddUserInfor from "./AddUserInfo";
class MyComponent extends React.Component {
  
  state = {
    listUsers : [
      { id : 1, name : "NhatHM4" , age : '30', flag : true} ,
      { id : 2, name : "NhatHM5" , age : '25', flag : true} ,
      { id : 3, name : "NhatHM6" , age : '26', flag : true} 
    ]
  }
  addNewUserInfor = (userObject)=>{
    this.setState({
      listUsers: [userObject,...this.state.listUsers]
      })
  }

  // JSX
  render() {
    return (
        <div>
            <AddUserInfor addNewUserInfor={this.addNewUserInfor}/>
            <DisplayInfo listUsers = {this.state.listUsers}/>
        </div>
    );
  }
}

export default MyComponent;
