import Users from '../pages/users';
import User from '../pages/user';
import AddUser from '../pages/adduser';
import {Route ,Routes} from 'react-router-dom'

const usersModule = () => {
    return (
        <>
         <Routes>
        <Route index element={<Users />} />
        <Route path="add" element={<AddUser />} />
        <Route path=":id" element={<User />} />
        </Routes>
        </>
    );
};

export default usersModule;