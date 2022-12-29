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

  handleOnChangeInput = (event)=>{
    this.setState({
      age :this.state.age + Math.floor((Math.random()*100) + 1)
    })
    let name =event.target.value
                this.setState({
                  name : name
                })
  }


  handleOnSubmit = (event)=>{
    event.preventDefault()
  }

  // JSX
  render() {
    return (
        <div>
            My name is {this.state.name} and age ${this.state.age}
            <form onSubmit={ (event) => this.handleOnSubmit(event)}>
              <input id="name" type = "text" onChange={(event)=>{this.handleOnChangeInput(event)}}/>
              <button >submit</button>
            </form>
        </div>
    );
  }
}

export default MyComponent;
