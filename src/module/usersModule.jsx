import Users from '../pages/users';
import User from '../pages/user';
import AddUser from '../pages/adduser';
import {Route ,Routes} from 'react-router-dom'
import { useState ,useCallback, useMemo,useEffect,createContext} from "react";
import { v4 as uuid } from "uuid";
import useToggle from "../hooks/useToggle";
import axios from "axios";

export const UserContext=createContext();
const UsersModule = () => {
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


////context api

const contextValue = useMemo(
    () => ({
        users,
        isEnabled,
        toggle,
        incrementUser,
        addUserForm,
        incrementAge,
        sum
    }),
    [addUserForm, incrementAge, incrementUser, isEnabled, toggle, users,sum]
);
    
    return (
        <>
        <UserContext.Provider value={contextValue}>
         <Routes>
        <Route index element={<Users />} />
        <Route path="add" element={<AddUser />} />
        <Route path=":id" element={<User />} />
        </Routes>
        </UserContext.Provider>
        </>
    );
};

export default UsersModule;