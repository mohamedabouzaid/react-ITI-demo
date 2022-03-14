import logo from './logo.svg';
import './App.css';
import'./components/user'
import Users from './components/users';
import Task from './components/task';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      
      <Users/>
      <Task />
      <Navbar/>
    </div>

  );
}

export default App;
