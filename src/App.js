import { useState } from 'react';
import './App.css';
import Homepage  from './components/homepage/homepage'
import Login from './components/login/login'
import Register from './components/register/register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  const [loginuser, setLoginUser] = useState({});
  const onLoginSuccess = (user) => {
    // Handle successful login, e.g., set user in state
    setLoginUser(user);
  };

  return (
    <Router> {/* Wrap your components in a Router */}
      <>
        {/* Use Routes component to define your routes */}
        <Routes>
           <Route path="/homepage" element={<Homepage user = {loginuser}/>} />
           <Route path="/register" element={<Register/>} />
           <Route path="/" element={<Login onLoginSuccess = {onLoginSuccess}/>} />
        </Routes>
      </>
    </Router>
  )
}

export default App;
