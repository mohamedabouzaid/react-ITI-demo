import{Fragment} from 'react';
import{useState,useEffect,useMemo} from 'react'
import propsTypes from 'prop-types'
import classes from '../styles/user.module.css'
import Users from './users';
import{Link} from 'react-router-dom'
const User=(props)=>{
  const styles={backgrondColor:"red"}
     //const[user,setUser] = useState({name:'mohamed',age:26});
     const {name,age,id,onIncrement,onUser}=props
     useEffect(()=>{
          console.log('Every render');
     })
     //componentDismount
     useEffect(()=>{
          console.log('first rinded');
     },[])




  const handleClick=()=>onIncrement(id)
  const handleUser=()=>onUser()
//<button onClick={()=>setUser((oldUser)=>({...oldUser,age:oldUser.age+1}))}>increment</button>
return(
     <Fragment>
         <div className={classes.user}>user name {name } and age {age}</div>
         
         <button  className={classes.btn} onClick={ handleClick}>increment</button>
         <button className={classes.btn} onClick={handleUser}>addUser</button>
         <Link  to={`/users/${id}`}>
         <button className={classes.btn} onClick={handleUser}>MoreDetail</button>
         </Link>
       
         

       
     </Fragment>
     
)

};
User.prototype={
     id:propsTypes.string.isRequired,
     age:propsTypes.number,
     name:propsTypes.string,
     onIncrement:propsTypes.func.isRequired
}

User.defaultProps={
     name:'anonymous',
     age:18
}
export default User;