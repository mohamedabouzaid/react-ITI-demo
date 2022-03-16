import logo from './logo.svg';
import './App.css';
import'./components/user'
import Navbar from './components/navbar';
import Home from './pages/home'
import About from './pages/about'
import Users from './pages/users'
import AddUser from './pages/adduser'

import { BrowserRouter ,Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users" element={<Users />} />
        <Route path="users/add" element={<AddUser />} />
      </Routes>
 
  </BrowserRouter>
      
      
    </div>

  );
}

export default App;
