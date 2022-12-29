import React from "react";
class MyComponent extends React.Component {
  state = {
    name: "NhatHM4",
    address: "DB",
    age: 24,
  };

  // handleClick = (age) =>{
  //   // console.log(">>click me")
  //   console.log(`My name is ${this.state.name} = ${age}`)
  // }

  handleClick(age){
    // console.log(">>click me")
    console.log(`My name is ${this.state.name} = ${age}`)
    this.setState({
      name : "MinhNhat"
    })
  }

  handleOnMouseOver(event){
    let random = Math.floor((Math.random()*100) + 1);
    console.log(event)
    this.setState({
      age : this.state.age + parseInt(random)
    })
  }
  // JSX
  render() {
    return (
        <div>
            My name is {this.state.name} and age ${this.state.age}
            <button onMouseOver={(event)=>this.handleOnMouseOver(event)}>Have me</button>
            <button onClick={ () => {this.handleClick(this.state.age)}}>click me</button>
        </div>
    );
  }
}

export default MyComponent;
