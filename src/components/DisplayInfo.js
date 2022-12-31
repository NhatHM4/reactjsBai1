import React from "react";

class DisplayInfo extends React.Component{

    state = {
        isShowList : true,
        listUserState : this.props.listUsers
    }

    
    handleShowUser = () =>{
        this.setState({
            isShowList : !this.state.isShowList
        })
    }

    handleShowUserElement = (indexReal) =>{
        const changeUser = this.state.listUserState.map((item,index)=>{
            if (indexReal === index){       
                 item.flag = !item.flag
                return item
            } else {
                return item;
            }
        })
        this.setState({
            listUserState : changeUser
        })
    }
    render(){
       // destructuring array  
       const listUserNone = this.props.listUsers; 
        return(
            <div>
                
                <button onClick={()=>this.handleShowUser()}>{this.state.isShowList ? "Ẩn hết" : "Hiện hết"}</button>
                {

                this.state.isShowList && <div>
                    {      
                    listUserNone.map((user)=> {
                        console.log(user)
                        return (
                                <div key = {user.id}>   
                                        <button onClick={()=>this.handleShowUserElement()}></button>
                                        {
                                            <div className={`${user.age>26?"red":"green"}`} >
                                                <div>
                                                    My name is {user.name} and my age is {user.age}
                                                </div>
                                                <hr/>
                                            </div>
                                        }
                                </div>
                                )    
                        })
                    }
                </div>
                }
            </div>
        )
    }
}

export default DisplayInfo