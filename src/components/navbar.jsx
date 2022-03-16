import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
        <Link to="/users/add">Add User</Link>

        </>
    );
};

export default Navbar;