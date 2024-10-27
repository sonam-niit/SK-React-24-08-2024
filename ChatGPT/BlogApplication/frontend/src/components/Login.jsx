// src/components/Login.js
import React, { useState } from 'react';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);
    const navigate= useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            
            const response = await loginUser(formData);
            localStorage.setItem('token', response.data.token);
            onLogin();
            alert("Logged In")
            navigate('/posts')
            
        } catch (error) {
            console.log(error);
            
            setError('Login failed');
        }
    };

    return (
        <div className="container">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleInputChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
                {error && <p>{error}</p>}
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;
