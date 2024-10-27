// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Posts from './components/Post';
import Login from './components/Login';


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to={isAuthenticated ? "/posts" : "/login"} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        {isAuthenticated && <Route path="/posts" element={<Posts />} />}
        <Route path="*" element={<h2>Page Not Found</h2>} />

      </Routes>
    </Router>
  );
}

export default App;
