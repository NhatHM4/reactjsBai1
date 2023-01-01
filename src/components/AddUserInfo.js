import React from "react";
import { useState } from 'react';


const AddUserInfor = (props)=>{

  const [name , setName] = useState("NhatHM4")
  const [age , setAge] = useState("24")


  const handleOnChangeInput = (event)=>{
    let name =event.target.value
    setName(name)   
  }

  const handleOnChangeAge = (event)=>{
    setAge(event.target.value)
  }


  const handleOnSubmit = (event)=>{
    event.preventDefault()
    props.addNewUserInfor(
      {
        id: Math.floor((Math.random()*100) + 1),
        name : name,
        age : age,
        flag :true
      }
    );
  }


    return (
        <div>
        My name is {name} and age ${age}
        <form onSubmit={ (event) => handleOnSubmit(event)}>
          <label>your name</label>
          <input value={name} id="name" type = "text" onChange={(event)=>{handleOnChangeInput(event)}}/>
          <label>your age</label>
          <input value={age} id="name" type = "text" onChange={(event)=>{handleOnChangeAge(event)}}/>
          <button >submit</button>
        </form>
        </div>
    )

}

export default AddUserInfor