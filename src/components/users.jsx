import { useContext } from 'react';
import {UserContext} from '../module/usersModule'
import User from './user'
const Users = () => {
  const {users,isEnabled,toggle,incrementAge,incrementUser,sum}=useContext(UserContext)

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
