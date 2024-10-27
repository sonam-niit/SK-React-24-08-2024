// src/components/Register.js
import React, { useState } from 'react';
import { registerUser } from '../services/api';

function Register() {
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerUser(formData);
            alert('Registration successful! Please log in.');
        } catch (error) {
            setError('Registration failed');
        }
    };

    return (
        <div className="container">
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleInputChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleInputChange} required />
                {error && <p>{error}</p>}
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}

export default Register;
