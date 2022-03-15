import { useState ,useCallback} from "react";
import User from './user'
import AddUser from './addUser'
import { v4 as uuid } from "uuid";
import useToggle from "../hooks/useToggle";

const Users = () => {
    const [users,setUsers] = useState([
		{
			id: uuid(),
			name: "Omar",
			age: 29,
		},
		{
			id: uuid(),
			name: "Ahmed",
			age: 33,
		},
		{
			id: uuid(),
			name: "Yasser",
			age: 31,
		},
		{
			id: uuid(),
			name: "Hamsa",
			age: 22,
		},
	]);
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



  return(
<>    <AddUser AddUser={addUserForm} isEnabled={isEnabled}/>
    <div>
				{users.map((user) => (
					 <User key={user.id} onIncrement={incrementAge} onUser={incrementUser} {...user} />
					
				))}
 			</div>
			 <button onClick={toggle}>{isEnabled ?'Disable':'Enable'}</button>
			 {isEnabled&&<div>Enable</div>}
			 </> 
     
      )
   

};

export default Users;
