import React from "react";

class DisplayInfo extends React.Component{
    render(){
        console.log(this.props)
        const {name , age} = this.props
        return(
            <div>
                My name is NhatHM4 {name}
                My age is 24 {age}
            </div>
        )
    }
}

export default DisplayInfo