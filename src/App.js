
import './App.css';
import Register from './Register.jsx'
import Login from './Login.jsx'
import {Route,Routes,NavLink} from 'react-router-dom'; 
function App() {
  return (
   <>
     <header>
       <nav className="navbar">
        <NavLink to="/login" className="nav-item">Login</NavLink>
        <NavLink to="/register" className="nav-item">Register</NavLink>
       </nav>
     </header>
     <Routes>
        <Route excat path="/register" element={<Register/>}></Route>
        <Route excat path="/login" element={<Login/>}></Route>
     </Routes>
   </>
  );
}

export default App;
