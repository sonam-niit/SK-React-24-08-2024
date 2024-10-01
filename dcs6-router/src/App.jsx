import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Login from "./components/login"
import ProtectedRoute from "./components/ProtectedRoute"
import Dashboard from "./components/dashboard"
import { useState } from "react"

function App() {
  const [isAuthenticated,setIsAuthenticated]=useState(localStorage.getItem('loggedIn')
?true:false);
  const login=()=>{
    setIsAuthenticated(true);
    localStorage.setItem('loggedIn',true);
  };
  const logout=()=>{
    setIsAuthenticated(false);
    localStorage.removeItem('loggedIn');
  };
  return (
    <BrowserRouter>

      <ul class="nav justify-content-center">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" >Home</Link>
        </li>
        {
          isAuthenticated?
          <li class="nav-item">
          <button class="nav-link" onClick={logout}>logout</button>
        </li>:
          <li class="nav-item">
          <Link class="nav-link" to="login" >Login</Link>
        </li>
        }
        
      </ul>
      <Routes>
        <Route path="login" element={<Login login={login}/>}/>
        <Route path="dashboard" element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
