import React from "react";
import DisplayInfo from "./DisplayInfo";
import UserInfor from "./UserInfo";
class MyComponent extends React.Component {
  

  // JSX
  render() {
    return (
        <div>

            <UserInfor/>
            <DisplayInfo name= "Nhat cu te" age ="30"/>
            <DisplayInfo name= "Nhat cu to" age ="31"/>
        </div>
    );
  }
}

export default MyComponent;
