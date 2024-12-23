// src/components/Register.js
import React, { useState } from 'react';
import { registerUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);
    const navigate= useNavigate();
    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            alert('Registration successful! Please log in.');
            navigate('/login');
        } catch (error) {
            setError('Registration failed');
        }
    };

    return (
        <div className="container">
            <h2 className='p-2 my-2 text-bg-secondary text-center'>Register Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" 
                onChange={handleInputChange} required className='form-control mb-3' />
                <input type="password" name="password" placeholder="Password" 
                onChange={handleInputChange} required className='form-control mb-3'/>
                {error && <p>{error}</p>}
                <button type="submit" className="btn btn-primary mb-3 w-100">Register</button>
            </form>
        </div>
    );
}

export default Register;
