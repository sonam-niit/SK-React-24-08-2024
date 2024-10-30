// src/components/PostForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPost } from '../services/api';

function PostForm() {
    const [post, setPost] = useState({ title: '', content: '' });
    const [message, setMessage] = useState('');
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createPost(post, token);
            setMessage('Post created successfully!');
            setPost({ title: '', content: '' });
            // Redirect to Posts component
            navigate('/posts');
        } catch (error) {
            setMessage('Failed to create post');
        }
    };

    return (
        <div className="container mt-5">
            <h2>Create New Post</h2>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={post.title}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Content</label>
                    <textarea
                        name="content"
                        value={post.content}
                        onChange={handleInputChange}
                        className="form-control"
                        rows="5"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default PostForm;
