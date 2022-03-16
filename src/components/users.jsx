import { useState ,useCallback, useMemo,useEffect} from "react";
import User from './user'
import AddUser from './addUser'
import { v4 as uuid } from "uuid";
import useToggle from "../hooks/useToggle";
import axios from "axios";
const Users = () => {
    const [users,setUsers] = useState();
  //console.log(users);
  const incrementAge=useCallback( (userId)=>{
   setUsers( (currentUsers)=>currentUsers.map((user)=>
           user.id===userId?{...user,age:user.age+1}:user
        ) 
   )
},[])
   

   const incrementUser=useCallback( ()=>{
   const newUser={id:uuid, name:"addedUser",age:70}
   const currentUsers=[...users]
   currentUsers.push(newUser)
  
    setUsers(currentUsers) 
  },[users])
  const addUserForm=useCallback( (user)=>{

  setUsers(currentUsers=>([...currentUsers,{...user,age:+user.age,id:uuid()}]));

  },[])
//custom hooks
const [isEnabled,toggle]=useToggle()


     ///useMemo
     const sum=useMemo(()=>{
		 return ()=>{
			return users?.length
		}

	 },[users?.length]

	 )

	//simulation of component will amount 
   useEffect(()=>{
	
	
	   return ()=>{
		   //code 
		   
	   }

   },[])
   
	//Api 
	useEffect(()=>{
		axios.get('https://jsonplaceholder.typicode.com/users')
		.then( (response) =>{
		
		 setUsers(response.data)
		})
		   return ()=>{
			   //code 
			   
		   }
	
	   },[])

  return(
<>   
    <div>
				{users?.map((user) => (
					 <User key={user.id} onIncrement={incrementAge} onUser={incrementUser} {...user} />
					
				))}
 			</div>
			 <button onClick={toggle}>{isEnabled ?'Disable':'Enable'}</button>
			 {isEnabled&&<div>Enable</div>}
			 <div>heavy calculation {sum()}</div>
			 </> 
     
      )
   

};

export default Users;
