import React from "react";

class UserInfor extends React.Component{

    state = {
        name: "NhatHM4",
        address: "DB",
        age: 24,
      };
    
    
    
      handleOnChangeInput = (event)=>{
        let name =event.target.value
                    this.setState({
                      name : name
                    })
      }
    
      handleOnChangeAge = (event)=>{
        this.setState({
          age : event.target.value
        })
      }
    
    
      handleOnSubmit = (event)=>{
        event.preventDefault()
      }

    render(){
        return (
            <div>
            My name is {this.state.name} and age ${this.state.age}
            <form onSubmit={ (event) => this.handleOnSubmit(event)}>
              <label>your name</label>
              <input value={this.state.name} id="name" type = "text" onChange={(event)=>{this.handleOnChangeInput(event)}}/>
              <label>your age</label>
              <input value={this.state.age} id="name" type = "text" onChange={(event)=>{this.handleOnChangeAge(event)}}/>
              <button >submit</button>
            </form>
            </div>
        )
    }
}

export default UserInfor