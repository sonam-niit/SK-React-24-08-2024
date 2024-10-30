// src/components/Posts.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPosts } from '../services/api';

function Posts() {
    const [posts, setPosts] = useState([]);
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    useEffect(() => {
        async function getPosts() {
            const response = await fetchPosts(token);
            setPosts(response.data);
        }
        getPosts();
    }, [token]);

    // Function to format the date
    const formatDate = (date) => {
        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        }).format(new Date(date));
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center mt-3">
                <h2>Blogs</h2>
                <button className="btn btn-primary" onClick={() => navigate('/create-post')}>
                    Add New Blog
                </button>
                <button className="btn btn-primary" onClick={() => navigate('/author-post')}>
                    Show My Blogs
                </button>
            </div>
            {posts.map(post => (
                <div key={post._id} className="card mb-3">
                    <div className="card-body">
                        <h5>{post.title}</h5>
                        <p>{post.content}</p>
                        <small className="text-muted">
                            By {post.author.username} | {formatDate(post.createdAt)}
                        </small>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Posts;
