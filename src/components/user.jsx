import{Fragment} from 'react';
import{useState} from 'react'
const User=(props)=>{

     //const[user,setUser] = useState({name:'mohamed',age:26});
     const {name,age,id,onIncrement,onUser}=props

//<button onClick={()=>setUser((oldUser)=>({...oldUser,age:oldUser.age+1}))}>increment</button>
return(
     <Fragment>
         <div>user name {name } and age {age}</div>
         <button onClick={()=>onIncrement(id)}>increment</button>
         <button onClick={()=>onUser()}>addUser</button>
     </Fragment>
     
)

};
export default User;