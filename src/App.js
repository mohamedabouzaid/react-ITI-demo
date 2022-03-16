
import './App.css';
import'./components/user'
import Navbar from './components/navbar';
import Home from './pages/home'
import About from './pages/about'
import UsersModule from './module/usersModule'


import { BrowserRouter ,Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="users/*" element={< UsersModule />} />
        <Route path="*" element={<div> 404 page</div>} />

      </Routes>
 
  </BrowserRouter>
      
      
    </div>

  );
}

export default App;
