import {useState,useEffect,useRef}from 'react';


const AddUser = (props) => {
    //create ref
    const inputEl=useRef(null);
   const {AddUser,isEnabled}=props
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
   useEffect(()=>{
       if (! isEnabled) setUser({name:'',age:''})
   },[isEnabled])

  //useeffect to do foucus in ref
   useEffect(()=>{
   
   inputEl.current?.focus();


  },[])

    return (
        <>
         <div>
            add user
        </div>
        <form onSubmit={handleSubmit}>
           <input type='text' name='name' value={user.name} onChange={handleChange} ref={inputEl}/>
           <input type='text' name='age'value={user.age}  onChange={handleChange} />
           <input type="submit" value='add' disabled={!isEnabled}/>

        </form>
        </>
       
    );
};

export default AddUser;