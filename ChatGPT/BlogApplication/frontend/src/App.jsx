// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Posts from './components/Post';
import PostForm from './components/PostForm';
import AuthorPosts from './components/AuthorPosts';

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
                {isAuthenticated && <Route path="/posts" element={<Posts />} />}
                {isAuthenticated && <Route path="/create-post" element={<PostForm />} />}
                {isAuthenticated && <Route path="/author-post" element={<AuthorPosts />} />}
                <Route path="*" element={<h2>Page Not Found</h2>} />
            </Routes>
        </Router>
    );
}

export default App;
