import { useState } from "react";
import User from './user'
import { v4 as uuid } from "uuid";
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
  const incrementAge=(userId)=>{

   setUsers( (currentUsers)=>currentUsers.map((user)=>
           user.id===userId?{...user,age:user.age+1}:user
        ) 



   )
}
   

   const incrementUser=()=>{
   const newUser={id:uuid, name:"addedUser",age:70}
   const currentUsers=[...users]
   currentUsers.push(newUser)
  
    setUsers(currentUsers) 
  }
  return(
      
    <div>
				{users.map((user) => (
					 <User key={user.id} onIncrement={incrementAge} onUser={incrementUser} {...user} />
					
				))}
			</div>
     
      )
   

};

export default Users;
