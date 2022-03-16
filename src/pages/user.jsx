import User from '../components/user'
import {useParams} from 'react-router-dom'
import {useContext,useState,useEffect} from 'react'
import{UserContext} from '../module/usersModule'
const UserPage = () => {
  const {id} = useParams()
  const{users,incrementAge, incrementUser}=useContext(UserContext)
  const [user,setUser]=useState()
  useEffect(()=>{
    if(users?.length) 
    setUser(users.find(u=>u.id===+id))
  },[id,users])

    return <User id={id} onIncrement={incrementAge} onUser={ incrementUser} {...user}/>
};

export default UserPage;