// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container text-center mt-5">
            <h1>Welcome to the Blog App</h1>
            <p>Please register or login to continue.</p>
            <div className="mt-3">
                <Link to="/register" className="btn btn-primary me-2">Register</Link>
                <Link to="/login" className="btn btn-secondary">Login</Link>
            </div>
        </div>
    );
}

export default Home;
