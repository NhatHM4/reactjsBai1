import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "NhatHM4",
    address: "DB",
    age: 24,
  };
  // JSX
  render() {
    return (
        <div>
            My name is {this.state.name}
        </div>
    );
  }
}

export default MyComponent;
