import React from "react";

class DisplayInfo extends React.Component{
    
    showUser = (item) =>{
        return (
            <div>
                My name is {item.name} and My age is {item.age}
                <hr/>
            </div>
        )
    }

    render(){
       // destructuring array 
       const {listUsers} = this.props
       let testMap= listUsers.map((user) => this.showUser(user))
       let testForEach= listUsers.forEach((user) => this.showUser(user))
       console.log(testForEach)
        return(
            <div>
                 {
                   listUsers.map((user)=> {
                        return (
                            <div>
                                My name is {user.name} and my age is {user.age}
                                <hr/>
                            </div>
                        )
                    })
                 }

                 {
                    listUsers.map((user) => this.showUser(user))
                 }
            </div>
        )
    }
}

export default DisplayInfo