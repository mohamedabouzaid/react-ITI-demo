///import { pureComponent } from "react";
import { Component } from "react";
//class Task extends pureComponent{
import classes from '../styles/task.module.css'
class Task extends Component{  
constructor(props){
           super(props)
           this.State={title:"print paper",deadline:3}
           console.log('constructor');
    }

 /*State={
    title:"print paper",deadline:3

 }*/

  componentDidMount(){
      console.log('componentDidMoun');

  }
  componentDidUpdate(){
      console.log('componentDidUpdate');
  }
  componentWillUnmount(){
      alert();
  }
  shouldComponentUpdate(){
      console.log('shouldComponentUpdate');
      return true;
  }
   render(){
       console.log('render');
      const{title,deadline}=this.State
       return(
           <>
           <div>Task title is {title} and deadline {deadline} </div>
           <button className={classes.btn} onClick={()=>this.setState({title:'donnnne'})}>increment</button>
           <button className={classes.btn} onClick={()=>this.setState((oldState)=>({deadline:oldState.deadline-1}))} >decrement</button>
           
           </>

           )
       }
   }


export default Task;