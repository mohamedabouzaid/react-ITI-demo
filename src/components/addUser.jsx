import {useState}from 'react';

const AddUser = (props) => {
   const {AddUser}=props
   const [user,setUser]=useState({name:'',age:''})
   const handleSubmit=(event)=>{
       event.preventDefault();
       AddUser(user);
       setUser({name:'',age:''})

   }
   const handleChange=(e)=>{
      const  {name,value}=e.target
      setUser((currentUser)=>({...currentUser,[name]:value}))
   }
    return (
        <>
         <div>
            add user
        </div>
        <form onSubmit={handleSubmit}>
           <input type='text' name='name' value={user.name} onChange={handleChange} />
           <input type='text' name='age'value={user.age}  onChange={handleChange} />
           <input type="submit" value='add'/>

        </form>
        </>
       
    );
};

export default AddUser;