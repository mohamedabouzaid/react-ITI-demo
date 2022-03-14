import { Component } from "react";
class Task extends Component{
 /*   constructor(props){
           super(props)
           this.State={title:"print paper",deadline:3}
    }
*/
 State={
    title:"print paper",deadline:3

 }

   render(){
      const{title,deadline}=this.State
       return(
           <>
           <div>Task title is {title} and deadline {deadline} </div>
           <button onClick={()=>this.setState({title:'donnnne'})}>increment</button>
           <button onClick={()=>this.setState((oldState)=>({deadline:oldState.deadline-1}))} >decrement</button>
           
           </>

           )
       }
   }


export default Task;