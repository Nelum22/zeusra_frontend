import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import { Route , Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/Login" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
